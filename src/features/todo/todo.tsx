import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import { Todo as TodoType } from "../../shared/schemas/todo-schema";
import { useTodoStore } from "../../shared/store/useTodoStore";
import { useState } from "react";
import { Box } from "../../shared/ui/box/box";
import styles from "./todo.module.scss";
import { format, formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import { capitalize } from "../../shared/util/capitalize";

export const Todo = ({ data }: { data: TodoType }) => {
  const { toggleTodo, removeTodo } = useTodoStore();
  const [isChecked, setIsChecked] = useState(data.status !== "active");

  const formatRelativeDate = (date: string) => {
    return formatDistanceToNow(new Date(date), {
      addSuffix: true,
    });
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    toggleTodo(data.id);
  };

  return (
    <Box>
      <div className={styles.container}>
        <div className={styles.info}>
          <span className={styles.name}>{data.name}</span>
          <span className={styles.assignee}>{data.assignee}</span>
          <span className={`${styles.priority} ${styles[data.priority]}`}>
            {capitalize(data.priority)} | {data.storyPoints}
          </span>

          <p className={styles.dueDateContainer}>
            <span className={styles.dueDate}>
              Due: {formatRelativeDate(data.dueDate)}
            </span>
            <small className={styles.dueDateRaw}>
              {format(new Date(data.dueDate), "MMM dd, yyyy h:mm a")}
            </small>
          </p>
        </div>
        <div className={styles.actions}>
          {/* <input
            type="checkbox"
            name="complete"
            checked={isChecked}
            onChange={handleOnChange}
            className={styles.completeCheckbox}
          /> */}
          <button
            className={styles.removeTask}
            onClick={() => {
              toggleTodo(data.id);
            }}
          >
            <RiCheckLine />
          </button>
          <button
            className={styles.removeTask}
            onClick={() => {
              removeTodo(data.id);
            }}
          >
            <RiCloseLine />
          </button>
        </div>
        <span className={styles[data.status]}></span>
      </div>
    </Box>
  );
};
