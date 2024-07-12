<script
  setup
  lang="ts"
>
import useEcharts from '@/views/wellFormation/useEcharts.ts'

onMounted(() => {
  const { initBaseEcharts_01, initBaseEcharts_02 } = useEcharts()
  nextTick(() => {
    initBaseEcharts_01()
    initBaseEcharts_02()
  })
})
</script>

<template>
  <div class="wrapper">
    <div class="top">
      <div class="box top-item">
        <div class="tit">
          连通分布图
        </div>
      </div>
      <div class="box top-item">
        <div class="tit">
          注采联动图
        </div>
      </div>
      <div class="box top-item">
        <div class="tit">
          注水井3D示意图
        </div>
      </div>
      <div class="box top-item">
        <div class="tit">
          采油井示意图
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="box bottom-box">
        <div class="tit">
          数据展示
        </div>
        <div class="data-list">
          <div class="data-item">
            <table
              class="table1"
              width="100%"
              border="0"
              cellspacing="0"
              cellpadding="0"
            >
              <tbody>
                <tr>
                  <th>水嘴开度</th>
                  <th>嘴前压力</th>
                  <th>嘴后压力</th>
                  <th>电流</th>
                  <th>电压</th>
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
                  <td>
                    <div class="text-d">
                      ↑12%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="data-item">
            <div id="echart-01" class="echart-01" />
          </div>
          <div class="data-item">
            <div id="echart-02" class="echart-02" />
          </div>
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
  padding: 0 vw(20);
  flex-direction: column;
  overflow: hidden;

  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: vh(600);
    .top-item {
      height: vh(600);
      &:nth-child(1) {
        width: 39%;
      }
      &:nth-child(2) {
        width: 29%;
      }
      &:nth-child(3) {
        width: 15%;
      }
      &:nth-child(4) {
        width: 15%;
      }
    }
  }
  .bottom {
    width: 100%;
    height: vh(340);
    margin-top: vh(20);
    .bottom-box {
      height: vh(320);
      width: 100%;
      .data-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: vh(10) vw(20);
        .data-item {
          width: 32%;
          height: vh(250);
          @include center();
          padding: vh(10) vw(20);
          border-left: 1px solid rgba(7, 118, 181, 0.2);
          &:first-child {
            border-left: none;
          }
          .echart-01 {
            width: 99%;
            height: 100%;
          }
          .echart-02 {
            width: 99%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
