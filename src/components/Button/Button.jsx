import React from 'react'

const Button = ({textButton,deleteColor, disabled, children, ...props}) => {
  return (
    <button {...props} disabled={disabled} className={`${textButton ? `c-textButton${deleteColor ? '--delete': ''}` : 'c-button'}`}>{children}</button>
  )
}

export default Button;