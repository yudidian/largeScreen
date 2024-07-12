import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'

import dayjs from 'dayjs'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import pkg from './package.json'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default async ({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  // 全局 scss 资源
  const scssResources = []
  fs.readdirSync('src/assets/styles/resources').forEach((dirname) => {
    if (fs.statSync(`src/assets/styles/resources/${dirname}`).isFile()) {
      scssResources.push(`@use "src/assets/styles/resources/${dirname}" as *;`)
    }
  })
  scssResources.push('@use "@/assets/styles/element-plus/index.scss" as *;')
  return defineConfig({
    base: './',
    server: {
      open: true,
      port: 9000,
      proxy: {
        '/api/uaa': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: command === 'serve' && env.VITE_OPEN_PROXY === 'true',
          // rewrite: path => path.replace(/\/api/, ''),
        },
      },
    },
    // 构建选项 https://cn.vitejs.dev/config/#server-fsserve-root
    build: {
      outDir: mode === 'production' ? 'dist' : `dist-${mode}`,
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
    },
    define: {
      __SYSTEM_INFO__: JSON.stringify({
        pkg: {
          version: pkg.version,
          dependencies: pkg.dependencies,
          devDependencies: pkg.devDependencies,
        },
        lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      }),
    },
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '#': path.resolve(__dirname, 'src/types'),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            // 要转化的单位
            unitToConvert: 'px',
            // UI设计稿的大小
            viewportWidth: 1920,
            // 转换后的精度
            unitPrecision: 6,
            // 转换后的单位
            viewportUnit: 'vw',
            // 字体转换后的单位
            fontViewportUnit: 'vw',
            // 能转换的属性，*表示所有属性，!border表示border不转
            propList: ['*'],
            // 指定不转换为视窗单位的类名，
            selectorBlackList: ['ignore-'],
            // 最小转换的值，小于等于1不转
            minPixelValue: 1,
            // 是否在媒体查询的css代码中也进行转换，默认false
            mediaQuery: false,
            // 是否转换后直接更换属性值
            replace: true,
            // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
            exclude: [],
            // 包含那些文件或者特定文件
            include: [],
            // 是否处理横屏情况
            landscape: false,
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: scssResources.join(''),
        },
      },
    },
  })
}
