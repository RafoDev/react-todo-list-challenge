import { useState } from "react";
import "./shared/styles/app.scss";
import { TodoForm } from "./features/todo-form/todo-form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoForm />
    </>
  );
}

export default App;
