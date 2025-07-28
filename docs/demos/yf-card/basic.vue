<template>
  <div class="card-demo">
    <!-- 使用 header 属性 -->
    <yf-card header="默认卡片" shadow="always">
      <p>使用 header 属性作为标题。</p>
      <p>shadow 默认为 always。</p>
    </yf-card>

    <!-- 使用插槽 header -->
    <yf-card shadow="hover">
      <template #header>
        <span style="color: #078BF9; font-weight: bold;">插槽标题（hover 阴影）</span>
      </template>
      <p>标题通过 header 插槽传入。</p>
      <p>当鼠标悬浮时显示阴影。</p>
    </yf-card>

    <!-- 无阴影模式 -->
    <yf-card header="无阴影卡片" shadow="never">
      <p>设置 shadow="never"，不显示阴影。</p>
    </yf-card>
  </div>
</template>

<style scoped>
.card-demo {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 14px;
  line-height: 1.6;
}
</style>
<script setup lang="ts"></script>