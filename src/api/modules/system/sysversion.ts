import RequestHttp from '@/api/request'

const sysversion = {
/** 系统版本号表------ 新增 系统版本号表 */
  addSysVersion(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/addSysVersion', method: 'post', data }) },
  /** 系统版本号表------ 批量新增 系统版本号表 */
  addSysVersions(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/addSysVersions', method: 'post', data }) },
  /** 系统版本号表------ 根据主键ID删除 系统版本号表 */
  deleteSysVersionById(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/deleteSysVersionById', method: 'post', params: data }) },
  /** 系统版本号表------ 根据主键ID数组批量删除 系统版本号表 */
  deleteSysVersionByIds(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/deleteSysVersionByIds', method: 'post', params: data }) },
  /** 系统版本号表------ 根据查询条件导出 系统版本号表 */
  exportSysVersion(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/exportSysVersion', method: 'post', params: data }) },
  /** 系统版本号表------ 查询 系统版本号表 所有数据 */
  findSysVersionAll(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/findSysVersionAll', method: 'get', data }) },
  /** 系统版本号表------ 查询 系统版本号表 分页 */
  findSysVersionByCondition(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/findSysVersionByCondition', method: 'get', params: data }) },
  /** 系统版本号表------ 根据主键ID数据查询 系统版本号表 数据 */
  findSysVersionById(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/findSysVersionById', method: 'get', params: data }) },
  /** 系统版本号表------ 根据主键ID数组查询 系统版本号表 数据 */
  findSysVersionByIds(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/findSysVersionByIds', method: 'get', params: data }) },
  /** 系统版本号表------ 编辑 系统版本号表 */
  updateSysVersion(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/updateSysVersion', method: 'put', data }) },
  /** 系统版本号表------ 批量编辑 系统版本号表 */
  updateSysVersions(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysversion/updateSysVersions', method: 'post', data }) },
}
export default sysversion
