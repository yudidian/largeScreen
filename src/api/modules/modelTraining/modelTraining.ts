import RequestHttp from '@/api/request'

export default {
  findCipherTrainParamsByCondition<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphertrainparams/findCipherTrainParamsByCondition', method: 'get', params: data }) },
  addCipherTrainParams<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphertrainparams/addCipherTrainParams', method: 'post', data }) },
  updateCipherTrainParams<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphertrainparams/updateCipherTrainParams', method: 'put', data }) },
  deleteCipherTrainParamsById<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphertrainparams/deleteCipherTrainParamsById', method: 'post', params: data }) },
  findHyperParamsByCondition<T>(data?: any) { return RequestHttp.axios<T>({ url: '/hyperparams/findHyperParamsByCondition', method: 'get', params: data }) },
  addHyperParams<T>(data?: any) { return RequestHttp.axios<T>({ url: '/hyperparams/addHyperParams', method: 'post', data }) },
  updateHyperParams<T>(data?: any) { return RequestHttp.axios<T>({ url: '/hyperparams/updateHyperParams', method: 'put', data }) },
  deleteHyperParamsById<T>(data?: any) { return RequestHttp.axios<T>({ url: '/hyperparams/deleteHyperParamsById', method: 'post', params: data }) },
  findTrainResultById<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphertrainparams/findTrainResultById', method: 'get', params: data }) },
  findKeyValueOfIdAndName<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphertrainparams/findKeyValueOfIdAndName', method: 'get', params: data }) },
}
