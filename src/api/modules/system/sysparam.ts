import RequestHttp from '@/api/request'

const sysparam = {
/** 参数信息------ 新增参数 */
  addSysParam(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysparam/addSysParam', method: 'post', data }) },
  /** 参数信息------ 删除参数 */
  deleteSysParam(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysparam/deleteSysParam', method: 'post', params: data }) },
  /** 参数信息------ 根据查询条件导出参数 */
  exportSysParam(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysparam/exportSysParam', method: 'post', params: data }) },
  /** 参数信息------ 查询参数分页 */
  querySysParam(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysparam/querySysParam', method: 'get', params: data }) },
  /** 参数信息------ 编辑参数 */
  updateSysParam(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysparam/updateSysParam', method: 'put', data }) },
}
export default sysparam
