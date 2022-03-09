import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// const myName = "Dung";
// const myAge = 22;
// const status = true;

// const showInfo = (props) => {
//   return <p>Thông tin user {props.name}</p>
// }

// const ShowInfo = (props) => {
//   return <p>Thông tin user {props.name}</p>
// }

ReactDOM.render(<div>
  {/* <h1>Hello {myName}</h1>
  <p>{myAge}</p>
  <p>{status ? "Doc than":"Da ket hon"}</p>
  {showInfo({name: "Dung"})}
  <ShowInfo name = "Dung" /> */}
  <App />
</div>,  document.getElementById('root')

 
)
