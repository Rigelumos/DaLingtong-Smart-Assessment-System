<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-03-03 19:34:46
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-03-06 10:29:50
 * @FilePath: \ravenclaw-frontend\src\views\user\UserLoginPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="userLoginPage">
    <h2 style="margin-bottom: 32px"></h2>
    <a-form
      :model="form"
      :style="{ width: '480px', margin: '0 auto' }"
      label-align="left"
      auto-label-width
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号..." />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不小于8位" label="密码">
        <a-input-password v-model="form.userPassword" placeholder="请输入密码..." />
      </a-form-item>
      <a-form-item>
        <div
          style="display: flex; width: 100%; align-items: center; justify-content: space-between"
        >
          <a-button type="primary" html-type="submit" style="width: 120px">登录</a-button>
          <a-link href="/user/register">新用户注册</a-link>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import API from '@/api'
import { userLoginUsingPost } from '@/api/userController'
import { useLoginUserStore } from '@/store/userStore'
import message from '@arco-design/web-vue/es/message'
import { useRouter } from 'vue-router'

const loginUserStore = useLoginUserStore()

const router = useRouter()

const form = reactive({
  userAccount: '',
  userPassword: ''
} as API.UserLoginRequest)

/**
 * 提交
 */
const handleSubmit = async () => {
  console.log(form)
  const res = await userLoginUsingPost(form)
  if (res.data.code === 0) {
    await loginUserStore.fetchLoginUser()
    message.success('登录成功')
    router.push({
      path: '/',
      replace: true
    })
  } else {
    message.error('登录失败' + res.data.message)
  }
}
</script>
