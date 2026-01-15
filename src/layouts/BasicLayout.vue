<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-03-03 10:27:21
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-03-05 19:17:54
 * @FilePath: \ravenclaw-frontend\src\layouts\BasicLayout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="basicLayout">
    <a-layout style="height: 100vh">
      <a-layout-header>
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://github.com/Rigelumos" target="_blank">Rigelumos's GitHub</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
</script>

<style scoped>
#basicLayout {
}
#basicLayout .Header {
  margin-bottom: 16px;
  box-shadow: rebeccapurple 1px 1px 5px;
}
#basicLayout .content {
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  margin:0 auto;
  background: linear-gradient(to right, #fefefe, #fff);
  margin-bottom: 28px;
  padding: 20px;
}
.footer {
  background: #efefef;
  padding: 16px;
  text-align: center;
}
</style>