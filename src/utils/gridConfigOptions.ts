import type { VxeGridInstance, VxeGridProps } from 'vxe-table'
import XEUtils from 'xe-utils'
import { reactive } from 'vue'
import apiList from '@/api/index'

interface ProxyAjaxQueryPageParams {
  total: number
  pageSize: number
  currentPage: number
}
interface QueryParams {
  page: ProxyAjaxQueryPageParams
  form: Record<string, any>
}
const configGrid = {
  headerCellStyle: { 'background-color': '#ececec', 'border-bottom': '1px #dbdbdb solid' },
  border: true,
  autoResize: true,
  showHeaderOverflow: false,
  syncResize: true,
  showOverflow: true,
  keepSource: true,
  id: 'id',
  rowConfig: { isCurrent: true, isHover: true, keyField: 'id', useKey: true },
  printConfig: {},
  sortConfig: { trigger: 'cell', remote: true },
  filterConfig: {
    remote: true,
  },
  exportConfig: {
    type: 'csv',
    types: ['csv', 'html', 'xml', 'txt'],
  },
  // importConfig: {
  //   remote: false,
  //   types: 'xlsx'
  // },
  formConfig: {},
  columnConfig: {
    resizable: true,
  },
  toolbarConfig: {
    // slots: {
    //   buttons: 'toolbar_buttons'
    // },
    refresh: true,
    export: true,
    print: true,
    zoom: true,
    custom: true,
    perfect: true,
  },
  checkboxConfig: { reserve: true, highlight: true },
  editRules: {},
  editConfig: { trigger: 'click', mode: 'row', showStatus: true },
} as VxeGridProps
// 分页grid
const pageGrid = {
  stripe: true,
  pagerConfig: {
    pageSize: 100,
    pageSizes: [5, 10, 15, 20, 50, 100, 200, 500, 1000],
    perfect: true,
    align: 'left',
    layouts: ['PrevJump', 'PrevPage', 'Number', 'NextPage', 'NextJump', 'Sizes', 'FullJump', 'Total'],
  },
  proxyConfig: {
    autoLoad: false,
    seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
    sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
    filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
    form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
    props: {
      list: 'data.list',
      result: 'data.list', // 配置响应结果列表字段
      total: 'data.pagination.total', // 配置响应结果总页数字段
    },
    ajax: {},
  },
} as VxeGridProps
// 树状grid
const treeGrid = {
  treeConfig: { children: 'children', reserve: true },
  // stripe: true,
  proxyConfig: {
    autoLoad: false,
    seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
    sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
    filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
    form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
    props: {
      list: 'data.list',
      result: 'data.list', // 配置响应结果列表字段
      total: 'data.pagination.total', // 配置响应结果总页数字段
    },
  },
} as VxeGridProps
// 不分页grid
const noPageGrid = {
  stripe: true,
  proxyConfig: {
    autoLoad: false,
    seq: true, // 启用动态序号代理，每一页的序号会根据当前页数变化
    sort: true, // 启用排序代理，当点击排序时会自动触发 query 行为
    filter: true, // 启用筛选代理，当点击筛选时会自动触发 query 行为
    form: true, // 启用表单代理，当点击表单提交按钮时会自动触发 reload 行为
    props: {
      list: 'data',
    },
  },
} as VxeGridProps

/**
 * gridType: 表格类型：
 *            pageGrid: 分页grid
 *            treeGrid: 树状grid
 *            noPageGrid: 不分页grid
 *            noAgentGrid: 不代理（一般用于demo，不适用后端api情况）
 * apiName：api名称 例如 url: '/api/uaa/sysdict/addSysDict'：apiName = 'addSysDict'
 * pageOptions: 表格的相关业务数据
 */
function getGridOption(gridType: string, apiName: string, pageOptions: VxeGridProps, params?: any) {
  let options = {} as VxeGridProps
  switch (gridType) {
    case 'pageGrid':
      options = Object.assign(JSON.parse(JSON.stringify(pageGrid)), configGrid)
      break
    case 'treeGrid':
      options = Object.assign(JSON.parse(JSON.stringify(treeGrid)), configGrid)
      break
    case 'noPageGrid':
      options = Object.assign(JSON.parse(JSON.stringify(noPageGrid)), configGrid)
      break
    case 'noAgentGrid':
      options = Object.assign({}, configGrid)
      break
  }
  if (gridType !== 'noAgentGrid') {
    if (options.proxyConfig) {
      options.proxyConfig.ajax = {
        query: ({ page, form }: QueryParams) => {
          let queryParams = Object.assign({}, form)
          queryParams = { ...queryParams, ...params }
          queryParams.currentPage = page.currentPage
          queryParams.pageSize = page.pageSize
          return apiList[apiName](queryParams)
        },
      }
    }
  }
  return XEUtils.clone(Object.assign(options, pageOptions), true)
}
/** 主表格 */
export function mainGridFun(gridType: string, apiName: string, pageOptions: VxeGridProps, params?: any, isNoNeedOpt?: boolean) {
  const gridOptions = reactive<VxeGridProps>(getGridOption(gridType, apiName, pageOptions, params))
  if (isNoNeedOpt) {
    gridOptions.columns?.splice(-1, 1)
  }
  gridOptions.height = 'auto'
  function submit(gridRef: VxeGridInstance | undefined, cb?: any) {
    if (gridRef) {
      gridRef.commitProxy('query').then(() => {
        cb && cb()
      })
    }
  }
  function changeParams(params: any) {
    if (gridOptions.proxyConfig) {
      gridOptions.proxyConfig.ajax = {
        query: ({ page, form }: QueryParams) => {
          let queryParams = Object.assign({}, form)
          queryParams = { ...queryParams, ...params }
          queryParams.currentPage = page.currentPage
          queryParams.pageSize = page.pageSize
          return apiList[apiName](queryParams)
        },
      }
    }
  }
  return { gridOptions, submit, changeParams }
}
