import React, {useEffect, useState} from 'react'

import {Form, Input, Select, Divider, message} from 'antd'
import {PlusOutlined, CloseCircleOutlined, CheckCircleOutlined} from '@ant-design/icons'

import {
  AddGroupButton,
  AddGroupContainer,
  BaseSettingContainer,
  FormNameWarpper,
  GroupButtonContainer,
  GroupInputContainer,
  SelectAppIconContainer
} from '@/style/BaseSetting'

import {mathId} from "@/utils"


const {Option} = Select

const ERROR_OK = 201


function BaseSetting({currentTab}) {
  const [group, setGroup] = useState('')
  const [items, setItems] = useState([])
  const [groupIpt, setGroupIpt] = useState(false)

  const addItem = () => setGroupIpt(true)
  const handleClose = () => {
    setGroupIpt(false)
    setGroup('')
  }
  const onNameChange = (event) => setGroup(event.target.value)

  const handleAddGroup = async () => {
    if (!group) return

    setItems([...items, {
      groupName: group,
      id: mathId()
    }])

    const {status} = await window.$httpRequest.post('/groups', {
      groupName: group,
      id: mathId()
    })

    if (status !== ERROR_OK) {
      return message.error('分组添加失败')
    }

    setGroup('')
  }

  useEffect(() => {
    window.$httpRequest.get('/groups').then(res => {
      setItems(res.data)
      console.log(res.data)
    })
  }, [])

  const GroupInputContainerRender = () => (<GroupInputContainer>
    <Input value={group} onChange={onNameChange} size={"middle"} placeholder="请输入分组名称"/>
    <GroupButtonContainer>
      <CloseCircleOutlined onClick={handleClose}/>
      <CheckCircleOutlined onClick={handleAddGroup}/>
    </GroupButtonContainer>
  </GroupInputContainer>)

  const AddGroupButtonRender = () => (<AddGroupButton onClick={addItem}>
    <PlusOutlined/>
    <div>新建分组</div>
  </AddGroupButton>)


  const dropdownRender = (menu) => {
    return (
      <div>
        {menu}
        <Divider style={{margin: '4px 0'}}/>
        <AddGroupContainer>
          {
            groupIpt ? GroupInputContainerRender() : AddGroupButtonRender()
          }
        </AddGroupContainer>
      </div>
    )
  }

  return (
    <BaseSettingContainer currentTab={currentTab}>
      <Form
        layout={'vertical'}
        name="basic"
        initialValues={{remember: true}}
      >

        <SelectAppIconContainer>
          <img src="https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png" alt=""/>
        </SelectAppIconContainer>

        <FormNameWarpper>
          <Form.Item
            label="表单名称"
            name="name"
            rules={[{required: true, message: '请输入表单名称'}]}
          >
            <Input placeholder="请输入"/>
          </Form.Item>
        </FormNameWarpper>

        <Form.Item
          label="所在分组"
          name="group"
          rules={[{required: true, message: '请选择分组'}]}
        >
          <Select placeholder="请选择分组" dropdownRender={dropdownRender}>
            {items.map(item => (
              <Option key={item.id}>{item.groupName}</Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </BaseSettingContainer>
  )
}


export default BaseSetting
