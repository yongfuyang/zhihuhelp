import TypePin from '~/src/type/namespace/pin'
import Base from '~/src/public/template/react/base'
import _ from 'lodash'
import moment from 'moment'
import DATE_FORMAT from '~/src/constant/date_format'

class Pin extends Base {
  static render(record: TypePin.Record) {
    // 都是同一个
    let title = Base.getPinTitle(record)
    let pinElement = this.generateSinglePinElement(record)
    let pageElement = this.generatePageElement(title, [pinElement])
    return this.renderToString(pageElement)
  }

  /**
   * 将所有文章渲染到同一个html中
   *
   * @param title 最后生成html的标题
   * @param pinRecordList 文章列表
   */
  static renderInSinglePage(title: string, pinRecordList: TypePin.Record[]) {
    let pinElementList = []
    for (let pinRecord of pinRecordList) {
      let pinElement = this.generateSinglePinElement(pinRecord)
      pinElementList.push(pinElement)
    }
    let pageElement = this.generatePageElement(title, pinElementList)
    return this.renderToString(pageElement)
  }
}

export default Pin
