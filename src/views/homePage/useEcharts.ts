import * as echarts from 'echarts'
import _ from 'lodash'
import type { RadarSeriesOption } from 'echarts/charts'
import { baseOptions, baseXAxis, baseYAxis, fitChartSize, radarOptions } from '@/utils/echarts/base.ts'

const data_01 = [
  {
    title: '**省',
  },
  ['本周'],
  [
    {
      name: '注水水质达标率',
      max: 100,
    },
    {
      name: '分层注水合格率',
      max: 100,
    },
    {
      name: '注水并分注率',
      max: 100,
    },
    {
      name: '动态监测资料完成率',
      max: 100,
    },
    {
      name: '分注井层段合格率',
      max: 100,
    },
  ],
  [43, 96, 68, 56, 85],
]
function useEcharts() {
  function initBaseEcharts_01() {
    const echart_01 = document.getElementById('echart1')
    if (echart_01) {
      echart_01.setAttribute('_echarts_instance_', '')
      const myChart = echarts.init(echart_01)
      const option = {
        legend: {
          show: false,
        },
        radar: {
          center: ['50%', '50%'],
          radius: ['25%', '70%'],
          indicator: data_01[2],
        },
        series: [
          {
            name: '合格率',
            type: 'radar',
            data: [
              {
                areaStyle: {
                  normal: {
                    opacity: 0.3,
                  },
                },
                value: data_01[3],
                name: '注水水质达标率',
              },
              {
                areaStyle: {
                  normal: {
                    opacity: 0.3,
                  },
                },
                value: data_01[3],
                name: '分层注水合格率',
              },
              {
                areaStyle: {
                  normal: {
                    opacity: 0.3,
                  },
                },
                value: data_01[3],
                name: '动态监测资料完成率',
              },
              {
                areaStyle: {
                  normal: {
                    opacity: 0.3,
                  },
                },
                value: data_01[3],
                name: '分注井层段合格率',
              },
            ],
          },
        ],
      } as RadarSeriesOption
      myChart.setOption(_.merge(_.cloneDeep(radarOptions), option))
      addChartResize(myChart)
    }
  }
  function initBaseEcharts_02() {
    const myChart = echarts.init(document.getElementById('echart4'))
    const myChart2 = echarts.init(document.getElementById('echart3'))
    document.getElementById('echart4')?.setAttribute('_echarts_instance_', '')
    document.getElementById('echart3')?.setAttribute('_echarts_instance_', '')

    const option = {
      grid: {
        bottom: '15%',
      },
      xAxis: {
        ...baseXAxis,
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      },
      yAxis: {
        ...baseYAxis,
        type: 'value',
      },
      series: [
        {
          name: '文本1',
          type: 'bar',
          data: [2, 3, 3, 9, 15, 12, 6, 4, 6],
          barWidth: '20%', // 柱子宽度
          // barGap: 1, //柱子之间间距
          itemStyle: {
            normal: {
              color: '#2f89cf',
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
        {
          name: '文本2',
          type: 'bar',
          data: [1, 4, 5, 11, 12, 9, 5, 6, 5],
          barWidth: '20%',
          // barGap: 1,
          itemStyle: {
            normal: {
              color: '#62c98d',
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    }
    const option2 = {
      xAxis: {
        ...baseXAxis,
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月'],
      },
      yAxis: {
        ...baseYAxis,
        type: 'value',
      },
      series: [
        {
          name: '2017年',
          type: 'line',
          smooth: true,
          data: [2, 6, 3, 8, 5, 8],

          itemStyle: {
            normal: {
              color: '#2f89cf',
              opacity: 1,

              barBorderRadius: 5,
            },
          },
        },
        {
          name: '2018年',
          type: 'line',
          smooth: true,
          data: [5, 2, 6, 4, 5, 12],
          barWidth: fitChartSize(15),
          // barGap: 1,
          itemStyle: {
            normal: {
              color: '#62c98d',
              opacity: 1,
              barBorderRadius: 5,
            },
          },
        },
      ],
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(_.merge(_.cloneDeep(baseOptions), option2))
    myChart2.setOption(_.merge(_.cloneDeep(baseOptions), option))
    addChartResize(myChart)
    addChartResize(myChart2)
  }

  function initBaseEcharts_03() {
    // 基于准备好的dom，初始化echarts实例
    const myChart = echarts.init(document.getElementById('fb01'))
    const myChart2 = echarts.init(document.getElementById('fb02'))
    const myChart3 = echarts.init(document.getElementById('fb03'))
    const myChart4 = echarts.init(document.getElementById('fb04'))
    const myChart5 = echarts.init(document.getElementById('myd1'))

    document.getElementById('fb01')?.setAttribute('_echarts_instance_', '')
    document.getElementById('fb02')?.setAttribute('_echarts_instance_', '')
    document.getElementById('fb03')?.setAttribute('_echarts_instance_', '')
    document.getElementById('fb04')?.setAttribute('_echarts_instance_', '')
    document.getElementById('myd1')?.setAttribute('_echarts_instance_', '')
    const option = {
      tooltip: {
        ...baseOptions.tooltip,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position(p: Array<number>) {
          // 其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10]
        },
      },
      legend: {
        orient: 'vertical',
        top: '25%',
        right: 0,
        itemWidth: fitChartSize(10),
        itemHeight: fitChartSize(10),
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: fitChartSize(12),
        },
        data: ['test1', 'test2', 'test3', 'test4'],
      },
      series: [
        {
          name: 'test',
          type: 'pie',
          center: ['35%', '50%'],
          radius: ['40%', '50%'],
          color: [
            '#62c98d',
            '#2f89cf',
            '#4cb9cf',
            '#e0c828',
            '#e58c00',
            '#eb295b',
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 4, name: 'test1' },
            { value: 2, name: 'test2' },
            { value: 2, name: 'test3' },
            { value: 1, name: 'test4' },
          ],
        },
      ],
    }
    const option2 = {
      tooltip: {
        ...baseOptions.tooltip,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position(p: Array<number>) {
          // 其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10]
        },
      },
      legend: {
        orient: 'vertical',
        top: '25%',
        right: '8%',
        itemWidth: fitChartSize(10),
        itemHeight: fitChartSize(10),
        data: ['test1', 'test2', 'test3', 'test4'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: fitChartSize(12),
        },
      },
      series: [
        {
          name: 'test',
          type: 'pie',
          center: ['40%', '50%'],
          radius: ['40%', '50%'],
          color: [
            '#62c98d',
            '#2f89cf',
            '#4cb9cf',
            '#e0c828',
            '#e58c00',
            '#eb295b',
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 10, name: 'test1' },
            { value: 20, name: 'test2' },
            { value: 30, name: 'test3' },
            { value: 40, name: 'test4' },
          ],
        },
      ],
    }
    const option3 = {
      tooltip: {
        ...baseOptions.tooltip,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position(p: Array<number>) {
          // 其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10]
        },
      },
      legend: {
        top: '10%',
        itemWidth: fitChartSize(10),
        itemHeight: fitChartSize(10),
        data: ['数据分门别类', '数据关系部门', '今日数据交易'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: fitChartSize(12),
        },
      },
      series: [
        {
          name: '数据',
          type: 'pie',
          center: ['35%', '50%'],
          radius: ['40%', '50%'],
          color: [
            '#62c98d',
            '#2f89cf',
            '#4cb9cf',
            '#e0c828',
            '#e58c00',
            '#eb295b',
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 4, name: '数据分门别类' },
            { value: 2, name: '数据关系部门' },
            { value: 2, name: '今日数据交易' },
          ],
        },
      ],
    }
    const option4 = {
      tooltip: {
        ...baseOptions.tooltip,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
        position(p: Array<number>) {
          // 其中p为当前鼠标的位置
          return [p[0] + 10, p[1] - 10]
        },
      },
      legend: {
        top: '10%',
        itemWidth: fitChartSize(10),
        itemHeight: fitChartSize(10),
        data: ['零销类', '服务类', '销售类', '软件类', '硬件类', '其它类'],
        textStyle: {
          color: 'rgba(255,255,255,.5)',
          fontSize: fitChartSize(12),
        },
      },
      series: [
        {
          name: '业务分类',
          type: 'pie',
          center: ['40%', '50%'],
          radius: ['40%', '50%'],
          color: [
            '#62c98d',
            '#2f89cf',
            '#4cb9cf',
            '#e0c828',
            '#e58c00',
            '#eb295b',
          ],
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 10, name: '零销类' },
            { value: 20, name: '服务类' },
            { value: 30, name: '销售类' },
            { value: 40, name: '软件类' },
            { value: 50, name: '硬件类' },
            { value: 60, name: '其它类' },
          ],
        },
      ],
    }
    const option5 = {
      grid: {
        bottom: '10%',
      },
      legend: {
        data: ['带开采', '开采中', '已开采'],
        top: '10%',
      },
      yAxis: {
        ...baseYAxis,
        type: 'value',
        show: false,
      },
      xAxis: [
        {
          ...baseXAxis,
          type: 'category',
          data: ['业务办量统计'],
        },
      ],
      series: [
        {
          name: '带开采',
          type: 'bar',
          barWidth: fitChartSize(20),

          itemStyle: {
            normal: {
              show: true,
              color: '#20aa92',
              barBorderRadius: fitChartSize(50),
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barGap: '100%',
          data: [20],
          label: {
            formatter: '{c}吨',
            show: true,
            position: 'top',
            textStyle: {
              fontSize: fitChartSize(12),
              color: 'rgba(255,255,255,.6)',
            },
          },
        },
        {
          name: '开采中',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: '#f4664e',
              barBorderRadius: fitChartSize(50),
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: fitChartSize(20),
          data: [40],
          label: {
            formatter: '{c}吨',
            show: true,
            position: 'top',
            textStyle: {
              fontSize: fitChartSize(10),
              color: 'rgba(255,255,255,.6)',
            },
          },
        },
        {
          name: '已开采',
          type: 'bar',
          itemStyle: {
            normal: {
              show: true,
              color: '#0c93dc',
              barBorderRadius: fitChartSize(50),
              borderWidth: 0,
            },
          },
          zlevel: 2,
          barWidth: fitChartSize(20),
          data: [127],
          label: {
            formatter: '{c}吨',
            show: true,
            position: 'top',
            textStyle: {
              fontSize: fitChartSize(12),
              color: 'rgba(255,255,255,.6)',
            },
          },
        },
      ],
    }

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option)
    myChart2.setOption(option2)
    myChart3.setOption(option3)
    myChart4.setOption(option4)
    myChart5.setOption(_.merge(_.cloneDeep(baseOptions), option5))

    addChartResize(myChart)
    addChartResize(myChart2)
    addChartResize(myChart3)
    addChartResize(myChart4)
    addChartResize(myChart5)
  }

  function addChartResize(chart: echarts.EChartsType) {
    window.addEventListener('resize', () => {
      chart.resize()
    })
  }
  return {
    initBaseEcharts_01,
    initBaseEcharts_02,
    initBaseEcharts_03,
  }
}
export default useEcharts
