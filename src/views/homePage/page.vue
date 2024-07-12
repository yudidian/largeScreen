<script setup lang="ts">
import useEcharts from './useEcharts.ts'
import tagcloud from '@/utils/Bubble.js'

onMounted(() => {
  const { initBaseEcharts_01, initBaseEcharts_02, initBaseEcharts_03 } = useEcharts()
  nextTick(() => {
    initBaseEcharts_01()
    initBaseEcharts_02()
    initBaseEcharts_03()
    tagcloud()({
      selector: '.tagcloud', // 元素选择器
      fontsize: 6, // 基本字体大小, 单位px
      radius: 40, // 滚动半径, 单位px 页面宽度和高度的五分之一
      mspeed: 'slow', // 滚动最大速度, 取值: slow, normal(默认), fast
      ispeed: 'slow', // 滚动初速度, 取值: slow, normal(默认), fast
      direction: 0, // 初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
      keep: false, // 鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
    })
  })
})
</script>

<template>
  <div class="main-box">
    <ul class="nav1">
      <li style="width: 22%">
        <div class="box top-box">
          <div class="tit">
            区块年产量TOP5
          </div>
          <div class="box-nav">
            <table
              class="table1"
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
            >
              <tbody>
                <tr>
                  <th>井号</th>
                  <th>年产液量</th>
                  <th>年产油量</th>
                  <th>含水率</th>
                </tr>
                <tr>
                  <td>类型1</td>
                  <td><span class="text-w">1000万</span></td>
                  <td><span class="text-b">900万</span></td>
                  <td>
                    <div class="text-d">
                      ↑12%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>类型1</td>
                  <td><span class="text-w">1000万</span></td>
                  <td><span class="text-b">900万</span></td>
                  <td>
                    <div class="text-s">
                      ↓12%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>类型1</td>
                  <td><span class="text-w">1000万</span></td>
                  <td><span class="text-b">900万</span></td>
                  <td>
                    <div class="text-d">
                      ↑12%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>类型1</td>
                  <td><span class="text-w">1000万</span></td>
                  <td><span class="text-b">900万</span></td>
                  <td>
                    <div class="text-s">
                      ↓12%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>类型1</td>
                  <td><span class="text-w">1000万</span></td>
                  <td><span class="text-b">900万</span></td>
                  <td>
                    <div class="text-d">
                      ↑12%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="box radar-box">
          <div class="tit">
            区块合格率
          </div>
          <div class="box-nav">
            <div id="echart1" class="radar" />
          </div>
        </div>
      </li>
      <li style="width: 56%">
        <div class="box">
          <div class="box-nav mapc">
            <div class="map-nav">
              <div class="map-nav-item">
                <span>剩余水分布</span>
              </div>
              <div class="map-nav-item">
                <span>剩余油分布</span>
              </div>
              <div class="map-nav-item">
                <span>连通率</span>
              </div>
              <div class="map-nav-item">
                <span>产油量</span>
              </div>
            </div>
            <div id="map" class="map" />
          </div>
        </div>
      </li>
      <li style="width: 22%">
        <div class="box bar-box">
          <div class="tit">
            油藏合格率
          </div>
          <div id="echart3" class="echart3" />
        </div>
        <div class="box word-box">
          <div class="tit">
            井号
          </div>
          <div class="box-nav word-content">
            <div class="word-wrapper">
              <div class="text-b tit02">
                test
              </div>
              <div class="huati">
                <ul>
                  <li>1.test <span class="text-s"> ↑ 2167</span></li>
                  <li>2.test <span class="text-s"> ↑ 2167</span></li>
                  <li>3.test <span class="text-d"> ↓ 2167</span></li>
                  <li>4.test <span class="text-d"> ↓ 2167</span></li>
                  <li>5.test <span class="text-d"> ↓ 2167</span></li>
                </ul>
              </div>
            </div>

            <div class="word-circle">
              <div class="text-b tit02" style="text-align: center">
                关键词 — 井号
              </div>
              <div class="tagcloud">
                <!-- bo大小 co颜色 -->
                <a
                  class="b01 co01"
                  href="javascript:;"
                >test</a>
                <a
                  class="b02 co02"
                  href="javascript:;"
                >test</a>
                <a
                  class="b03 co05"
                  href="javascript:;"
                >test</a>
                <a
                  class="co02 b04"
                  href="javascript:;"
                >test</a>
                <a
                  class="b03 co05"
                  href="javascript:;"
                >test</a>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <div class="box bottom-box">
      <div class="bottom-box-item">
        <div class="tit">
          饼图left
        </div>
        <div class="echart-wrapper">
          <div id="fb01" class="fb01" />
          <div id="fb02" class="fb02" />
        </div>
        <div class="leidanav">
          <ul class="clearfix">
            <li>
              <span>test</span>
              <p>128</p>
            </li>
            <li>
              <span>test</span>
              <p>100</p>
            </li>
            <li>
              <span>test</span>
              <p>28</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-box-item">
        <div class="tit">
          版块标题66
        </div>
        <div id="echart4" class="ftechart" />
      </div>
      <div class="bottom-box-item">
        <div class="tit">
          开采总览
        </div>
        <div
          class="exploit-wrapper"
        >
          <div class="complete">
            <div class="yuan">
              19%
            </div>
            <div class="message">
              <span>总开采量</span>
              <h3>1835<i>吨</i></h3>
            </div>
          </div>
          <div id="myd1" class="myd1" />
        </div>
      </div>
      <div class="bottom-box-item">
        <div class="tit">
          版块标题
        </div>
        <div class="echart-wrapper">
          <div id="fb03" class="echart-fb03" />
          <div id="fb04" class="echart-fb04" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes diffusion {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.3);
    opacity: 0.2;
  }
}
.main-box {
  padding: 0 vw(10);
  display: flex;
  flex-direction: column;
}
.nav1 {
  margin-left: vw(-6);
  margin-right: vw(-6);
}
.nav1 > li {
  padding: 0 vw(6);
  float: left;
}

