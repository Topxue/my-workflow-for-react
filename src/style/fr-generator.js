import styled from 'styled-components'

export const FromGeneratorContainer = styled.div`
  width: 98%;
  margin: 10px;
  height: calc(100vh - 75px);
  background: #FFFFFF;
  display: ${props => props.currentTab === 2 ? 'block' : 'none'};
`
