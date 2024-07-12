import RequestHttp from '@/api/request'
const sysuser = {
/** 用户信息------ 新增用户 */
  addSysUser (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/addSysUser', method: 'post', data }) },
  /** 用户信息------ 删除用户 */
  deleteSysUser (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/deleteSysUser', method: 'post', params: data }) },
  /** 用户信息------ 根据查询条件导出用户 */
  exportSysUser (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/exportSysUser', method: 'post', params: data }) },
  /** 用户信息------ 根据条件查询所有用户 */
  findAllSysUserByCondition (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/findAllSysUserByCondition', method: 'get', params: data }) },
  /** 用户信息------ 根据teamId查询干部人员信息 */
  findCadreUserByTeamId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/findCadreUserByTeamId', method: 'get', params: data }) },
  /** 用户信息------ 根据teamId查询分公司机关科室人员 */
  findOfficeUserByTeamId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/findOfficeUserByTeamId', method: 'get', params: data }) },
  /** 用户信息------ 根据用户名查询用户信息 */
  getUserByUsername (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/getUserByUsername', method: 'get', params: data }) },
  /** 用户信息------ 导入用户信息（员工花名册） */
  importSysUser (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/importSysUser', method: 'get', data }) },
  /** 用户信息------ 根据 org_id 查询当前组织机构下的所有用户 */
  queryAllSysUserByOrgId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/queryAllSysUserByOrgId', method: 'get', params: data }) },
  /** 用户信息------ 查询用户分页 */
  querySysUser (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/querySysUser', method: 'get', params: data }) },
  /** 用户信息------ 根据用户名查询用户ID的数据列表 */
  querySysUserIdByUsername (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/querySysUserIdByUsername', method: 'get', params: data }) },
  /** 用户信息------ 查询用户ID的下拉框数据 */
  queryUserId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/queryUserId', method: 'get', data }) },
  /** 用户信息------ 查询用户名的下拉框数据 */
  queryUsername (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/queryUsername', method: 'get', data }) },
  /** 用户信息------ 根据用户ID查询用户名的数据列表 */
  queryUsernameBySysUserId (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/queryUsernameBySysUserId', method: 'get', params: data }) },
  /** 用户信息------ 编辑用户 */
  updateSysUser (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuser/updateSysUser', method: 'put', data }) }
}
export default sysuser
