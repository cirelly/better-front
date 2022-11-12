import React from 'react'

const TextAreaInput = ({field,children, ...props}) => {
  return (
    <textarea className='c-commonInput' rows='20'{...field} {...props}>
    {children}
    </textarea>
  )
}

export default TextAreaInput