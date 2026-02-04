// docs/.vitepress/config.ts
//  ✅ 侧边栏配置
import {defineConfig} from "vitepress";
import {fileURLToPath} from "node:url";
import {dirname, resolve} from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
	base: "/xiaofeng-ui/", // 👈 一定要加仓库名 + 结尾斜杠，这个写的是GitHub的仓库名
	title: "小沣UI组件库",
	description: "基于 Vue 3 + TypeScript 的组件库",
	outDir: "../dist/docs", // outDir 是 相对于 docs 目录 来写的   所以 ../dist/docs 就会指向项目根目录下的 dist/docs
	locales: {
		// 默认中文：放在 root 下
		root: {
			label: '简体中文',
			lang: 'zh-CN',
			link: '/',
			themeConfig: {
				// search: { provider: 'local' },
				nav: [
					{text: "首页", link: "/"},
					{text: "组件", link: "/components/yf-button"},
				],
				sidebar: {
					"/components/": [
						{
							text: "基础组件",
							items: [
								{text: "Button 按钮", link: "/components/yf-button"},
								{text: "Alert 提示", link: "/components/yf-alert"},
								{text: "Input 输入框", link: "/components/yf-input"},
								{text: "Icon 图标", link: "/components/yf-icon"},
								{text: "Card 卡片", link: "/components/yf-card"},
								{text: "Message 消息提示", link: "/components/yf-message"},
								{text: "MessageBox 消息弹框", link: "/components/yf-message-box"},
								{text: "Tag 标签", link: "/components/yf-tag"},
								// { text: "Loading 加载", link: "/components/yf-loading" },
							],
						},
					],
				},
			},
		},
		// 英文版作为可切换语言
		/*en: {
			label: 'English',
			lang: 'en-US',
			link: '/en/',
			themeConfig: {
				nav: [
					{text: "Home", link: "/en/"},
					{text: "components", link: "/components/yf-button"},
				],
				sidebar: {
					"/components/": [
						{
							text: "Basic components",
							items: [
								{text: "Button", link: "/components/yf-button"},
								{text: "Alert", link: "/components/yf-alert"},
							],
						},
					],
				},
				search: {
					provider: 'local', // 或干脆移除
				},
			},
		}*/
	},
	themeConfig: {
		/*nav: [
			{text: "首页", link: "/"},
			{text: "组件", link: "/components/yf-button"},
		],
		sidebar: {
			"/components/": [
				{
					text: "基础组件",
					items: [
						{text: "Button 按钮", link: "/components/yf-button"},
						{text: "Alert 提示", link: "/components/yf-alert"},
						{text: "Input 输入框", link: "/components/yf-input"},
						{text: "Icon 图标", link: "/components/yf-icon"},
						{text: "Card 卡片", link: "/components/yf-card"},
						{text: "Message 消息提示", link: "/components/yf-message"},
						{text: "MessageBox 消息弹框", link: "/components/yf-message-box"},
						// { text: "Loading 加载", link: "/components/yf-loading" },
					],
				},
			],
		},*/
		search: { provider: 'local',},
	},
	
	// 👇 关键配置：向下兼容型写法
	vite: {
		server: {
			fs: {
				allow: [resolve(__dirname, "../")], // 启用访问 demos
			},
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "../../src"),
				"@demos": resolve(__dirname, "../demos"),
				"@docs": resolve(__dirname, "../../docs"),
				"@components": resolve(__dirname, "../../src/components"),
			},
		},
		optimizeDeps: {
			include: ['prismjs'],
		},
		// assetsInclude: ['**/*.vue'], // 避免 vue 文件被过滤
		// css: {
		//     preprocessorOptions: {
		//         scss: {
		//             additionalData: `@import "@/style/variables.scss";`,
		//         },
		//     },
		// },
	} as any, // 👈 如果报错就加这个
});
