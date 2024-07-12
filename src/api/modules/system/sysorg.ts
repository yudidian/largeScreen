import RequestHttp from '@/api/request'
const sysorg = {
/** 机构信息------ 新增机构 */
  addSysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/addSysOrg', method: 'post', data }) },
  /** 机构信息------ 删除机构 */
  deleteSysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/deleteSysOrg', method: 'post', params: data }) },
  /** 机构信息------ 根据查询条件导出机构 */
  exportSysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/exportSysOrg', method: 'post', params: data }) },
  /** 机构信息------ 查询所有机构 */
  findAllSysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/findAllSysOrg', method: 'get', data }) },
  /** 机构信息------ 查询带有职位的机构分页 */
  queryAllSysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/queryAllSysOrg', method: 'get', params: data }) },
  /** 机构信息------ 根据parenId获取子机构数据 */
  queryChildrenOrgByPid (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/queryChildrenOrgByPid', method: 'get', params: data }) },
  /** 机构信息------ 查询机构类型的下拉框数据 */
  queryOrgType (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/queryOrgType', method: 'get', data }) },
  /** 机构信息------ 查询当前登录用户权限-修井公司/修井队下拉框数据 */
  queryOrgTypeWellOrTeam (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/queryOrgTypeWellOrTeam', method: 'get', data }) },
  /** 机构信息------ 查询机构分页 */
  querySysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/querySysOrg', method: 'get', params: data }) },
  /** 机构信息------ 根据orgType获取所有机构数据 */
  querySysOrgByOrgType (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/querySysOrgByOrgType', method: 'get', params: data }) },
  /** 机构信息------ 查询机构的树数据 */
  querySysOrgTree (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/querySysOrgTree', method: 'get', data }) },
  /** 机构信息------ 编辑机构 */
  updateSysOrg (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysorg/updateSysOrg', method: 'put', data }) }
}
export default sysorg
