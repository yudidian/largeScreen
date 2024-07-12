<route lang="yaml">
name: home
meta:
  title: 主页
  icon: ant-design:home-twotone
</route>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { EchartsOptions } from '#/echarts.ts'

// import type { ECBasicOption } from 'echarts/types/dist/shared'

const fantasticStartkitInfo = ref({
  feature: [
    '支持 TypeScript',
    '默认集成 vue-router 和 pinia',
    '支持基于文件系统的路由',
    '全局组件自动引入',
    '全局 SCSS 资源引入',
    '支持 Unocss',
    '支持 SVG 文件图标、Iconify 图标、UnoCSS 图标',
    '支持 mock 数据，可脱离后端束缚独立开发',
    '支持 gzip / brotli 优化项目体积，提高加载速度',
    '结合 IDE 插件、ESlint 、stylelint 、Git 钩子，轻松实现团队代码规范',
  ],
})

function open(url: string) {
  window.open(url, '_blank')
}
const option_01: EchartsOptions = {
  title: {
    text: '训练进度',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
    },
  ],
}
const option_02: EchartsOptions = {
  title: [
    {
      text: 'test2',
    },
  ],
  polar: {
    radius: [30, '80%'],
  },
  angleAxis: {
    max: 4,
    startAngle: 75,
  },
  radiusAxis: {
    type: 'category',
    data: ['a', 'b', 'c', 'd'],
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [2, 1.2, 2.4, 3.6],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
      formatter: '{b}: {c}',
    },
  },
}

function createEcharts(name: string, options: EchartsOptions) {
  const dom = document.querySelector(`#${name}`)
  const chart = echarts.init(dom as HTMLElement)
  chart.setOption(options)
}
onMounted(() => {
  createEcharts('echarts_01', option_01)
  createEcharts('echarts_02', option_02)
})
</script>

<template>
  <div>
    <PageHeader>
      <template #title>
        <div class="flex items-center gap-4">
          欢迎使用 生成对抗密码学管理系统
        </div>
      </template>
      <template #content>
        <div class="text-sm/6">
          <div>
            这是一款<b class="text-emphasis">简易操作</b>的中后台框架，同时它也经历过数十个真实项目的技术沉淀，确保框架在开发中可落地、可使用、可维护
          </div>
          <div>
            注：休息休息嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻
          </div>
        </div>
      </template>
      <HButton outline @click="open('https://fantastic-admin.gitee.io')">
        <SvgIcon name="i-ri:file-text-line" />
        使用手册
      </HButton>
    </PageHeader>
    <div class="w-full flex flex-col gap-4 px-4 xl:flex-row">
      <PageMain class="ecology">
        <template #title>
          <div class="title-info">
            <img src="https://cn.vuejs.org/logo.svg">
            <div>
              <h1 class="c-[#41b883]">
                test
              </h1>
              <h2>test</h2>
            </div>
          </div>
          <div class="ml-auto">
            <HButton @click="open('https://hooray.gitee.io/fantastic-startkit')">
              全平台
            </HButton>
          </div>
        </template>
        <ul class="m-0 pr-8 text-size-sm leading-6">
          <li v-for="item in fantasticStartkitInfo.feature" :key="item">
            {{ item }}
          </li>
        </ul>
      </PageMain>
      <PageMain class="ecology">
        <template #title>
          <div class="title-info">
            <img src="https://cn.vuejs.org/logo.svg">
            <div>
              <h1 class="c-[#41b883]">
                test
              </h1>
              <h2>test</h2>
            </div>
          </div>
          <div class="ml-auto">
            <HButton @click="open('https://hooray.gitee.io/fantastic-startkit')">
              全平台
            </HButton>
          </div>
        </template>
        <ul class="m-0 pr-8 text-size-sm leading-6">
          <li v-for="item in fantasticStartkitInfo.feature" :key="item">
            {{ item }}
          </li>
        </ul>
      </PageMain>
    </div>
    <div class="w-full flex flex-col gap-4 px-4 xl:flex-row">
      <PageMain class="ecology">
        <div id="echarts_01" class="echarts-wrapper" />
      </PageMain>
      <PageMain class="ecology">
        <div id="echarts_02" class="echarts-wrapper" />
      </PageMain>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-emphasis {
  text-emphasis-style: "❤";
}
.w-full{
  margin-bottom: 1rem;
}
.echarts-wrapper{
  width: 48rem;
  height: 20rem;
  background: var(--g-container-bg);
}
.ecology {
  --at-apply: flex-1 m-0;

  :deep(.title-container) {
    --at-apply: flex items-center justify-between flex-wrap gap-4;

    .title-info {
      --at-apply: flex items-center gap-4;

      img {
        --at-apply: block w-12 h-12;
      }

      h1 {
        --at-apply: m-0 text-2xl;
      }

      h2 {
        --at-apply: m-0 text-base text-stone-5 font-normal;
      }
    }
  }
}
</style>
