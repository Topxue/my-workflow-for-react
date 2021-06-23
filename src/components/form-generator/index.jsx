import React, {useRef} from 'react'
import Generator from 'fr-generator'
import {FromGeneratorContainer} from "../../style/fr-generator";

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '简单输入框',
      type: 'string',
    },
  },
}


const FormGenerator = ({currentTab}) => {
  const ref = useRef()

  const goToFrPlayground = () => {
    console.log('test...')
  }

  const onSchemaChange = (schema) => {
    console.log(schema, '1231')
  }

  return (
    <FromGeneratorContainer currentTab={currentTab}>
      <Generator
        ref={ref}
        extraButtons={[{text: '去playground验证', onClick: goToFrPlayground}]}
        defaultValue={defaultValue}
        onSchemaChange={schema => onSchemaChange(schema)}/>
    </FromGeneratorContainer>
  )
}


export default FormGenerator
