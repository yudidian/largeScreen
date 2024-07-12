import RequestHttp from '@/api/request'

const sysmenu = {
/** 菜单信息------ 新增菜单 */
  addSysMenu(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/addSysMenu', method: 'post', data }) },
  /** 菜单信息------ 将对应的菜单按钮授权给角色 */
  authorizeMenuButtonToRole(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/authorizeMenuButtonToRole', method: 'post', params: data }) },
  /** 菜单信息------ 将对应的过滤数据字段授权给角色 */
  authorizeMenuDataToRole(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/authorizeMenuDataToRole', method: 'post', params: data }) },
  /** 菜单信息------ 将对应的菜单授权给角色 */
  authorizeMenuToRole(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/authorizeMenuToRole', method: 'post', headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' }, data }) },
  /** 菜单信息------ 删除过滤数据字段 */
  deleteDataField(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/deleteDataField', method: 'post', params: data }) },
  /** 菜单信息------ 删除菜单 */
  deleteSysMenu(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/deleteSysMenu', method: 'post', params: data }) },
  /** 菜单信息------ 根据查询条件导出菜单 */
  exportSysMenu(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/exportSysMenu', method: 'post', params: data }) },
  /** 菜单信息------ 查询菜单包含的按钮 */
  queryCheckedMenuButton(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/queryCheckedMenuButton', method: 'get', params: data }) },
  /** 菜单信息------ 根据菜单编码查询对应的过滤数据字段 */
  queryDataFieldByMenuCode(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/queryDataFieldByMenuCode', method: 'get', params: data }) },
  /** 菜单信息------ 根据角色编码查询对应的菜单按钮 */
  queryMenuButtonByRoleCode(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/queryMenuButtonByRoleCode', method: 'get', params: data }) },
  /** 菜单信息------ 查询菜单按钮的多选框数据 */
  queryMenuButtonCheckbox(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/queryMenuButtonCheckbox', method: 'get', data }) },
  /** 菜单信息------ 根据角色ID查询对应的菜单ID */
  queryMenuIdByRoleId(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/queryMenuIdByRoleId', method: 'get', params: data }) },
  /** 菜单信息------ 查询菜单分页 */
  querySysMenu(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/querySysMenu', method: 'get', params: data }) },
  /** 菜单信息------ 查询菜单按钮的树数据 */
  querySysMenuButtonTree(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/querySysMenuButtonTree', method: 'get', data }) },
  /** 菜单信息------ 查询菜单的树数据 */
  querySysMenuTree(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/querySysMenuTree', method: 'get', data }) },
  /** 菜单信息------ 编辑菜单 */
  updateSysMenu(data?: any) { return RequestHttp.axios({ url: '/api/uaa/sysmenu/updateSysMenu', method: 'put', data }) },
}
export default sysmenu
