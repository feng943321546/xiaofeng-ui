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


// 自动导入 method.ts（如果存在）
const methodImports = componentNames
  .map((name) => {
    const methodPath = path.resolve(componentsDir, name, "method.ts");
    if (fs.existsSync(methodPath)) {
      return `export * from './${name}/method'`;
    }
    return null;
  })
  .filter(Boolean)
  .join("\n");

const exportBlock = `export {\n  ${componentNames.map(upperCamelCase).join(",\n  ")}\n}`;

const installList = componentNames.map((name) => `${upperCamelCase(name)}`).join(",\n  ");

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
${methodImports}
`;

fs.writeFileSync(output, content);
console.log("✅ 已生成 src/components/index.ts,包括组件默认导出和 method.ts 扩展导出");
