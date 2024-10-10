import "./components/LoginPage/login.css";
import TodoContent from "./components/LoginPage/TodoContent";
import TodoNew from "./components/LoginPage/TodoNew";
import reactLogo from "./assets/react.svg";
const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoContent />
        <img src={reactLogo} className="logo"/>
    </div>
  );
};

export default App;