.box-nav {
  padding: vh(10);
}
.top-box {
  height: vh(273);
}
.bar-box{
  height: vh(260);
  .echart3 {
    width: 100%;
    padding: 0 vw(10);
    height: vh(204);
  }
}
.radar-box {
  height: vh(332);
  .radar {
    width: 100%;
    height: vh(250);
  }
}
.mapc {
  position: relative;
  height: vh(615);
  .map-nav{
    width: vw(115);
    height: 80%;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .map-nav-item{
      background: url(../../assets/images/bg1.png) no-repeat;
      background-size:100% auto;
      width: vw(95);
      height: vh(80);
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
      span{
        font-size: vh(18);
        padding: 0 vw(4);
        opacity: .6
      }
    }
  }
}
.word-box {
  height: vh(344);
  .word-content {
    height: vh(305);
    display: flex;
    justify-content: space-between;
    .word-wrapper {
      width: 40%;
      margin-left: vw(20);
    }
    .word-circle {
      width: 60%;
      margin-right: vw(10);
    }
  }
}
.bottom-box{
  padding: vw(20);
  height: vh(330);
  display: flex;
  justify-content: space-between;
  .bottom-box-item {
    width: 24%;
    border-left: 1px solid rgba(7, 118, 181, 0.2);
    padding: 0 vw(10);
    .ftechart {
      height: vh(250);
    }
    .echart-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .fb01{
        width: 50%;
        height: vh(190);
      }
      .fb02{
        width: 50%;
        height: vh(190);
      }
      .echart-fb03{
        width: 48%;
        height: vh(290);
      }
      .echart-fb04{
        width: 48%;
        height: vh(290);
      }
    }
    .exploit-wrapper {
      width: 100%;
      height: vh(260);
      display: flex;
      align-items: center;
      justify-content: space-around;
      .complete {
        position: relative;
        width: 20%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        .yuan {
          position: absolute;
          top: vh(70);
          width: vw(60);
          height: vw(60);
          border-radius: 100%;
          background: radial-gradient(#085792, #046d98);
          font-size: vh(24);
          text-align: center;
          line-height: vw(60);
          &:after {
            content: "";
            position: absolute;
            width: vw(80);
            height: vw(80);
            @include position-center();
            border-radius: 100%;
            border: vh(4) solid rgba(0, 99, 169, 0.8);
            animation: diffusion 2s linear infinite;
          }
          //animation: diffusion 2s linear infinite;
        }
        .message {
          position: absolute;
          bottom: vh(30);
          margin-top: vh(15);
          span {
            display: inline-block;
            font-size: vh(18);
            color: #fff;
          }
          h3 {
            font-size: vh(20);
            color: #00b4ff;
            i {
              font-size: vh(14);
              color: #fff;
            }
          }
        }
      }
      .myd1 {
        width: 70%;
        height: vh(230);
      }
    }
  }
}

.mapc {
  background: url(../../assets/images/bg3.png) no-repeat center center;
  background-size: 100% 100%;
}
.map {
  position: relative;
  height: 100%;
  padding-left: 10%;
}
.leidanav {
  margin-top: vh(-5);
  ul {
    display: flex;
    justify-content: space-between;
    li {
      flex: 1;
      text-align: center;
      border-left: vh(1) solid rgba(255, 255, 255, 0.1);
      &:first-child {
        border-left: none;
      }
      span {
        font-size: vh(16);
        opacity: 0.6;
      }
      p {
        font-size: vh(18);
        color: #26a6ff;
      }
    }
  }
}

.tit02 {
  font-size: vh(16);
  padding: vh(10) 0;
}

.tagcloud {
  width: 100%;
  height: 90% !important;
  overflow: hidden;
  position: relative;
}
.tagcloud a {
  display: flex;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  font-size: vh(14);
  text-decoration: none;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.b01 {
  width: vw(50);
  height: vw(50);
}
.b02 {
  width: vw(80);
  height: vw(80);
}
.b03 {
  width: vw(60);
  height: vw(60);
}
.b04 {
  width: vw(70);
  height: vw(70);
}
.co01 {
  border: vh(2) solid rgba(5, 118, 254, 1);
  box-shadow: inset 0 0 vw(20) rgba(5, 118, 254, 1);
}
.co02 {
  border: vh(2) solid rgba(238, 255, 65, 1);
  box-shadow: inset 0 0 vw(20) rgba(238, 255, 65, 1);
}
.co03 {
  border: vh(2) solid rgba(26, 121, 181, 1);
  box-shadow: inset 0 0 vw(20) rgba(26, 121, 181, 1);
}
.co04 {
  border: vh(2) solid rgba(1, 187, 181, 1);
  box-shadow: inset 0 0 vw(20) rgba(1, 187, 181, 1);
}
.co05 {
  border: vh(2) solid rgba(255, 138, 0, 1);
  box-shadow: inset 0 0 vw(20) rgba(255, 138, 0, 1);
}

.huati {
  padding-top: vh(20);
  li{
    font-size: vh(16);
    line-height: 230%;
  }
}
</style>
