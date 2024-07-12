import { defineFakeRoute } from 'vite-plugin-fake-server/client'
import Mock from 'mockjs'

export default defineFakeRoute([
  {
    url: '/ciphergenerateparams/findCipherGenerateParamsByCondition',
    method: 'get',
    response: () => {
      return {
        error: '',
        status: 1,
        data: Mock.mock({
          'data|10': [{
            'id|1-1000': 1, // 生成 1 到 1000 之间的随机整数作为 id
            'generateParamName': '@word', // 生成一个随机单词作为 generateParamName
            'outDir': '/tmp/dataset/cipher', // 固定的 outDir
            'trainName': 'train-@word', // 固定的 trainName
            'testName': 'data-@word', // 固定的 testName
            'vocabFileName': 'vocab.txt', // 固定的 vocabFileName
            'corpus': 'custom', // 固定的 corpus
            'cipher': 'shift', // 固定的 cipher
            'separateDomains|0-1': 0, // 生成 0 或 1
            'percentageTraining|0.5-1': 0.8, // 生成 0.5 到 1 之间的随机小数作为 percentageTraining
            'vocabSize|100-2000': 1000, // 生成 100 到 2000 之间的随机整数作为 vocabSize
            'plainVocab': '@word', // 生成一个随机单词作为 plainVocab
            'cipherVocab': '@word', // 生成一个随机单词作为 cipherVocab
            'distribution': '@word', // 生成一个随机单词作为 distribution
            'sampleLength|10-100': 20, // 生成 10 到 100 之间的随机整数作为 sampleLength
            'vigenereKey': '@word', // 生成一个随机单词作为 vigenereKey
            'charLevel|0-1': 0, // 生成 0 或 1
            'shiftAmount|1-5': 3, // 生成 1 到 5 之间的随机整数作为 shiftAmount
            'numTrain|10000-100000': 50000, // 生成 10000 到 100000 之间的随机整数作为 numTrain
            'numTest|1000-10000': 5000, // 生成 1000 到 10000 之间的随机整数作为 numTest
            'numShards|1-10': 1, // 生成 1 到 10 之间的随机整数作为 numShards
            'insertUnk|0-1': 0, // 生成 0 或 1
            'createName': '@name', // 生成一个随机人名作为 createName
            'createUsername': '@word', // 生成一个随机单词作为 createUsername
          }],
        }),
      }
    },
  },
])
