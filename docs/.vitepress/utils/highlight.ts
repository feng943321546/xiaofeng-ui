// .vitepress/theme/utils/highlight.ts
import Prism from "prismjs";
import "prismjs/components/prism-markup";   // 支持 HTML
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-diff";
import "prismjs/components/prism-markdown";
// import "prismjs/components/prism-vue";      // 关键，支持 .vue 高亮
import "prismjs/themes/prism.css";          // 或 prism-tomorrow.css 等

export function highlight(code: string, lang = "vue"): string {
	const grammar = Prism.languages[lang];
	if (!grammar) return code;
	return Prism.highlight(code, grammar, lang);
}
