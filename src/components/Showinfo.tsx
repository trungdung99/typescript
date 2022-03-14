import React from 'react'
import { ProductType } from '../types/products'

type ShowInfoProps = {
  info: ProductType
}
const Showinfo = (props: ShowInfoProps) => {
  return (
    <div>
      {props.info.name}
    </div>
  )
}

export default Showinfo