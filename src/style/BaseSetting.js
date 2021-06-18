import styled from "styled-components"

export const BaseSettingContainer = styled.div`
  width: 660px;
  padding: 24px;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 12px;
  right: 0;
  bottom: 12px;
  overflow: auto;
`

export const FormNameWarpper = styled.div`
  width: 89%;
  margin-left: 65px;
`

export const SelectAppIconContainer = styled.div`
  position: absolute;
  top: 37px;
  min-width: 48px;
  min-height: 48px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`

export const AddGroupContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 8px;
`

export const GroupInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
export const GroupButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  cursor: pointer;
  span {
    padding-left: 10px;
    color: #088DFF;
  }
`

export const AddGroupButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  div{ 
    padding-left: 5px;
  }
`
