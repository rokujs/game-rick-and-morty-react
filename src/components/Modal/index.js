import React from 'react'
import ReactDOM from 'react-dom'

function Modal ({ children }) {
  return ReactDOM.createPortal(
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="box">
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

export default Modal
