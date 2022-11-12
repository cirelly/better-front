import React from 'react'

const CardWrapper = ({Form, children}) => {
  return (
    <div className={` c-card ${Form && 'c-card--form'}`}>
        {children}
    </div>
  )
}

export default CardWrapper;