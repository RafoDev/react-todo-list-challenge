import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Todo, TodoSchema } from "../../shared/schemas/todo-schema";
import { PRIORITIES } from "../../shared/schemas/priority-schema";
import styles from "./todo-form.module.scss";
import { FormField } from "./components/form-field/form-field";
import { useTodoStore } from "../../shared/store/useTodoStore";

export const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Todo>({ resolver: zodResolver(TodoSchema) });
  const { addTodo } = useTodoStore();

  const onSubmit = (data: Todo) => {
    addTodo(data);
    reset();
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2 className={styles.title}>New Todo</h2>
        <FormField id="name" label="Task Name" error={errors.name?.message}>
          <input
            type="text"
            id="name"
            placeholder="Task Title"
            {...register("name")}
            className={styles.input}
          />
        </FormField>

        <FormField
          id="priority"
          label="Priority"
          error={errors.priority?.message}
        >
          <select
            id="priority"
            {...register("priority")}
            className={styles.input}
          >
            {PRIORITIES.map((priority) => {
              const priorityCapitalized =
                priority.charAt(0).toUpperCase() +
                priority.slice(1).toLowerCase();
              return (
                <option key={priority} value={priority}>
                  {priorityCapitalized}
                </option>
              );
            })}
          </select>
        </FormField>

        <FormField
          id="storyPoints"
          label="Story Points"
          error={errors.storyPoints?.message}
        >
          <input
            placeholder="1"
            type="number"
            id="storyPoints"
            {...register("storyPoints")}
            className={styles.input}
          />
        </FormField>

        <FormField
          id="assignee"
          label="Assignee"
          error={errors.assignee?.message}
        >
          <input
            type="text"
            id="assignee"
            placeholder="Who will be in charge?"
            {...register("assignee")}
            className={styles.input}
          />
        </FormField>

        <FormField
          id="dueDate"
          label="Due Date"
          error={errors.dueDate?.message}
        >
          <input
            type="date"
            id="dueDate"
            {...register("dueDate")}
            defaultValue={today}
            className={styles.input}
          />
        </FormField>

        <button type="submit" className={styles.button}>
          Create Todo
        </button>
      </form>
    </>
  );
};
