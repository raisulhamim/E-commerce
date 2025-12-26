import React from 'react'
import { Children } from 'react'

const Flex = ({className}) => {
  return (
    <div className={`flex ${className}`}>{Children}</div>
  )
}

export default Flex