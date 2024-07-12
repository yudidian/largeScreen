import RequestHttp from '@/api/request'
const sysmsg = {
/** 消息管理------ 新增 消息管理 */
  addSysMsg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/addSysMsg', method: 'post', data }) },
  /** 消息管理------ 批量新增 消息管理 */
  addSysMsgs (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/addSysMsgs', method: 'post', data }) },
  /** 消息管理------ 根据主键ID删除 消息管理 */
  deleteSysMsgById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/deleteSysMsgById', method: 'post', params: data }) },
  /** 消息管理------ 根据主键ID数组批量删除 消息管理 */
  deleteSysMsgByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/deleteSysMsgByIds', method: 'post', params: data }) },
  /** 消息管理------ 根据查询条件导出 消息管理 */
  exportSysMsg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/exportSysMsg', method: 'post', params: data }) },
  /** 消息管理------ 查询 消息管理 所有数据 */
  findSysMsgAll (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/findSysMsgAll', method: 'get', data }) },
  /** 消息管理------ 查询 消息管理 分页 */
  findSysMsgByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/findSysMsgByCondition', method: 'get', params: data }) },
  /** 消息管理------ 根据主键ID数据查询 消息管理 数据 */
  findSysMsgById (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/findSysMsgById', method: 'get', params: data }) },
  /** 消息管理------ 根据主键ID数组查询 消息管理 数据 */
  findSysMsgByIds (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/findSysMsgByIds', method: 'get', params: data }) },
  /** 消息管理------ 编辑 消息管理 */
  updateSysMsg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/updateSysMsg', method: 'put', data }) },
  /** 消息管理------ 批量编辑 消息管理 */
  updateSysMsgs (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysmsg/updateSysMsgs', method: 'post', data }) }
}
export default sysmsg
