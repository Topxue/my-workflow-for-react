import styled from "styled-components";

export const ProcessDesignContainer = styled.div`
  width: 98%;
  margin: 10px;
  box-sizing: border-box;
  background: #FFFFFF;
  display: ${props => props.currentTab === 3 ? 'block' : 'none'};
`

export const CanvasContainer = styled.div`
  height: 100%;

  .djs-container svg, .djs-drag-active.hover.new-parent {
    background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMGUwZTAiIG9wYWNpdHk9Ii4yIi8+PHBhdGggZD0iTTQwIDBIMHY0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlMGUwIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+");
  }
`
export const PropertiesPanel = styled.div`
  position: absolute;
  right: 16px;
  top: 11px;
  width: 404px;
  background: #FFFFFF;
  height: calc(100vh - 75px);

  .ant-collapse {
    background-color: #FFFFFF;
    border: none;
  }
  .ant-form-inline .ant-form-item {
    width: 100%;
    margin-bottom: 10px;
  }
  .ant-form-item-label {
    width: 45px;
  }
`
