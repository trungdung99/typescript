import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from '../components/ShowInfo'
import Item from '../components/Item'

function App() {

  const [count, setCount] = useState(0);
  const [products, setProduct] = useState([
    [
      {id: 1, name: "Sản phẩm 1"},
      {id: 2, name: "Sản phẩm 2"},
      {id: 3, name: "Sản phẩm 3"}
    ]
  ])
  const removeItem = (id) => {
    const newsProduct = products.filter(item => item.id !== id);
    setProduct(newsProduct);
  }
  return (
    <div className="App">
      {products.map((item, index) =>  <div>{item.name}
      <button onClick={() => removeItem(item.id)}>Remove</button></div>
      )}
      <ShowInfo name="Dung" />
    </div>
  )
}

export default App
