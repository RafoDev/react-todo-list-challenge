import { RiCloseLine } from "@remixicon/react";
import { Todo as TodoType } from "../../shared/schemas/todo-schema";

export const Todo = ({ data }: { data: TodoType }) => {
  return (
    <li>
      <span>{data.name}</span>
      <button onClick={() => {}}>
        <RiCloseLine />
      </button>
    </li>
  );
};
