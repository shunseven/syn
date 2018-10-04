import Taro from '@tarojs/taro'

Taro.initPxTransform({ designWidth: 750 })

export { default as AtTag } from './components/tag'


/* 私有的组件  */
export { default as AtComponent } from './common/component'
