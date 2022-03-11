import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Showinfo from './Showinfo'

type TProduct = {
  id: number,
  name: string,
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [product, setProduct] = useState<TProduct[]>([{id:1, name: "Pham Trung Dung"}])

  return (
    <div className="App">
      <Showinfo name="Pham Trung Dung" />
    </div>
  )
}

export default App
