import RequestHttp from '@/api/request'

export default {
  findCipherGenerateParamsByCondition<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphergenerateparams/findCipherGenerateParamsByCondition', method: 'get', params: data }) },
  updateCipherGenerateParams<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphergenerateparams/updateCipherGenerateParams', method: 'put', data }) },
  addCipherGenerateParams<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphergenerateparams/addCipherGenerateParams', method: 'post', data }) },
  findDataSetByCondition<T>(data?: any) { return RequestHttp.axios<T>({ url: '/dataset/findDataSetByCondition', method: 'get', params: data }) },
  addDataSet<T>(data?: any) { return RequestHttp.axios<T>({ url: '/dataset/addDataSet', method: 'post', data }) },
  updateDataSet<T>(data?: any) { return RequestHttp.axios<T>({ url: '/dataset/updateDataSet', method: 'put', data }) },
  deleteDataSetById<T>(data?: any) { return RequestHttp.axios<T>({ url: '/dataset/deleteDataSetById', method: 'delete', data }) },
  findDataSetDetailByCondition<T>(data?: any) { return RequestHttp.axios<T>({ url: '/datasetdetail/findDataSetDetailByCondition', method: 'get', params: data }) },
  findKeyValueOfIdAndName<T>(data?: any) { return RequestHttp.axios<T>({ url: '/ciphergenerateparams/findKeyValueOfIdAndName', method: 'get', params: data }) },
}
