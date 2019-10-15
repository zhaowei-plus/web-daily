import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

import './index.css'

/**
 * 手机预览弹窗框
 *  @param {object} props
 *  @prop {string}  title 预览标题，有则展示，没有不展示
 *  @prop {ReactNode} children 显示内容：iframe gif sms
 *  @prop {function} onCancel 关闭时调用的方法，卸载相关节点
 * */
export default (props) => {
  const {title, children, onCancel} = props
  const [node, setNode] = useState(null)

  useEffect(() => {
    const domNode = document.createElement('div')
    document.body.appendChild(domNode)
    setNode(domNode)

    // 配置支持esc退出
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.removeChild(domNode)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onCancel()
    }
  }

  if (node) {
    return ReactDOM.createPortal(
      <div className="phone-preview">
        <div className="phone">
          <i className="icon icon-close" onClick={onCancel} />
          {
            !!title && (
              <div className="phone__title">{title}</div>
            )
          }
          <div className="phone__content">
            {children}
          </div>
        </div>
      </div>,
      node,
    )
  }

  return null
}