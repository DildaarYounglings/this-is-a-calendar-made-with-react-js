import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TodoListContextWrapper } from './context/TodoListContextWrapper.jsx'
import { Calendar } from './components/Calendar.jsx'
import { HexColorGenerator } from './components/HexColorGenerator.jsx'
import { ExpenseTracker } from './components/ExpenseTracker.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoListContextWrapper>
      
       <App />
    </TodoListContextWrapper>
  </React.StrictMode>
)
/* <HexColorGenerator/> <Calendar/> <ExpenseTracker/>*/