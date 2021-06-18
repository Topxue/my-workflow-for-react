import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 20px 0 20px;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 rgb(17 31 44 / 4%);
`

export const HeaderWarperLeft = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderNavBack = styled.div`
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 12px;
  border-radius: 100%;
  border: 1px solid rgba(25, 31, 37, 0.18);
  transition: 0.3s all;
  cursor: pointer;
  font-size: 14px;
`

export const HeaderNavIcon = styled.div`
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 10px;
  overflow: hidden;

  .icon-img {
    width: 100%;
  }
`

export const HeaderAppNameWarper = styled.span`
  display: inline-block;
  max-width: 240px;
  font-family: PingFangSC-Medium;
  font-size: 15px;
  color: #111f2c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const HeaderWarperCenter = styled.div`
  width: 600px;
  text-align: center;
  position: relative;
`

export const Ghostbar = styled.div`
  osition: absolute;
  width: 150px;
  height: 100%;
  left: 0;
  background: #1583f2;

  &::after {
    content: '';
    position: absolute;
    top: 52px;
    left: 25%;
    margin-left: -12px;
    border: 1px solid #0089ff;
    width: 24px;
    transform: translateX(${props => props.ghostX});
    -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`

export const FdNavItem = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  line-height: 54px;
  width: 150px;
  text-align: center;
  white-space: nowrap;
`
export const AppMain = styled.div`
  position: absolute;
  left: 0;
  top: 54px;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: #f2f4f5;
  box-sizing: border-box;
`
