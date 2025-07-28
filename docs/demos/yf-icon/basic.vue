<template>
    <div class="icon-demo">
        <!-- 图标方式一：通过 name（类名） -->
        <div class="block">
            <p>使用 name 加 class 名</p>
            <yf-icon name="el-icon-search" size="24" color="#078bf9" />
        </div>

        <!-- 图标方式二：通过插槽传入 SVG -->
        <div class="block">
            <p>插槽传入 SVG 图标</p>
            <yf-icon size="24" color="#07bdb9">
                <svg viewBox="0 0 1024 1024">
                    <path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64Zm0 832A384 384 0 1 1 896 512 384.43 384.43 0 0 1 512 896Zm-64-544a64 64 0 1 1 64 64 64 64 0 0 1-64-64Zm128 352h-128a32 32 0 0 1 0-64h32v-128h-32a32 32 0 0 1 0-64h96a32 32 0 0 1 32 32v160h32a32 32 0 0 1 0 64Z" />
                </svg>
            </yf-icon>
        </div>

        <!-- 图标方式三：两者都传，插槽优先 -->
        <div class="block">
            <p>同时传 name 和插槽（优先展示插槽）</p>
            <yf-icon name="el-icon-delete" size="24" color="#fa6767">
                <svg viewBox="0 0 1024 1024">
                    <path d="M512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64Zm160 576a32 32 0 0 1-45.25 45.25L512 557.25l-114.75 114.75A32 32 0 0 1 352 627.25L466.75 512 352 397.25A32 32 0 0 1 397.25 352L512 466.75 626.75 352A32 32 0 0 1 672 397.25L557.25 512Z" />
                </svg>
            </yf-icon>
        </div>
    </div>
</template>

<style scoped>
    .icon-demo {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 14px;
        line-height: 1.6;
    }

    .block {
        display: flex;
        align-items: center;
        gap: 12px;
    }
</style>
