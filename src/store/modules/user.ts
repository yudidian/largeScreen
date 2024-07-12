import useSettingsStore from './settings'
import useRouteStore from './route'
import useMenuStore from './menu'
import router from '@/router'
import apiUser from '@/api/modules/system/user'
import sysdict from '@/api/modules/system/sysdict'
import sysparam from '@/api/modules/system/sysparam'
import sysmenu from '@/api/modules/system/sysmenu'

const useUserStore = defineStore(
  // 唯一ID
  'user',
  () => {
    const settingsStore = useSettingsStore()
    const routeStore = useRouteStore()
    const menuStore = useMenuStore()

    const account = ref(localStorage.account ?? '')
    const token = ref(localStorage.token ?? '')
    const avatar = ref(localStorage.avatar ?? '')
    const permissions = ref<string[]>([])
    const userInfo = ref()
    const currentAuthority = ref()
    const paramsList = ref()
    const dicList = ref()
    const menu = ref()
    const isLogin = computed(() => {
      return !!token.value
    })

    // 登录
    async function login(data: {
      username: string
      password: string
      tenantCode: string
      scope: string
      grant_type: string
      client_id: string
      type: string
    }) {
      const res: any = await apiUser.login(data)
      localStorage.setItem('username', res.username)
      localStorage.setItem('token', res.access_token)
      account.value = res.username
      token.value = res.access_token
    }
    // 登出
    async function logout(redirect = router.currentRoute.value.fullPath) {
      localStorage.removeItem('account')
      localStorage.removeItem('token')
      localStorage.removeItem('avatar')
      account.value = ''
      token.value = ''
      avatar.value = ''
      permissions.value = []
      routeStore.removeRoutes()
      menuStore.setActived(0)
      router.push({
        name: 'login',
        query: {
          ...(router.currentRoute.value.path !== settingsStore.settings.home.fullPath && router.currentRoute.value.name !== 'login' && { redirect }),
        },
      })
    }
    // 获取权限
    async function getPermissions() {
      await getSysUser()
    }
    // 修改密码
    async function editPassword(data: {
      password: string
      newpassword: string
    }) {
      await apiUser.passwordEdit(data)
    }
    function getSysUser() {
      return new Promise<void>((resolve, reject) => {
        apiUser.getSysUser().then((res: any) => {
          if (!res) {
            return
          }
          userInfo.value = res.data
          queryCurrentAuthority().then(() => {
            querySysDict().then(() => {
              querySysMenu().then(() => {
                resolve()
              })
            })
          })
        }).catch((error: any) => {
          reject(error)
        })
      })
    }
    function queryCurrentAuthority() {
      return new Promise<void>((resolve, reject) => {
        apiUser.queryCurrentAuthority({ username: userInfo.value.username }).then((res: any) => {
          currentAuthority.value = res
          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    }
    function querySysDict() {
      return new Promise<void>((resolve, reject) => {
        sysdict.querySysDict().then((res: any) => {
          dicList.value = res.data.list
          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    }
    function querySysParam() {
      return new Promise<void>((resolve, reject) => {
        sysparam.querySysParam().then((res: any) => {
          paramsList.value = res.data
          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    }
    function querySysMenu() {
      return new Promise<void>((resolve, reject) => {
        sysmenu.querySysMenu().then((res: any) => {
          menu.value = res.data.list
          resolve()
        }).catch((error: any) => {
          reject(error)
        })
      })
    }
    return {
      account,
      token,
      avatar,
      permissions,
      isLogin,
      userInfo,
      currentAuthority,
      paramsList,
      dicList,
      menu,
      login,
      logout,
      getPermissions,
      editPassword,
      getSysUser,
      querySysParam,
    }
  },
)

export default useUserStore
