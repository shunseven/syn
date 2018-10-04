import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}


export default function (AtComponent) {
  return class AtTag extends AtComponent {
    constructor () {
      super(...arguments)
      this.state = {}
    }
    render () {
      return <View>23232323</View>
    }
  }
}

