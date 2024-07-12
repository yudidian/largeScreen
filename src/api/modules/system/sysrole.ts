import RequestHttp from '@/api/request'
const sysrole = {
/** 角色信息------ 新增角色 */
  addSysRole (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/addSysRole', method: 'post', data }) },
  /** 角色信息------ 删除角色 */
  deleteSysRole (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/deleteSysRole', method: 'post', params: data }) },
  /** 角色信息------ 根据查询条件导出角色 */
  exportSysRole (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/exportSysRole', method: 'post', params: data }) },
  /** 角色信息------ 查询角色编码的下拉框数据 */
  queryRoleCode (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/queryRoleCode', method: 'get', data }) },
  /** 角色信息------ 查询当前用户的过滤数据字段 */
  queryRoleData (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/queryRoleData', method: 'get', params: data }) },
  /** 角色信息------ 查询角色名称的下拉框数据 */
  queryRoleName (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/queryRoleName', method: 'get', data }) },
  /** 角色信息------ 查询角色的多选框数据 */
  queryRoleNameCheckbox (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/queryRoleNameCheckbox', method: 'get', data }) },
  /** 角色信息------ 查询角色分页 */
  querySysRole (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/querySysRole', method: 'get', params: data }) },
  /** 角色信息------ 编辑角色 */
  updateSysRole (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysrole/updateSysRole', method: 'put', data }) }
}
export default sysrole
