import RequestHttp from '@/api/request'
const sysfile = {
/** 文件管理------ 新增 文件管理 */
  addSysFile (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/addSysFile', method: 'post', data }) },
  /** 文件管理------ 批量新增 文件管理 */
  addSysFiles (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/addSysFiles', method: 'post', data }) },
  /** 文件管理------ 根据主键ID删除 文件管理 */
  deleteSysFileById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/deleteSysFileById', method: 'post', params: data }) },
  /** 文件管理------ 根据主键ID数组批量删除 文件管理 */
  deleteSysFileByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/deleteSysFileByIds', method: 'post', params: data }) },
  /** 文件管理------ 根据查询条件导出 文件管理 */
  exportSysFile (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/exportSysFile', method: 'post', params: data }) },
  /** 文件管理------ 查询业务的树状结构目录 */
  findDirTree (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/findDirTree', method: 'get', params: data }) },
  /** 文件管理------ 查询 文件管理 所有数据 */
  findSysFileAll (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/findSysFileAll', method: 'get', data }) },
  /** 文件管理------ 查询 文件管理 分页 */
  findSysFileByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/findSysFileByCondition', method: 'get', params: data }) },
  /** 文件管理------ 根据主键ID数据查询 文件管理 数据 */
  findSysFileById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/findSysFileById', method: 'get', params: data }) },
  /** 文件管理------ 根据主键ID数组查询 文件管理 数据 */
  findSysFileByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/findSysFileByIds', method: 'get', params: data }) },
  /** 文件管理------ 打开目录 */
  openDir (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/openDir', method: 'get', params: data }) },
  /** 文件管理------ 搜索业务关联的文件 */
  searchFile (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/searchFile', method: 'get', params: data }) },
  /** 文件管理------ 编辑 文件管理 */
  updateSysFile (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/updateSysFile', method: 'put', data }) },
  /** 文件管理------ 批量编辑 文件管理 */
  updateSysFiles (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfile/updateSysFiles', method: 'post', data }) }
}
export default sysfile
