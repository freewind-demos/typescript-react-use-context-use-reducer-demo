import React from 'react'
import ReactDOM from 'react-dom'
import Outer from "./Outer";
import {WithStore} from "./Store";

function App() {
  return <WithStore initStore={{message: 'default'}}><Outer/></WithStore>
}

ReactDOM.render(
  <App/>,
  document.body
)
