import { setupLayouts } from 'virtual:meta-layouts'
import generatedRoutes from 'virtual:generated-pages'
import type { RouteRecordRaw } from 'vue-router'
import type { Route } from '#/global'
import useSettingsStore from '@/store/modules/settings'

// 固定路由（默认路由）
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    meta: {
      title: () => useSettingsStore().settings.home.title,
      breadcrumb: false,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/homePage/page.vue'),
        meta: {
          title: () => useSettingsStore().settings.home.title,
        },
      },
      {
        path: 'single-well',
        name: 'singleWell',
        component: () => import('@/views/singleWell/page.vue'),
        meta: {
          title: '单井',
        },
      },
      {
        path: 'well-formation',
        name: 'wellFormation',
        component: () => import('@/views/wellFormation/page.vue'),
        meta: {
          title: '井组',
        },
      },
      {
        path: 'oil-reservoir',
        name: 'oilReservoir',
        component: () => import('@/views/oilReservoir/page.vue'),
        meta: {
          title: '油藏',
        },
      },
      {
        path: 'injection-mining',
        name: 'injectionMining',
        component: () => import('@/views/injectionMining/page.vue'),
        meta: {
          title: '油藏',
        },
      },
    ],
  },
  {
    path: '/:all(.*)*',
    name: 'notFound',
    component: () => import('@/views/[...all].vue'),
    meta: {
      title: '找不到页面',
    },
  },
]

// 系统路由
const systemRoutes: RouteRecordRaw[] = []

// 动态路由（异步路由、导航栏路由）
const asyncRoutes: Route.recordMainRaw[] = []

const constantRoutesByFilesystem = generatedRoutes.filter((item) => {
  return item.meta?.enabled !== false && item.meta?.constant === true
})

const asyncRoutesByFilesystem = setupLayouts(generatedRoutes.filter((item) => {
  return item.meta?.enabled !== false && item.meta?.constant !== true && item.meta?.layout !== false
}))

export {
  constantRoutes,
  systemRoutes,
  asyncRoutes,
  constantRoutesByFilesystem,
  asyncRoutesByFilesystem,
}
