<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-03-05 19:58:05
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-03-07 11:01:34
 * @FilePath: \ravenclaw-frontend\src\views\app\AppDetailPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div id="answerResultPage">
    <a-card>
      <a-row class="grid-demo" style="margin-bottom: 16px">
        <a-col flex="auto" class="content-wrapper">
          <h2>{{ data.resultName }}</h2>
          <p>结果描述：{{ data.resultDesc }}</p>
          <p>结果id：{{ data.resultId }}</p>
          <p>结果得分：{{ data.resultScore }}</p>
          <p>我的答案：{{ data.choices }}</p>
          <p>应用id：{{ data.appId }}</p>
          <p>应用类型：{{ APP_TYPE_MAP[data.appType] }}</p>
          <p>评分策略：{{ APP_SCORING_STRATEGY_MAP[data.scoringStrategy] }}</p>
          <p>
            <a-space>
              答题人：
              <div :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }">
                <a-avatar
                  :size="24"
                  :image-url="data.user?.userAvatar"
                  :style="{ marginRight: '8px' }"
                ></a-avatar>
                <a-typography-text>{{ data.user?.userName ?? '无名' }}</a-typography-text>
              </div>
            </a-space>
          </p>
          <p>答题时间：{{ dayjs(data.createTime).format('YYYY-MM-DD HH:mm:ss') }}</p>
          <a-space>
            <a-button type="primary" :href="`/answer/do/${data.appId}`">去答题</a-button>
          </a-space>
        </a-col>
        <a-col flex="320px">
          <a-image width="100%" :src="data.userAnswerIcon" />
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from 'vue'
import { defineProps, withDefaults } from 'vue'
import API from '@/api'
import { useRouter } from 'vue-router'
import { getUserAnswerVoByIdUsingGet } from '@/api/userAnswerController'
import message from '@arco-design/web-vue/es/message'
import { REVIEW_STATUS_ENUM } from '@/constant/app'
import { dayjs } from '@arco-design/web-vue/es/_utils/date'
import { useLoginUserStore } from '@/store/userStore'
import {APP_TYPE_MAP, APP_SCORING_STRATEGY_MAP } from '@/constant/app'

interface Props {
  id: string
}

const props = withDefaults(defineProps<Props>(), {
  id: () => {
    return 0
  }
})

const router = useRouter()

const data = ref<API.userAnswerVO>({})

/**
 * 加载数据
 */
const loadData = async () => {
  if (!props.id) {
    return "";
  }
  const res = await getUserAnswerVoByIdUsingGet({
    id: props.id
  })
  if (res.data.code === 0) {
    data.value = res.data.data
  } else {
    message.error('获取数据失败，' + res.data.message)
  }
}

/**
 * 监听 searchParams 变量，改变时触发数据的重新加载
 */
watchEffect(() => {
  loadData()
})
</script>

<style scoped>
#appDetailPage {
  margin-left: 20px;
  margin-right: 20px;
}

#appDetailPage .content-wrapper > * {
  margin-bottom: 24px;
}
</style>