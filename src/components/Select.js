import React from 'react'

export const Select = ({ children, ...props }) => {
  return (
    <>
      <select {...props}>{children}</select>
    </>
  )
}

export const Option = ({ children, ...props }) => {
  return <option {...props}>{children}</option>
}
