import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from '../components/ShowInfo'
import Item from '../components/Item'

function App() {
  const products = [
    {id: 1, name: "Sản phẩm 1"},
    {id: 2, name: "Sản phẩm 2"},
    {id: 3, name: "Sản phẩm 3"}
  ]

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      Count: {count} <button onClick={() => setCount(count + 1)}>Click</button>
      {products.map((index ,item) => <Item key={index} data={item} />)}
      <ShowInfo name="Dung" />
    </div>
  )
}

export default App
