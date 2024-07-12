import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

export function dateFormat(date: string | number | Date, format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(date).format(format)
}
export default dayjs
