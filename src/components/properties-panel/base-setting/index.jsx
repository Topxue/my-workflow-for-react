import React, {useEffect, useState} from 'react'
import {Form, Input} from 'antd'

import {Consumer} from '@/utils/context'
import CmdHelper from 'bpmn-js-properties-panel/lib/helper/CmdHelper'
import {executeCommand} from "@/utils"

const BaseSetting = ({element}) => {
  const [fields, setFields] = useState([
    {
      name: ['id'],
      value: '',
    },
  ])

  function onChange(context, allFields) {
    console.log(allFields);
    // const updateProperties = CmdHelper.updateProperties(element, {
    //   name: allFields.value
    // })
    // executeCommand(context.bpmnModeler, updateProperties)
  }

  useEffect(() => {
    const bo = element.businessObject
    setFields([{name: ['id'], value: bo.id}])

  }, [element])

  return (
    <Consumer>
      {
        context => (
          <Form
            layout={"inline"}
            fields={fields}
            onFieldsChange={(_, allFields) => {
              onChange(context, allFields);
            }}
          >
            <Form.Item name="id" label="ID">
              <Input/>
            </Form.Item>
            <Form.Item name="name" label="名称">
              <Input/>
            </Form.Item>
          </Form>
        )
      }
    </Consumer>
  );
}

export default BaseSetting
