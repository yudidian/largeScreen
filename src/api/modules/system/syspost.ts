import RequestHttp from '@/api/request'
const syspost = {
/** 职位管理------ 新增 职位管理 */
  addSysPost (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/addSysPost', method: 'post', data }) },
  /** 职位管理------ 批量新增 职位管理 */
  addSysPosts (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/addSysPosts', method: 'post', data }) },
  /** 职位管理------ 根据主键ID删除 职位管理 */
  deleteSysPostById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/deleteSysPostById', method: 'post', params: data }) },
  /** 职位管理------ 根据主键ID数组批量删除 职位管理 */
  deleteSysPostByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/deleteSysPostByIds', method: 'post', params: data }) },
  /** 职位管理------ 根据查询条件导出 职位管理 */
  exportSysPost (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/exportSysPost', method: 'post', params: data }) },
  /** 职位管理------ 查询 职位管理 所有数据 */
  findSysPostAll (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/findSysPostAll', method: 'get', data }) },
  /** 职位管理------ 查询 职位管理 分页 */
  findSysPostByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/findSysPostByCondition', method: 'get', params: data }) },
  /** 职位管理------ 根据主键ID数据查询 职位管理 数据 */
  findSysPostById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/findSysPostById', method: 'get', params: data }) },
  /** 职位管理------ 根据主键ID数组查询 职位管理 数据 */
  findSysPostByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/findSysPostByIds', method: 'get', params: data }) },
  /** 职位管理------ 查询 职位管理 分页 */
  findSysPostByOrgId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/findSysPostByOrgId', method: 'get', params: data }) },
  /** 职位管理------ 编辑 职位管理 */
  updateSysPost (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/updateSysPost', method: 'put', data }) },
  /** 职位管理------ 批量编辑 职位管理 */
  updateSysPosts (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syspost/updateSysPosts', method: 'post', data }) }
}
export default syspost
