<script
  setup
  lang="ts"
>
import useEcharts from '@/views/singleWell/useEcharts.ts'

const modelType = ref('1')
const wellType = ref('1')
const wellName = ref('')
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]
onMounted(() => {
  const { initBaseEcharts_01 } = useEcharts()
  nextTick(() => {
    initBaseEcharts_01()
  })
})
</script>

<template>
  <div class="wrapper">
    <div class="right">
      <div class="box box-model">
        <div class="tit">
          模式、井类型选择
        </div>
        <div class="box-nav">
          <el-radio-group v-model="modelType" class="ml-4">
            <el-radio value="1" size="large">
              演练模式
            </el-radio>
            <el-radio value="2" size="large">
              生产模式
            </el-radio>
          </el-radio-group>
          <el-radio-group v-model="wellType" class="ml-4">
            <el-radio value="1" size="large">
              注水井
            </el-radio>
            <el-radio value="2" size="large">
              采油井
            </el-radio>
          </el-radio-group>
        </div>
      </div>
      <div class="box box-check">
        <div class="tit">
          井号选择
        </div>
        <div class="box-nav select-wrapper">
          <el-select v-model="wellName" placeholder="请选择井块">
            <el-option
              v-for="item in cities"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
              <span style="float: left">{{ item.label }}</span>
              <span
                style="
                  float: right;
                  font-size: 13px;
                "
              >
                {{ item.value }}
              </span>
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="box box-indicator">
        <div class="tit">
          注水井主要指标
        </div>
        <div id="echarts-01" class="indicator-echart" />
      </div>
      <div class="box box-indicator-other">
        <div class="tit">
          注水井次要指标
        </div>
        <div class="detail-item">
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
      </div>
    </div>
    <div class="box left">
      3D组件
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
}
.left {
  width: 80%;
  height: vh(940);
  text-align: center;
  line-height: vh(940);
  font-size: vh(60);
}
.right {
  width: 19%;
  display: flex;
  flex-direction: column;
  .box-model {
    height: vh(140);
  }
  .box-check {
    height: vh(110);
  }
  .box-indicator {
    height: vh(340);
    .indicator-echart {
      height: vh(280);
    }
  }
  .box-indicator-other {
    height: vh(309);
    overflow: hidden;
    .detail-item {
      display: flex;
      align-items: center;
      height: vh(264);
      padding: vh(10);
    }
  }
}
.select-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: vh(10) vw(20);
  height: vh(59);
}
:deep(.el-select__wrapper) {
  background-color: #033C76;
}
</style>
