import type { Task } from "../../types/task";
import css from "./TaskList.module.css";

interface TaskListProps {
  contacts: Task[];
}

export default function TaskList({ contacts }: TaskListProps) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <input
            type="checkbox"
            defaultChecked={contact.completed}
            className={css.checkbox}
          />
          <span className={css.text}>{contact.text}</span>
          <button type="button" className={css.button}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
