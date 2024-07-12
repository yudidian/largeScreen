import axios from 'axios'
import api from '@/api/request.ts'

export default {
  // 登录
  login: (data: {
    username: string
    password: string
  }) => api.axios({
    url: '/oauth/token',
    method: 'post',
    params: data,
    headers: { 'Authorization': 'Basic YnJvd3Nlcjo=', 'Content-Type': 'application/x-www-form-urlencoded' },
  }),

  // 获取权限
  permission: () => axios.get('/mock/user/permission'),

  getSysUser: () => api.axios({ url: '/api/uaa/users/getSysUser', method: 'get' }),
  queryCurrentAuthority: (data: any) => api.axios({ url: '/api/account/sysuserdetail/queryCurrentAuthority', method: 'post', params: data }),
  // 修改密码
  passwordEdit: (data: {
    password: string
    newpassword: string
  }) => axios.post('user/password/edit', data),
}
