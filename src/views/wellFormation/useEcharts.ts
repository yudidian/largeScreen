import * as echarts from 'echarts'
import _ from 'lodash'
import { baseOptions, baseXAxis, baseYAxis } from '@/utils/echarts/base.ts'

type EChartsOption = echarts.EChartsOption

export default function useEcharts() {
  function initBaseEcharts_01() {
    const echart_01 = document.getElementById('echart-01')
    if (echart_01) {
      echart_01.setAttribute('_echarts_instance_', '')
      const myChart = echarts.init(echart_01)
      const option: EChartsOption = {
        title: {
          text: '递减率',
        },
        xAxis: {
          ...baseXAxis,
          type: 'category',
          // prettier-ignore
          data: ['一月', '三月', '五月', '七月', '九月', '十一月'],
        },
        yAxis: {
          ...baseYAxis,
          type: 'value',
          name: '%',
          position: 'left',
        },
        series: [
          {
            name: '递减率',
            type: 'line',
            yAxisIndex: 0,
            data: [20, 22, 33, 45, 63, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          },
        ],
      }
      myChart.setOption(_.merge(_.cloneDeep(baseOptions), option))
      addChartResize(myChart)
    }
  }
  function initBaseEcharts_02() {
    const echart = document.getElementById('echart-02')
    if (echart) {
      echart.setAttribute('_echarts_instance_', '')
      const myChart = echarts.init(echart)
      const option: EChartsOption = {
        title: {
          text: '产油量和产液量',
        },
        xAxis: {
          ...baseXAxis,
          type: 'category',
          // prettier-ignore
          data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        },
        yAxis: {
          ...baseYAxis,
          type: 'value',
          name: '吨',
          position: 'left',
        },
        series: [
          {
            name: '产油量',
            type: 'bar',
            yAxisIndex: 0,
            data: [20, 22, 33, 45, 33, 50.2, 20.3, 23.4, 23.0, 26.5, 22.0, 16.2],
          },
          {
            name: '产液量',
            type: 'line',
            yAxisIndex: 0,
            data: [201, 222, 333, 145, 163, 210.2, 220.3, 323.4, 223.0, 136.5, 212.0, 126.2],
          },
        ],
      }
      myChart.setOption(_.merge(_.cloneDeep(baseOptions), option))
      addChartResize(myChart)
    }
  }
  function addChartResize(myChart: echarts.ECharts) {
    window.addEventListener('resize', () => {
      myChart.resize()
    })
  }
  return {
    initBaseEcharts_01,
    initBaseEcharts_02,
  }
}
