import "./shared/styles/app.scss";
import { TodoForm } from "./features/todo-form/todo-form";

import { TodoList } from "./features/todo-list/todo-list";
import { Navbar } from "./features/navbar/navbar";
import { Outlet, Route, Routes } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main">
      <Outlet />
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TodoList />} />
          <Route path="todoform" element={<TodoForm />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
