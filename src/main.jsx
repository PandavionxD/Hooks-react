// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
// import { UseRef } from './04.useRef/UseRef'
// import { TodoApp } from './05.useReduce/TodoApp'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01.useState/CounterApp'
// import CounterWithApp from './01.useState/CounterWithApp'
// import { SimpleForm } from './02.useEffect/SimpleForm'
// import { FormWithCustomHook } from './02.useEffect/FormWithCustomHook'
// import { CustomHook } from './03.usehookfetch/CustomHook'
import { MainApp } from './06.useContext/MainApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
)
