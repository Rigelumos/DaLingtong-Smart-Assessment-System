<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-03-06 09:57:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-03-26 15:46:09
 * @FilePath: \ravenclaw-frontend\src\views\add\AddAppPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="addAppPage">
    <a-form
      :model="form"
      :style="{ width: '480px', margin: '0 auto' }"
      label-align="left"
      auto-label-width
      @submit="handleSubmit"
    >
      <h2 style="margin-bottom: 16px">创建应用</h2>
      <a-form-item field="appName" label="应用名称">
        <a-input v-model="form.appName" placeholder="请输入应用名称..." />
      </a-form-item>
      <a-form-item field="appDesc" label="应用描述">
        <a-input v-model="form.appDesc" placeholder="请输入应用描述..." />
      </a-form-item>
      <!-- <a-form-item field="appIcon" label="应用图标">
        <PictureUploader :value="form.appIcon" :onChange="value => (form.appIcon = value)"/>
      </a-form-item> -->
      <a-form-item field="appType" label="应用类型">
        <a-select
          v-model="form.appType"
          :style="{ width: '320px' }"
          placeholder="Please select ..."
        >
          <a-option v-for="(value, key) of APP_TYPE_MAP" :value="Number(key)" :label="value" />
        </a-select>
      </a-form-item>
      <a-form-item field="scoringStrategy" label="评分策略">
        <a-select
          v-model="form.scoringStrategy"
          :style="{ width: '320px' }"
          placeholder="Please select ..."
        >
          <a-option
            v-for="(value, key) of APP_SCORING_STRATEGY_MAP"
            :value="Number(key)"
            :label="value"
          />
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineProps, withDefaults, watchEffect } from 'vue'
import API from '@/api'
import { userLoginUsingPost } from '@/api/userController'
import { useLoginUserStore } from '@/store/userStore'
import message from '@arco-design/web-vue/es/message'
import { useRouter } from 'vue-router'
import { addAppUsingPost, editAppUsingPost, getAppVoByIdUsingGet } from '@/api/appController'
import { APP_SCORING_STRATEGY_MAP, APP_TYPE_MAP } from '@/constant/app'

interface Props {
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return ''
  }
})

const loginUserStore = useLoginUserStore()

const router = useRouter()

const form = ref({
  appDesc: '',
  appIcon: '',
  appName: '',
  appType: 0,
  scoringStrategy: 0
} as API.AppAddRequest)

const oldApp = ref<API.AppVO>()

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.id) {
    return ''
  }
  const res = await getAppVoByIdUsingGet({
    id: props.id as any
  })
  if (res.data.code === 0 && res.data.data) {
    oldApp.value = res.data.data
    form.value = res.data.data
  } else {
    message.error('获取数据失败，' + res.data.message)
  }
}

//获取旧数据
watchEffect(() => {
  loadData()
})

/**
 * 提交
 */
const handleSubmit = async () => {
  let res
  // 如果是修改
  if (props.id) {
    res = await editAppUsingPost({
      id: props.id as any,
      ...form.value
    })
  } else {
    // 创建
    res = await addAppUsingPost(form.value)
  }
  if (res.data.code === 0) {
    message.success('创建成功，即将跳转到应用详情页')
    setTimeout(() => {
      router.push(`/app/detail/${props.id || res.data.data}`)
    }, 3000)
  } else {
    message.error('创建失败' + res.data.message)
  }
}
</script>
