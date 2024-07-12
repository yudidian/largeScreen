import RequestHttp from '@/api/request'
const syssigninfo = {
/** 考勤表------ 新增 考勤表 */
  addSysSignInfo (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/addSysSignInfo', method: 'post', data }) },
  /** 考勤表------ 新增 -App端 考勤表 */
  addSysSignInfoApp (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/addSysSignInfoApp', method: 'post', data }) },
  /** 考勤表------ 批量新增 考勤表 */
  addSysSignInfos (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/addSysSignInfos', method: 'post', data }) },
  /** 考勤表------ 根据主键ID删除 考勤表 */
  deleteSysSignInfoById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/deleteSysSignInfoById', method: 'post', params: data }) },
  /** 考勤表------ 根据主键ID数组批量删除 考勤表 */
  deleteSysSignInfoByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/deleteSysSignInfoByIds', method: 'post', params: data }) },
  /** 考勤表------ 根据查询条件导出 考勤表 */
  exportSysSignInfo (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/exportSysSignInfo', method: 'post', params: data }) },
  /** 考勤表------ 根据用户ID查询 考勤表 当前用户签到状态 */
  findCurrentStatusByUserId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/findCurrentStatusByUserId', method: 'get', params: data }) },
  /** 考勤表------ 查询 考勤表 所有数据 */
  findSysSignInfoAll (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/findSysSignInfoAll', method: 'get', data }) },
  /** 考勤表------ 查询 考勤表 分页 */
  findSysSignInfoByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/findSysSignInfoByCondition', method: 'get', params: data }) },
  /** 考勤表------ 根据主键ID数据查询 考勤表 数据 */
  findSysSignInfoById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/findSysSignInfoById', method: 'get', params: data }) },
  /** 考勤表------ 根据主键ID数组查询 考勤表 数据 */
  findSysSignInfoByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/findSysSignInfoByIds', method: 'get', params: data }) },
  /** 考勤表------ 查询 考勤表 分页 */
  findSysSignInfoByPsSceneProspectId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/findSysSignInfoByPsSceneProspectId', method: 'get', params: data }) },
  /** 考勤表------ 编辑 考勤表 */
  updateSysSignInfo (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/updateSysSignInfo', method: 'put', data }) },
  /** 考勤表------ 编辑 -App端 考勤表 */
  updateSysSignInfoApp (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/updateSysSignInfoApp', method: 'put', data }) },
  /** 考勤表------ 批量编辑 考勤表 */
  updateSysSignInfos (data?:any) { return RequestHttp.axios({ url: '/api/uaa/syssigninfo/updateSysSignInfos', method: 'post', data }) }
}
export default syssigninfo
