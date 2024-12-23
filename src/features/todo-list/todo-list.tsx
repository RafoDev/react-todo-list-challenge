import { useTodoStore } from "../../shared/store/useTodoStore";
import { Todo } from "../todo/todo";

export const TodoList = () => {
  const { todos } = useTodoStore();

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} data={todo} />
      ))}
    </ul>
  );
};
