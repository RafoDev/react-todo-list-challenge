import { useTodoStore } from "../../shared/store/useTodoStore";
import { Todo } from "../todo/todo";
import styles from "./todo-list.module.scss";

export const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent</h2>
      <div className={styles.todos}>
        {todos.map((todo) => (
          <Todo key={todo.id} data={todo} />
        ))}
      </div>
    </div>
  );
};
