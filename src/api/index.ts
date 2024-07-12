const apiList: Record<string, any> = {}
function getApiList() {
  const modules = import.meta.glob('./modules/*/**.ts', { eager: true })
  for (const path in modules) {
    const module: any = modules[path]
    Object.assign(apiList, module.default)
  }
}
getApiList()
export default apiList
