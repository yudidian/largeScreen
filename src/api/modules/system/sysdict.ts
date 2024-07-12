import RequestHttp from '@/api/request'
const sysdict = {
/** 数据字典------ 新增字典 */
  addSysDict (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/addSysDict', method: 'post', data }) },
  /** 数据字典------ 删除字典 */
  deleteSysDict (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/deleteSysDict', method: 'post', params: data }) },
  /** 数据字典------ 根据查询条件导出字典 */
  exportSysDict (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/exportSysDict', method: 'post', params: data }) },
  /** 数据字典------ 查询字典类型数据列表 */
  getSysDictByType (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/getSysDictByType', method: 'get', params: data }) },
  /** 数据字典------ 查询字典类型数据列表，用于前端渲染数据 */
  getSysDictList (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/getSysDictList', method: 'get', data }) },
  /** 数据字典------ 根据字典类型查询下拉框数据列表 */
  queryDictByDictType (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/queryDictByDictType', method: 'get', params: data }) },
  /** 数据字典------ 查询字典分页 */
  querySysDict (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/querySysDict', method: 'get', params: data }) },
  /** 数据字典------ 查询字典的树数据 */
  querySysDictTree (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/querySysDictTree', method: 'get', data }) },
  /** 数据字典------ 编辑字典 */
  updateSysDict (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysdict/updateSysDict', method: 'put', data }) }
}
export default sysdict
