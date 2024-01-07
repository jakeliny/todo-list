import { TaskType } from "./App";
import styles from "./Task.module.css";
import { FaCheckCircle, FaRegCircle, FaRegTrashAlt } from "react-icons/fa";

interface TaskProps extends TaskType {
  onRemoveTask: (id: number) => void;
  onToggleTask: (id: number) => void;
}

export default function Task({
  id,
  name,
  isCompleted,
  onRemoveTask,
  onToggleTask,
}: TaskProps) {
  return (
    <div className={`${styles.task} ${isCompleted && styles.taskCompleted}`}>
      <div className={styles.taskCheckbox} onClick={() => onToggleTask(id)}>
        {isCompleted ? (
          <FaCheckCircle className={styles.check} />
        ) : (
          <FaRegCircle className={styles.circle} />
        )}
      </div>
      <div className={styles.taskName}>{name}</div>
      <div className={styles.action}>
        <button onClick={() => onRemoveTask(id)}>
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
