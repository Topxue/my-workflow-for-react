import {useState} from 'react'

import {
  FdNavItem,
  Ghostbar,
  HeaderAppNameWarper,
  HeaderNavBack,
  HeaderNavIcon,
  HeaderWarperCenter,
  HeaderWarperLeft,
  HeaderWrapper
} from '../style/App'

import {LeftOutlined} from '@ant-design/icons'

import {DEFAULT_GOT_X, Tabs} from '../config'
import {Button} from "antd";

function App() {
  const [ghostX, setGhostX] = useState(0)

  const handleChangeTab = (currentIndex) => {
    const ghostX = DEFAULT_GOT_X * currentIndex + 'px'
    setGhostX(ghostX)
  }

  return (
    <div className="App">
      <HeaderWrapper>
        <HeaderWarperLeft>
          <HeaderNavBack>
            <LeftOutlined/>
          </HeaderNavBack>
          <HeaderNavIcon>
            <img className="icon-img" src="https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png" alt=""/>
          </HeaderNavIcon>
          <HeaderAppNameWarper>App Name...</HeaderAppNameWarper>
        </HeaderWarperLeft>

        <HeaderWarperCenter>
          <Ghostbar ghostX={ghostX}></Ghostbar>
          {
            Tabs.map((item, index) => {
              return <FdNavItem key={item.id} onClick={handleChangeTab.bind(this, index)}>{item.tab}</FdNavItem>
            })
          }
        </HeaderWarperCenter>

        <Button type="primary">Publish</Button>
      </HeaderWrapper>
    </div>
  );
}

export default App;
