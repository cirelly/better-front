import React from 'react'

const CommonInput = ({field, ...props}) => {
  return (
    <input className='c-commonInput' style={{height: '50px'}} {...field} {...props} />
  )
}

export default CommonInput