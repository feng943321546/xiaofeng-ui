// .vitepress/theme/utils/highlight.ts
import Prism from "prismjs";
// ✅ 加载基础语言（必须）- Vue 模块依赖它们
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";

// ✅ 其他常用语言（可选）
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-tsx";

// ✅ 最后加载 vue（一定要放最后）
// import 'prismjs/components/prism-vue'

// 可选主题样式（根据你文档的配色主题选）
import "prismjs/themes/prism-tomorrow.css";

export function highlight(code: string, lang = "vue") {
    if (lang === "vue") lang = "markup"; // 👈 vue 使用 markup 渲染
    if (Prism.languages[lang]) {
        return Prism.highlight(code, Prism.languages[lang], lang);
    }
    return code;
}
