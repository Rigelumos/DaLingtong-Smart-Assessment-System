<template>
  <div id="userLayout">
    <a-layout style="height: 100vh">
      <a-layout-header>
        <a-space>
          <img class="logo" src="../assets/class.jpg" />
          <div>鹰院智慧厅 AI 答题平台</div>
        </a-space>
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
</script>

<style scoped>
#userLayout {
  text-align: center;
  background: url('https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png') 0% 0% /
    100% 100%;
}

#userLayout .logo {
  height: 48px;
  width: 48px;
}

#userLayout .Header {
  margin-top: 16px;
  font-size: 21px;
}
#userLayout .content {
  margin-bottom: 28px;
  padding: 20px;
}
.footer {
  background: #efefef;
  padding: 16px;
  text-align: center;
}
</style>