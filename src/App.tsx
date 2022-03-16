import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Showinfo from './components/Showinfo'
import { ProductType } from './types/products';
import axios from 'axios'
import { list, remove } from './api/product';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layout/WebsiteLayout';
import Home from './pages/Home';
import Product from './pages/Product';
import AdminLayout from './pages/layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import ManagerProduct from './pages/ManagerProduct';


function App() {
  // const [info, setInfo] = useState<ProductType>({
  //   name: "Dung",
  //   age: 22
  // });

  const [products, setProducts] = useState<ProductType[]>([]);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      
      setProducts(data);
    }
    getProducts();
  },[])
  const removeItem = async (id: number) => {
    //xoa tren API
    const {data} = await remove(id);
    //reRender
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return (
    <div className="App">
      {/* <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th></th>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => removeItem(item._id)}>Remove</button>
              </td>
            </tr>
          })}
        </tbody>
      </table> */}
      <header>
        <ul>
          <li><NavLink to="/">Home page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/admin/dashboard">Admin Dashboard</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="product" element={<h1>Product Page</h1>} />
          <Route path="about" element={<h1>About Page</h1>} /> */}
          <Route path='/' element={<WebsiteLayout/>}>
            <Route index element = {<Home />} />
            <Route path='product' element={<Product/>} />
          </Route>
          <Route path='admin' element={<AdminLayout/>}>
            <Route index element = {<Navigate to="dashboard" />} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='product' element={<ManagerProduct/>} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
