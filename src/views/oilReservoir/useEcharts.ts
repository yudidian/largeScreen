import * as echarts from 'echarts'

type EChartsOption = echarts.EChartsOption

export default function useEcharts() {
  function initBaseEcharts_01() {
    const echart_01 = document.getElementById('echarts-01')
    if (echart_01) {
      echart_01.setAttribute('_echarts_instance_', '')
      const myChart = echarts.init(echart_01)
      const option: EChartsOption = {
        color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00', '#eb295b'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
          },
        },
        grid: {
          bottom: '10%',
        },
        legend: {
          data: ['Evaporation', 'Precipitation', 'Temperature'],
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            // prettier-ignore
            data: ['一月', '三月', '五月', '七月', '九月', '十一月'],
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: '压力（pa）',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
              },
            },
            axisLabel: {
              formatter: '{value}',
            },
          },
          {
            type: 'value',
            name: '注水量',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {},
            },
            axisLabel: {
              formatter: '{value} L',
            },
          },
        ],
        series: [
          {
            name: '注水压力',
            type: 'bar',
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
            ],
          },
          {
            name: '套压',
            type: 'bar',
            yAxisIndex: 0,
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
            ],
          },
          {
            name: '注水量',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
          },
        ],
      }
      myChart.setOption(option)
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
  }
}
