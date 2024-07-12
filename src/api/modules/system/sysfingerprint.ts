import RequestHttp from '@/api/request'
const sysfingerprint = {
/** 指纹信息表------ 新增 指纹信息表 */
  addSysFingerprint (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/addSysFingerprint', method: 'post', data }) },
  /** 指纹信息表------ 批量新增 指纹信息表 */
  addSysFingerprints (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/addSysFingerprints', method: 'post', data }) },
  /** 指纹信息表------ 根据主键ID删除 指纹信息表 */
  deleteSysFingerprintById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/deleteSysFingerprintById', method: 'post', params: data }) },
  /** 指纹信息表------ 根据主键ID数组批量删除 指纹信息表 */
  deleteSysFingerprintByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/deleteSysFingerprintByIds', method: 'post', params: data }) },
  /** 指纹信息表------ 根据查询条件导出 指纹信息表 */
  exportSysFingerprint (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/exportSysFingerprint', method: 'post', params: data }) },
  /** 指纹信息表------ 查询 指纹信息表 所有数据 */
  findSysFingerprintAll (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/findSysFingerprintAll', method: 'get', data }) },
  /** 指纹信息表------ 查询 指纹信息表 分页 */
  findSysFingerprintByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/findSysFingerprintByCondition', method: 'get', params: data }) },
  /** 指纹信息表------ 根据主键ID数据查询 指纹信息表 数据 */
  findSysFingerprintById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/findSysFingerprintById', method: 'get', params: data }) },
  /** 指纹信息表------ 根据主键ID数组查询 指纹信息表 数据 */
  findSysFingerprintByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/findSysFingerprintByIds', method: 'get', params: data }) },
  /** 指纹信息表------ 编辑 指纹信息表 */
  updateSysFingerprint (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/updateSysFingerprint', method: 'put', data }) },
  /** 指纹信息表------ 批量编辑 指纹信息表 */
  updateSysFingerprints (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysfingerprint/updateSysFingerprints', method: 'post', data }) }
}
export default sysfingerprint
