/**
 * @desc 自定义Palette样式
 * @param canvas 容器
 */

import paletteData from '../config/paletteData'

const customizePalette = (canvas) => {
  try {
    const djsPalette = canvas.children[0].children[1].children[4];
    const djsPalStyle = {
      width: "130px",
      padding: "5px",
      background: "white",
      left: "20px",
      borderRadius: 0
    };
    for (let key in djsPalStyle) {
      djsPalette.style[key] = djsPalStyle[key];
    }
    const palette = djsPalette.children[0];
    const allGroups = palette.children;
    allGroups[0].style["display"] = "none";
    // 修改控件样式
    for (let gKey in allGroups) {
      const group = allGroups[gKey];
      for (let cKey in group.children) {
        const control = group.children[cKey];
        const controlStyle = {
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          padding: "5px"
        };
        if (
          control.className &&
          control.dataset &&
          control.className.indexOf("entry") !== -1
        ) {
          const controlProps = paletteData(
            control.dataset.action
          );
          control.innerHTML = `<div style='font-size: 14px;font-weight:500;margin-left:15px;'>${controlProps["title"]
          }</div>`;
          if (controlProps['tooltip']) {
            control.title = controlProps['tooltip'];
          }
          for (let csKey in controlStyle) {
            control.style[csKey] = controlStyle[csKey];
          }
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
}

export default customizePalette
