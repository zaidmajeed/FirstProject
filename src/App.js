import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState, useEffect } from 'react';
import { cleanup } from '@testing-library/react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) =>{
    console.log("I 'm ondelete of todo", todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (title, disc)=>{
    console.log("I'm adding this Todo", title, disc)
    let sno;
    if(todos.length==0){
      sno = 0;
    }
    else{
      sno = todos [todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      disc: disc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
   
    
    
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Header title="My Todos List" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
