import "./components/LoginPage/login.css";
import TodoContent from "./components/LoginPage/TodoContent";
import TodoNew from "./components/LoginPage/TodoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
    const addNewTodo = (name) => {
        alert(`Call me ${name}`);
    }
    const kaintm = "Kaintm";
    const age = 25;
    const data ={
        name:"kain",
        country: "Vn",
        age:"25"
    }

    
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew 
        addNewTodo = {addNewTodo}
      />
      <TodoContent 
        name = {kaintm}
        age = {age}
        data = {data} 
      />
        <img src={reactLogo} className="logo"/>
    </div>
  );
};

export default App;
