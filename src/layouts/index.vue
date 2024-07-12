<script setup lang="ts">
import dayjs from 'dayjs'

defineOptions({
  name: 'Layout',
})

let timer: undefined | number
const date = dayjs().format('YYYY/MM/DD HH:mm:ss')
const timeStr = ref(date)
const route = useRoute()

function getNowTime() {
  timer = setInterval(() => {
    timeStr.value = dayjs().format('YYYY/MM/DD HH:mm:ss')
  }, 1000)
}
getNowTime()

function isActive(curRoute: string) {
  return curRoute === route.name ? 'active' : ''
}
onUnmounted(() => {
  timer && clearInterval(timer)
})
</script>

<template>
  <div class="layout">
    <header class="head">
      <h1 class="title-left" @click="$router.push('/')">
        数智油田可视化平台
      </h1>
      <div class="menu">
        <ul>
          <li>
            <router-link to="/" :class="isActive('home')">
              油藏分析
            </router-link>
          </li>
          <li>
            <router-link to="/well-formation" :class="isActive('wellFormation')">
              井组模块
            </router-link>
          </li>
          <li>
            <router-link to="/single-well" :class="isActive('singleWell')">
              单井演示
            </router-link>
          </li>
          <li>
            <router-link to="/injection-mining" :class="isActive('injectionMining')">
              注采联动
            </router-link>
          </li>
        </ul>
      </div>
      <div id="showTime" class="time">
        {{ timeStr }}
      </div>
    </header>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.head {
  position: relative;
  overflow: hidden;
  height: vh(100);
  margin: 0 vw(20);
  padding-right: vw(60);
  display: flex;
  align-items: center;
  .title-left {
    font-size: vh(34);
    letter-spacing: vw(-2);
    text-align: center;
    padding-right: vw(55);
    color: #daf9ff;
  }
  .time {
    position: absolute;
    right: 0;
    font-size: vh(20);
  }
  .menu {
    ul {
      display: flex;
      li {
        position: relative;
        margin: vh(25) vw(15);
        &:before,
        &:after {
          position: absolute;
          width: vw(10);
          height: vh(5);
          opacity: 0.4;
          content: "";
          border-top: vh(2) solid #02a6b5;
          top: vh(-1);
          border-radius: vh(2);
        }
        a {
          position: relative;
          display: block;
          font-size: 18px;
          color: #fff;
          line-height: 40px;
          padding: 0 15px;
          &:hover {
            color: #f4e925;
          }
          &:after,
          &:before {
            position: absolute;
            width: 10px;
            height: 5px;
            opacity: 0.4;
            content: "";
            border-bottom: 2px solid #02a6b5;
            bottom: -1px;
            border-radius: 2px;
          }
        }
      }
    }
  }
}
.active {
  color: #f4e925!important;
}
.menu li:before,
.menu li a:before {
  border-left: 2px solid #02a6b5;
  left: -1px;
}
.menu li:after,
.menu li a:after {
  border-right: 2px solid #02a6b5;
  right: -1px;
}

.menu li a:hover:before,
.menu li a:hover:after,
.menu li:hover:before,
.menu li:hover:after {
  border-color: #f4e925;
  opacity: 1;
}
</style>
