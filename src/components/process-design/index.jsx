import {CanvasContainer, ProcessDesignContainer} from '../../style/process-design'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

import React, {Component, createRef} from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'

// import propertiesPanelModule from 'bpmn-js-properties-panel'

/**
 * flowable: flowableModdleDescriptor
 * flowable
 */
import flowableModdleDescriptor from '../../utils/flowable/resources/flowable.json'

/**
 *
 * activiti
 */
// import flowableModdleDescriptor from 'bpmn-moddle/resources/bpmn/json/bpmn.json'

import bpmnXmlStr from '../../config/bpmn'
import Translate from '../../utils/translate'
import customizePalette from '../../utils/palette'

class ProcessDesign extends Component {
  constructor(props) {
    super(props)

    this.element = {}
    this.bpmnModeler = {}
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
    const XML = bpmnXmlStr()

    this.bpmnModeler.importXML(XML)

    customizePalette(this.canvas.current)
  }

  handleModeler() {
    // 监听节点变化
    this.bpmnModeler.on('selection.changed', event => {
      console.log(event, 'handle Modeler...')
    })
  }


  render() {
    const {currentTab} = this.props
    return (
      <ProcessDesignContainer currentTab={currentTab}>
        <CanvasContainer className="canvas" ref={this.canvas}></CanvasContainer>
      </ProcessDesignContainer>
    )
  }
}


export default ProcessDesign
