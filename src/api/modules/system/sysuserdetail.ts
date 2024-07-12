import RequestHttp from '@/api/request'
const sysuserdetail = {
/** 用户详细信息------ 比对验证码 */
  compareCaptcha (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/compareCaptcha', method: 'post', params: data }) },
  /** 用户详细信息------ 查询当前用户的授权角色、菜单和按钮 */
  queryCurrentAuthority (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/queryCurrentAuthority', method: 'post', params: data }) },
  /** 用户详细信息------ 注册用户 */
  registerAccount (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/registerAccount', method: 'post', data }) },
  /** 用户详细信息------ 找回密码 */
  retrievePassword (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/retrievePassword', method: 'post', params: data }) },
  /** 用户详细信息------ 修改用户头像图片地址 */
  updateAvatar (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/updateAvatar', method: 'post', params: data }) },
  /** 用户详细信息------ 修改用户密码 */
  updatePassword (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/updatePassword', method: 'put', params: data }) },
  /** 用户详细信息------ 管理员修改密码 */
  updatePasswordByAdmin (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/updatePasswordByAdmin', method: 'post', params: data }) },
  /** 用户详细信息------ 编辑用户详细信息 */
  updateSysUserDetail (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/updateSysUserDetail', method: 'put', data }) },
  /** 用户详细信息------ 根据字段编辑用户信息 */
  updateSysUserInfo (data?:any) { return RequestHttp.axios({ url: '/api/uaa/sysuserdetail/updateSysUserInfo', method: 'put', params: data }) }
}
export default sysuserdetail
