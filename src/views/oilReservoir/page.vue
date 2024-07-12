<script
  setup
  lang="ts"
>

</script>

<template>
  <div class="wrapper">
    <div class="top">
      <div class="box top-left">
        3D组件
      </div>
      <div class="message-wrapper">
        <div class="box">
          <div class="tit">
            年注水量
          </div>
          <div class="box-nav num-show">
            <img src="./image/water.png">
            <span>1232（吨）</span>
          </div>
        </div>
        <div class="box">
          <div class="tit">
            注水达标率
          </div>
          <div class="box-nav num-show">
            <img src="./image/standard.png">
            <span>95.65%</span>
          </div>
        </div>
        <div class="box">
          <div class="tit">
            分层注水合格率
          </div>
          <div class="box-nav num-show">
            <img src="./image/qualified.png">
            <span>96.54%</span>
          </div>
        </div>
        <div class="box">
          <div class="tit">
            注水井分注率
          </div>
          <div class="box-nav num-show">
            <img src="./image/exchangeRate.png">
            <span>85.63%</span>
          </div>
        </div>
        <div class="box">
          <div class="tit">
            年递减率
          </div>
          <div class="box-nav num-show">
            <img src="./image/diminishing.png">
            <span>25.64%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="box bottom-box">
        <div class="tit">
          数据展示
        </div>
        <div class="box-nav box-detail">
          <table
            class="table1"
            width="100%"
            border="0"
            cellspacing="0"
            cellpadding="0"
          >
            <tbody>
              <tr>
                <th>类型</th>
                <th>嘴前压力</th>
                <th>嘴后压力</th>
                <th>电流</th>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
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
      <div class="box bottom-box">
        <div class="tit">
          油水统计
        </div>
        <div class="box-nav box-detail">
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
                <th>日产油量</th>
                <th>日产水量</th>
                <th>日产气量</th>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
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
      <div class="box bottom-box">
        <div class="tit">
          油藏分析
        </div>
        <div class="box-nav box-detail">
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
                <th>累积产油量</th>
                <th>累积产水量</th>
                <th>累积产气量</th>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
                <td>
                  <div class="text-s">
                    ↓12%
                  </div>
                </td>
              </tr>
              <tr>
                <td>类型1</td>
                <td><span class="text-b">900万</span></td>
                <td>
                  <div class="text-d">
                    ↑12%
                  </div>
                </td>
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
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
>
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 0 vw(20);
}
.top {
  width: 99.5%;
  height: vh(640);
  display: flex;
  justify-content: space-between;
  .top-left {
    width: 66.2%;
    height: vh(614);
  }
  .message-wrapper {
    width: 32.35%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: vh(40);
    .box {
      width: 100%;
      height: vh(160);
    }
  }
}
.bottom {
  width: 99.5%;
  display: flex;
  justify-content: space-between;
}
.bottom-box {
  width: 32.5%;
  height: vh(300);
}
.num-show {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    margin-top: vh(10);
    width: vw(40);
  }
  span{
    font-size: vw(24);
    margin-top: vh(10);
    font-weight: 900;
  }

  animation: breath_light 3s ease infinite;
}
@keyframes breath_light {
  0% {
    filter: brightness(50%);
  }
  30% {
    filter: brightness(100%);
  }
  60% {
    filter: brightness(150%);
  }
  100% {
    filter: brightness(50%);
  }
}
.box-detail {
  width: 100%;
  height: vh(300);
  overflow: auto;
  padding: vw(20);
}
</style>
