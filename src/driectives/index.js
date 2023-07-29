export const dialogDrag = {
  bind (el) {
    // 获取拖拽内容头部
    const dialogHeaderEl = el.querySelector('.el-dialog__header');
    // 获取拖拽内容整体 这个rrc-dialog是我自己封装的组件 如果使用element的组件应写成.el-dialog
    const dragDom = el.querySelector('.el-dialog');
    dialogHeaderEl.style.cssText += ';cursor:move;'
    dragDom.style.cssText += ';top:0px;'

    const sty = (function () {
      return (dom, attr) => getComputedStyle(dom, false)[attr]
    })()
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);


    // 鼠标按下事件
    dialogHeaderEl.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离 (鼠标点击位置距离可视窗口的距离)
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;

      const screenWidth = document.body.clientWidth // body当前宽度
      const screenHeight = document.documentElement.clientHeight // 可见区域高度(应为body高度，可某些环境下无法获取)

      const dragDomWidth = dragDom.offsetWidth // 对话框宽度
      const dragDomheight = dragDom.offsetHeight
      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomheight

      // 获取到的值带px 正则匹配替换
      let styL = sty(dragDom, 'left')
      let styT = sty(dragDom, 'top')

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/%/g, '') / 100)
        styT = +document.body.clientHeight * (+styT.replace(/%/g, '') / 100)
      } else {
        styL = +styL.replace(/\px/g, '')
        styT = +styT.replace(/\px/g, '')

        // 鼠标拖拽事件
        document.onmousemove = function (e) {
          // 通过事件委托，计算移动的距离 （开始拖拽至结束拖拽的距离）
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          // 边界处理
          if (-(left) > minDragDomLeft) {
            left = -(minDragDomLeft)
          } else if (left > maxDragDomLeft) {
            left = maxDragDomLeft
          }

          if (-(top) > minDragDomTop) {
            top = -(minDragDomTop)
          } else if (top > maxDragDomTop) {
            top = maxDragDomTop
          }

          // 移动当前元素
          dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`
          // 边界值判定 注意clientWidth scrollWidth区别 要减去之前的top left值
          // dragDom.offsetParent表示弹窗阴影部分
          // 移动当前元素
          dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`

          //将此时的位置传出去
          //binding.value({x:e.pageX,y:e.pageY})
        };

        document.onmouseup = function (e) {
          e.preventDefault()
          document.onmousemove = null;
          document.onmouseup = null;
        };
      }
    }
  }
}

export default {
  install (Vue, optiosn) {
    Vue.directive('dialog-drag', dialogDrag)
    console.log(optiosn)
  }
}