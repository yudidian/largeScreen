import RequestHttp from '@/api/request'
import { stringify } from 'qs'
const notification = {
/** 消息通知------ 新增消息通知 */
  addNotification (data?:any) { return RequestHttp.axios({ url: `/api/notification/notification/addNotification?${stringify(data.expand)}`, method: 'post', needLoading: true, data: { ...data.body } }) },
  /** 消息通知------ 删除消息通知 */
  deleteNotification (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/deleteNotification', method: 'post', params: data }) },
  /** 消息通知------ 查询顶部消息通知的数据 */
  queryHeadNotification (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/queryHeadNotification', method: 'get', data }) },
  /** 消息通知------ 查询我的消息分页 */
  queryMyNotification (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/queryMyNotification', method: 'get', params: data }) },
  /** 消息通知------ 查询消息通知分页 */
  queryNotification (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/queryNotification', method: 'get', params: data }) },
  /** 消息通知------ 查询优先级的下拉框数据 */
  queryNotificationPriority (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/queryNotificationPriority', method: 'get', data }) },
  /** 消息通知------ 查询类型的下拉框数据 */
  queryNotificationType (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/queryNotificationType', method: 'get', data }) },
  /** 消息通知------ 阅读消息，不传ID则是全部已读 */
  readNotification (data?:any) { return RequestHttp.axios({ url: '/api/uaa/notification/readNotification', method: 'get', params: data }) },
  /** 消息通知------ 编辑消息通知 */
  updateNotification (data?:any) { return RequestHttp.axios({ url: `/api/notification/notification/updateNotification?${stringify(data.expand)}`, method: 'put', needLoading: true, data: { ...data.body } }) }
}
export default notification
