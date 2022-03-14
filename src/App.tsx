import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Showinfo from './components/Showinfo'
import { ProductType } from './types/products';


function App() {
  const [info, setInfo] = useState<ProductType>({
    name: "Dung",
    age: 22
  });
  return (
    <div className="App">
      <Showinfo info ={info}/>
    </div>
  )
}

export default App
