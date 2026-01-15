<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-03-05 16:46:12
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-03-07 11:40:58
 * @FilePath: \ravenclaw-frontend\src\components\AppCard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <a-card class="appCard" hoverable @click="doCardClick">
    <template #actions>
      <!-- <span class="icon-hover"><IconThumbUp /></span>
      <span class="icon-hover"><IconShareInternal /></span> -->
    </template>
    <template #cover>
      <div
        :style="{
          height: '204px',
          overflow: 'hidden'
        }"
      >
        <img
          :style="{ width: '100%', transform: 'translateY(-20px)' }"
          :alt="app.appName"
          :src="app.appIcon"
        />
      </div>
    </template>
    <a-card-meta :title="app.appName" :description="app.appDesc">
      <template #avatar>
        <div :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
          <a-avatar :size="24" :image-url="app.user?.userAvatar" :style="{ marginRight: '8px' }">
            A
          </a-avatar>
          <a-typography-text>{{ app.user?.userName ?? '无名' }}</a-typography-text>
        </div>
      </template>
    </a-card-meta>
  </a-card>
</template>

<script setup lang="ts">
import { IconThumbUp, IconShareInternal, IconMore } from '@arco-design/web-vue/es/icon'
import API from '@/api'
import { defineProps, withDefaults } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  app: API.AppVO
}

const props = withDefaults(defineProps<Props>(), {
  app: () => {
    return {}
  }
})

const router = useRouter()

const doCardClick = () => {
  router.push(`/app/detail/${props.app.id}`)
}
</script>
<style scoped>
.appCard{
    cursor: pointer;
}

.icon-hover {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: all 0.1s;
}
.icon-hover:hover {
  background-color: rgb(var(--gray-2));
}
</style>
