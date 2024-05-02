import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandle = (e) => {
    setTodo(e.target.value);
  };
  const addHandle = () => {
    setTodos([...todos, {id:uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos)
  };
  const checkHandle=(e)=>{
         let id = e.target.name
         let index=todos.findIndex(item=>{
          return item.id===id
         })
         let newTodos=[...todos];
         newTodos[index].isCompleted = !newTodos[index].isCompleted;
         setTodos(newTodos)
  }
  const editHandle = () => {
   
  };
  const delHandle = (e,id) => {
    let newTodos=todos.filter(item=>{
      return item.id!==id
     })
     setTodos(newTodos)
  };
  return (
    <>
      <Navbar />
      <div className="todos bg-violet-50 ml-5 mr-5 p-5 my-5 rounded-xl">
        
        <h1 className="font-bold underline my-1">Add a todo</h1>
        <input
          type="text"
          className=" w-4/6 py-2 rounded-md hover:cursor-text px-2"
          name="todo"
          value={todo}
          onChange={changeHandle}
        />
        <button
          className="btn-lg bg-violet-400 hover:bg-violet-800 rounded-md px-4 py-2 text-white font-bold mx-5 "
          onClick={addHandle}
        >
          Add
        </button>
        <h1 className="text-xl font-bold">My To-do:</h1>
        {todos.length===0 && <div className="bg-red-50 p-10 text-2xl text-center my-4 rounded-lg">Let`s do some work 💪</div>}
        {todos.map((item) => {
          return <div key={item.id} className="todo flex my-2">
            <input type="checkbox" onChange={checkHandle} name={item.id} id="" value={item.isCompleted} className="w-5 h-5 my-1 mx-4 flex content-center items-center" />
            <div className={`w-3/4 text-xl ${item.isCompleted?'line-through':''}`}>{item.todo}</div>
            <button
              className="bg-violet-400 hover:bg-violet-800 rounded-lg px-4 py-1 text-white font-bold mx-2"
              onClick={editHandle} >
              Edit
            </button>
            <button
              className="bg-violet-400 hover:bg-violet-800 rounded-lg px-4 py-1 text-white font-bold mx-2"
              onClick={(e)=>{delHandle(e,item.id)}}
            >
              Delete
            </button>
          </div>
        })}
      </div>
    </>
  );
}

export default App;
