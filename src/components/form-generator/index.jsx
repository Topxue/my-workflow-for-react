import React from 'react'
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

// const extraButtons = {
//   text: '測試'
// }


const FormGenerator = () => {
  const onSchemaChange = (event) => {
    console.log(event, '1231')
  }

  return (
    <FromGeneratorContainer>
      <Generator defaultValue={defaultValue} onSchemaChange={onSchemaChange}/>
    </FromGeneratorContainer>
  )
}


export default FormGenerator
