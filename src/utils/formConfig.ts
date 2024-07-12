import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import type { Ref } from 'vue'
import { reactive, ref } from 'vue'
import _ from 'lodash'
import api from '@/api'

/** 主表格 新增 | 编辑 | 删除 */
export function optFormConfig(optFormRef: any, optFormData: any, optDialogVisible: any, optTitle: any, optApi: any, initData: any) {
  /** @param dialogTitle 弹出框标题 */
  const dialogTitle = { create: '新增', update: '编辑' }
  /** @param dialogTypes 当前弹出框类型‘create’ 还是 ‘update’ */
  const dialogTypes = ref()
  // 点击【新增】|【编辑】按钮的操作
  function handleOpt(dialogType: 'create' | 'update', data: any, callback?: any) {
    dialogTypes.value = dialogType
    optTitle.value = dialogTitle[dialogType]
    if (dialogType === 'create') {
      // 之前为optFormData 添加过属性进行保留
      const otherData = _.cloneDeep(optFormData.value)
      optFormData.value = Object.assign(_.cloneDeep(initData), otherData)
    }
    else {
      optFormData.value = data
    }
    optDialogVisible.value = true
    callback && callback()
  }
  // 点击【确认提交】按钮操作
  const submitForm = _.throttle(async (formEl: FormInstance | undefined, callback: any, params?: any) => {
    if (formEl) {
      await formEl.validate((valid) => {
        if (valid) {
          const apiName = optApi[dialogTypes.value]
          optDialogVisible.value = false
          api[apiName](params || optFormData.value).then(() => {
            ElMessage({
              type: 'success',
              message: '提交成功',
            })
            formEl.resetFields() // 提交成功之后清除表单内容
            callback && callback()
          })
        }
      })
    }
  }, 500, { leading: true, trailing: false })
  // 点击【重置】
  function resetForm(formEl: FormInstance | undefined) {
    if (formEl) {
      formEl.resetFields()
    }
  }
  // 点击【删除】
  const deleteRow = _.throttle((id: string, callback: any) => {
    api[optApi.delete]({ id }).then(() => {
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      callback && callback()
    })
  }, 500, { leading: true, trailing: false })
  // 关闭时回调
  const closeDialog = (formEl: FormInstance | undefined, callback?: () => void) => {
    if (formEl) {
      optFormData.value = { ...initData }
      formEl.resetFields()
      callback && callback()
    }
  }
  // 返回参数
  return { optTitle, optFormRef, optDialogVisible, optFormData, dialogTypes, handleOpt, submitForm, resetForm, deleteRow, closeDialog }
}

export function commonOptForm<T>(optApi: any, mainRule: any, initData: any, optFormData: Ref<T>) {
  /**
   * @param optFormRef Form表单Ref
   * @param optRules Form表单规则
   * @param optDialogVisible 弹出框显隐
   * @param optDialogVisible 弹出框显隐
   */
  const optFormRef = ref<FormInstance>()
  const optRules = reactive<FormRules>(mainRule)
  const optDialogVisible = ref(false)
  const optTitle = ref<string>('')
  const { dialogTypes, handleOpt, submitForm, resetForm, deleteRow, closeDialog } = optFormConfig(optFormRef, optFormData, optDialogVisible, optTitle, optApi, initData)
  return { optFormRef, optFormData, optRules, optTitle, optDialogVisible, dialogTypes, handleOpt, submitForm, resetForm, deleteRow, closeDialog }
}
