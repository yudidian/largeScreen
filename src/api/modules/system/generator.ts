import RequestHttp from '@/api/request'
const generator = {
/** 代码信息------ 新增代码信息 */
  addGenerator (data?:any) { return RequestHttp.axios({ url: '/api/uaa/generator/addGenerator', method: 'post', data }) },
  /** 代码信息------ 删除代码信息 */
  deleteGenerator (data?:any) { return RequestHttp.axios({ url: '/api/uaa/generator/deleteGenerator', method: 'post', params: data }) },
  /** 代码信息------ 根据查询条件导出代码信息 */
  exportGenerator (data?:any) { return RequestHttp.axios({ url: '/api/uaa/generator/exportGenerator', method: 'post', params: data }) },
  /** 代码信息------ 生成代码资源 */
  generateResource (data?:any) { return RequestHttp.axios({ url: '/api/uaa/generator/generateResource', method: 'post', params: data, responseType: 'blob' }) },
  /** 代码信息------ 查询代码信息分页 */
  queryGenerator (data?:any) { return RequestHttp.axios({ url: '/api/uaa/generator/queryGenerator', method: 'get', params: data }) },
  /** 代码信息------ 编辑代码信息 */
  updateGenerator (data?:any) { return RequestHttp.axios({ url: '/api/uaa/generator/updateGenerator', method: 'put', data }) }
}
export default generator
