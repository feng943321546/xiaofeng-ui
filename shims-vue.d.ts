// shims-vue.d.ts
declare module "*.vue" {
    // import { DefineComponent } from 'vue';
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
