<template>
    <!-- <div>
        <a target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div> -->
    <div class="appBody">
        <div>
            <yf-input v-model="inputValue" placeholder="请输入内容" />
        </div>
        <div class="mt-20">
            <yf-icon name="el-icon-search" size="20" color="#078bf9">
                <Edit style="width: 60px; height: 60px" />
            </yf-icon>
            <i class="el-icon-search width-50 height-50"></i>
        </div>
        <div class="mt-20">
            <yf-icon size="80" color="#fa6767">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"></path></svg>
            </yf-icon>
        </div>
        <div>
            <yf-card title="卡片标题" description="卡片描述内容">
                <template #header>
                    <div class="card-header">自定义头部</div>
                </template>
                这里是卡片的主体内容
            </yf-card>

            <yf-card shadow="hover">
                <template #header>
                    <span style="color: #078bf9; font-weight: bold">插槽标题（hover 阴影）</span>
                </template>
                <p>标题通过 header 插槽传入。</p>
                <p>当鼠标悬浮时显示阴影。</p>
            </yf-card>
        </div>
        <div class="mt-20">
            <yf-button type="primary" @click="handleClick('主要按钮')">主要按钮111111111</yf-button>
            <yf-button type="danger">危险按钮222222222</yf-button>
            <yf-button type="info">默认按钮333333333</yf-button>
        </div>
        <div class="mt-20">
            <yf-button plain>默认按钮</yf-button>
            <yf-button type="primary" plain>主要按钮</yf-button>
            <yf-button type="success" plain>成功按钮</yf-button>
            <yf-button type="warning" plain>警告按钮</yf-button>
            <yf-button type="danger" plain>危险按钮</yf-button>
            <yf-button type="info" plain>信息按钮</yf-button>
        </div>
        <div style="margin-top: 20px">
            <yf-alert type="success" title="操作成功" description="你的操作已经成功提交" :close="true" show-icon @close="handleClose" @open="handleOpen" />
            <yf-alert type="warning" closeText="x" :close="true" @close="handleClose" @open="handleOpen">
                <template #title>自定义标题</template>
                <template #icon><i class="custom-icon-class">沣</i></template>
                这里是自定义内容
            </yf-alert>
            <yf-alert type="success" plain>成功提示</yf-alert>
            <yf-alert type="info">信息提示</yf-alert>
            <yf-alert type="warning" plain>警告提示</yf-alert>
            <yf-alert type="error">错误提示</yf-alert>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    import { showMessage } from "./components/yf-message";

    // import { showMessage } from "my-ui-xiaofeng";
    const inputValue = ref("初始值");
    const handleClick = (nameType: string) => {
        console.log(`${nameType} 被点击了`);
        showMessage({
            message: `这是一条 ${nameType} 类型的 plain 消息`,
            type: "primary",
            plain: true,
            duration: 2500,
        });
        // showMessage({
        //     message: "操作成功",
        //     type: "success",
        //     plain: false,
        //     duration: 3000,
        //     onClose: () => console.log("关闭了"),
        // });
    };
    function handleClose() {
        console.log("Alert 被关闭了");
    }
    function handleOpen() {
        console.log("Alert 被打开了");
    }
</script>

<style scoped>
    .appBody {
        padding: 30px;
    }
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
