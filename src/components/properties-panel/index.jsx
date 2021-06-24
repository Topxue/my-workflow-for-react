import {PropertiesPanel} from '@/style/process-design'
import {Collapse} from 'antd'
import {SettingOutlined} from '@ant-design/icons'


import React, {Component} from 'react'
import {START_EVENT} from '@/config'

import BaseSetting from '@/components/properties-panel/base-setting'

const {Panel} = Collapse


const genExtra = () => (
  <SettingOutlined
    onClick={event => event.stopPropagation()}
  />
)

class PropertiesPanels extends Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props)

    this.state = {
      element: {}
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (props.element !== state.element) {
  //     return {
  //       element: props.element,
  //     }
  //   }
  //
  //   return null
  // }

  renderPropertiesPanel(element) {
    return {
      [START_EVENT]: (
        <>
          <Panel header="基本设置" key="1" extra={genExtra()}>
            <BaseSetting element={element}/>
          </Panel>
          <Panel header="权限设置" key="2" extra={genExtra()}>
            权限设置
          </Panel>
        </>
      )
    }
  }

  render() {
    const {element} = this.props
    return (
      <PropertiesPanel>
        <Collapse accordion defaultActiveKey={[]}>
          {this.renderPropertiesPanel(element)[element.type] || null}
        </Collapse>
      </PropertiesPanel>
    )
  }
}

export default PropertiesPanels
