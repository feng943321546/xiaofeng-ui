const fs = require("fs");
const path = require("path");

const componentsDir = path.resolve(__dirname, "../src/components");
const output = path.resolve(componentsDir, "index.ts");

const componentNames = fs.readdirSync(componentsDir).filter((name) => {
    const entry = path.resolve(componentsDir, name, "index.ts");
    return fs.existsSync(entry);
});

function upperCamelCase(str) {
    return str
        .split("-")
        .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
        .join("");
}

const imports = componentNames.map((name) => `import ${upperCamelCase(name)} from './${name}'`).join("\n");

const exportBlock = `export {\n  ${componentNames.map(upperCamelCase).join(",\n  ")}\n}`;

const installList = componentNames.map((name) => `${upperCamelCase(name)}`).join(",\n  ");

// const content = `${imports}
const content = `import type { App } from 'vue'
${imports ? "\n" + imports : ""}

const components = [
  ${installList}
]

const install = (app: App): void => {
  components.forEach(comp => {
    const compName = comp.name || comp.__name
    if (compName) {
      app.component(compName, comp)
    }
  })
}

export default {
  install
}

${exportBlock}
`;

fs.writeFileSync(output, content);
console.log("✅ 已生成 src/components/index.ts");
