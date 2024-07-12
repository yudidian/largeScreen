import RequestHttp from '@/api/request'
const sysip = {
/** 系统IP地址表------ 新增 系统IP地址表 */
  addSysIp (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/addSysIp', method: 'post', data }) },
  /** 系统IP地址表------ 批量新增 系统IP地址表 */
  addSysIps (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/addSysIps', method: 'post', data }) },
  /** 系统IP地址表------ 根据主键ID删除 系统IP地址表 */
  deleteSysIpById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/deleteSysIpById', method: 'post', params: data }) },
  /** 系统IP地址表------ 根据主键ID数组批量删除 系统IP地址表 */
  deleteSysIpByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/deleteSysIpByIds', method: 'post', params: data }) },
  /** 系统IP地址表------ 根据查询条件导出 系统IP地址表 */
  exportSysIp (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/exportSysIp', method: 'post', params: data }) },
  /** 系统IP地址表------ 查询 系统IP地址表 所有数据 */
  findSysIpAll (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/findSysIpAll', method: 'get', data }) },
  /** 系统IP地址表------ 查询 系统IP地址表 分页 */
  findSysIpByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/findSysIpByCondition', method: 'get', params: data }) },
  /** 系统IP地址表------ 根据主键ID数据查询 系统IP地址表 数据 */
  findSysIpById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/findSysIpById', method: 'get', params: data }) },
  /** 系统IP地址表------ 根据主键ID数组查询 系统IP地址表 数据 */
  findSysIpByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/findSysIpByIds', method: 'get', params: data }) },
  /** 系统IP地址表------ 编辑 系统IP地址表 */
  updateSysIp (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/updateSysIp', method: 'put', data }) },
  /** 系统IP地址表------ 批量编辑 系统IP地址表 */
  updateSysIps (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysip/updateSysIps', method: 'post', data }) }
}
export default sysip
