import React, { Children, createContext, useContext, useRef, useState } from 'react'

const TodoListContext = createContext();
export const todoListContextData = () => useContext(TodoListContext);



export const TodoListContextWrapper = ({children}) => {
  const dialogElRef = useRef();
  const [inputText,setInputText] = useState("")
  let todoItem = {task:inputText};
  const changeInputText = (text) => {
    setInputText(text)
  }
  const [todoList,setTodoList] = useState([{task:"create the Todo app in React js",isCompleted:false}]);
  const addItemToList = (item) => {
    setInputText("");
    setTodoList([...todoList,item]);
  }
  const removeItemFromList = (item) => {
    let copy = [...todoList].filter((todo) => todo.task !== item.task)
    setTodoList(copy)
  }
  return (
    <TodoListContext.Provider value={{todoList,todoItem,addItemToList,removeItemFromList,inputText,changeInputText,dialogElRef}}>
      {children}
    </TodoListContext.Provider>
  )
}

