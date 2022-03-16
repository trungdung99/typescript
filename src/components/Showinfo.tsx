import React from 'react'
import { ProductType } from '../types/products'

type ShowInfoProps = {
  info: ProductType
}
const Showinfo = (props: ShowInfoProps) => {
  return (
    <div>
      <h1 >{props.info.name}</h1>
      <br />
      <h1 >{props.info.age}</h1>
    </div>
  )
}

export default Showinfo