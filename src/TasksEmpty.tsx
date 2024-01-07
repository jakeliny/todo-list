import styles from "./TasksEmpty.module.css";
import { FaClipboardList } from "react-icons/fa";

export function TasksEmpty() {
  return (
    <div className={styles.tasksEmpty}>
      <p>
        <FaClipboardList />
      </p>
      <p>
        You don't have tasks registered yet
        <br />
        <strong>Add tasks and organize your to-do items</strong>
      </p>
    </div>
  );
}
