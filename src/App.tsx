import "./shared/styles/app.scss";
import { TodoForm } from "./features/todo-form/todo-form";
import { useEffect } from "react";
import { useTodoStore } from "./shared/store/useTodoStore";
import { TodoList } from "./features/todo-list/todo-list";

const App = () => {
  return (
    <>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
