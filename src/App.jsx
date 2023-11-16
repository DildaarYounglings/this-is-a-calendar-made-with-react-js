import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todoListContextData } from './context/TodoListContextWrapper'
import { Calendar } from './components/Calendar'
function App() {
  const {todoList,todoItem,addItemToList,removeItemFromList,inputText,changeInputText} = todoListContextData();
  return (
    <>
      <Calendar/>
      <div style={{width:"max-content",height:"fit-content"}}>
        <h1>Todo List</h1>
        <form style={{backgroundColor:"white",width:"30vw",height:"fit-content",borderRadius:"20px",border:"1px solid grey"}}>
          {todoList.map((item,index)=> <article key={index}>
            <span>{" "}{item.task}{" "}</span>
            <button type='button' onClick={() => removeItemFromList(item)}>Delete</button>
          </article>)}
          <div style={{display:"flex",gap:"2rem",alignContent:"center",alignItems:"center",justifyContent:"center",justifyItems:"center"}}>
            <input type="text" style={{height:"1.5rem"}} value={inputText} onChange={(e) => changeInputText(e.target.value)} />
            <button type="button" onClick={() => addItemToList(todoItem)}> add new task</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default App