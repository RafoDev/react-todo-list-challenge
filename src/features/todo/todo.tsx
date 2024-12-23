import { RiCloseLine } from "@remixicon/react";
import { Todo as TodoType } from "../../shared/schemas/todo-schema";
import { useTodoStore } from "../../shared/store/useTodoStore";
import { useState } from "react";

export const Todo = ({ data }: { data: TodoType }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  const [isChecked, setIsChecked] = useState(data.status !== "active");

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    toggleTodo(data.id);
  };

  return (
    <li>
      <input
        type="checkbox"
        name="complete"
        checked={isChecked}
        onChange={handleOnChange}
      />
      <span>{data.name}</span>
      <button
        onClick={() => {
          removeTodo(data.id);
        }}
      >
        <RiCloseLine />
      </button>
    </li>
  );
};
