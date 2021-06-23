import {CanvasContainer, ProcessDesignContainer} from '../../style/process-design'
import 'bpmn-js/dist/assets/diagram-js.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css'
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css'

import React, {Component, createRef} from 'react'
import BpmnModeler from 'bpmn-js/lib/Modeler'

import propertiesPanelModule from 'bpmn-js-properties-panel'

// import flowableModdleDescriptor from '../../bpmn/flowable.json'

import bpmnXmlStr from '../../config/bpmn'
import Translate from '../../utils/translate'


class ProcessDesign extends Component {
  constructor(props) {
    super(props)

    this.bpmnModeler = {}
    this.canvas = createRef()
  }

  componentDidMount() {
    // 初始化Bpmn
    this.initBpmn()
    // 初始化流程设计
    this.initCreateDiagram()
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
        propertiesPanelModule
      ],
      // moddleExtensions: {
      //   flowable: flowableModdleDescriptor
      // }
    })
  }

  async initCreateDiagram() {
    const XML = bpmnXmlStr()
    const data = await this.bpmnModeler.importXML(XML)
    console.log(data)
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
