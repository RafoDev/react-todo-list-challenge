import { useTodoStore } from "../../shared/store/useTodoStore";
import { Todo } from "../todo/todo";
import styles from "./todo-list.module.scss";

export const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Todo key={todo.id} data={todo} />
      ))}
    </div>
  );
};
