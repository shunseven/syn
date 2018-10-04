import Taro from '@tarojs/taro'

import './index.scss'
import { AtTag } from '../../../../dist/index'

@AtTag
export default class TagPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      tagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
    }
  }
}
