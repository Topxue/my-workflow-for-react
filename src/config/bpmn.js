/**
 * @desc 初始化XMl
 * @returns {string}
 */

const bpmnXml = () => {
  let roundTimer = Math.round(new Date())
  return `
  <?xml version="1.0" encoding="UTF-8"?>
    <bpmn2:definitions 
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
    xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" 
    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
    xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" 
    xmlns:flowable="http://flowable.org/bpmn" id="sample-diagram" 
    targetNamespace="http://www.flowable.org/processdef" 
    xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
      <bpmn2:process id="Process_${roundTimer}" name="" isExecutable="true">
        <bpmn2:startEvent id="StartEvent_1602506550239" name="开始" flowable:initiator="applyUserId" />
      </bpmn2:process>
      <bpmndi:BPMNDiagram id="BPMNDiagram_1">
        <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="">
          <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1602506550239">
            <dc:Bounds x="209" y="283" width="36" height="36" />
            <bpmndi:BPMNLabel>
              <dc:Bounds x="217" y="326" width="22" height="14" />
            </bpmndi:BPMNLabel>
          </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
      </bpmndi:BPMNDiagram>
    </bpmn2:definitions>
  `
}

export default bpmnXml
