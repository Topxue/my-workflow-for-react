import {CanvasContainer, ProcessDesignContainer} from '@/style/process-design'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

import React, {Component, createRef} from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'

// import {getBusinessObject} from 'bpmn-js/lib/util/ModelUtil'
// import propertiesPanelModule from 'bpmn-js-properties-panel'

// import CmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper'

/**
 * flowable: flowableModdleDescriptor
 * flowable
 */
import flowableModdleDescriptor from '@/utils/flowable/resources/flowable.json'

/**
 * bpmn: flowableModdleDescriptor
 * activiti
 */

// import flowableModdleDescriptor from 'bpmn-moddle/resources/bpmn/json/bpmn.json'

// import {executeCommand} from '@/utils'

import bpmnXmlStr from '@/config/bpmn'
import {Provider} from '@/utils/context'
import Translate from '@/utils/translate'
import customizePalette from '@/utils/palette'


import PropertiesPanels from '@/components/properties-panel'


class ProcessDesign extends Component {
  constructor(props) {
    super(props)

    this.state = {
      element: {},
      bpmnModeler: {}
    }
    this.canvas = createRef()
  }

  componentDidMount() {
    // 初始化Bpmn
    this.initBpmn()
    // 初始化流程设计
    this.initCreateDiagram()
    // 处理Modeler事件
    this.handleModeler()
  }

  initBpmn() {
    // 汉化
    const customTranslateModule = {
      translate: ['value', Translate]
    }

    this.bpmnModeler = new BpmnModeler({
      container: this.canvas.current,
      additionalModules: [
        customTranslateModule,
        // propertiesPanelModule
      ],
      moddleExtensions: {
        flowable: flowableModdleDescriptor
      }
    })
  }

  initCreateDiagram() {
    this.bpmnModeler.importXML(bpmnXmlStr())
    // 自定义Palette
    customizePalette(this.canvas.current)
  }

  handleModeler() {
    // 监听节点变化
    this.bpmnModeler.on('element.changed', node => {
      // console.log(event, 'handle Modeler...')
      this.setState(() => ({element: node.element}))
    })


    this.bpmnModeler.on('element.click', node => {
      this.setState(() => ({element: node.element}))
      // console.log(node.element)
      // const updateProperties = CmdHelper.updateProperties(node.element, {
      //   name: 'Joker...'
      // })
      // executeCommand(this.bpmnModeler, updateProperties)
    })
  }

  getContext() {
    const {element} = this.state
    return {
      element,
      bpmnModeler: this.bpmnModeler
    }
  }

  render() {
    const {currentTab} = this.props
    const {element} = this.state

    return (
      <Provider value={this.getContext()}>
        <ProcessDesignContainer currentTab={currentTab}>
          <CanvasContainer className="canvas" ref={this.canvas}></CanvasContainer>

          <PropertiesPanels element={element}></PropertiesPanels>
        </ProcessDesignContainer>
      </Provider>
    )
  }
}


export default ProcessDesign
