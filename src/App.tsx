import { useState } from "react";
import styles from "./assets/App.module.css";
import { FaPlus } from "react-icons/fa";
import Task from "./Task";
import { TasksEmpty } from "./TasksEmpty";

export interface TaskType {
  id: number;
  name: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskName, setTaskName] = useState("");

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newTask = {
      id: Math.random(),
      name: taskName,
      isCompleted: false,
    };

    setTasks((oldValue) => [...oldValue, newTask]);
    setTaskName("");
  }

  function handleRemoveTask(id: number) {
    setTasks((oldValue) => oldValue.filter((task) => task.id !== id));
  }

  function handleToggleTask(id: number) {
    setTasks((oldValue) =>
      oldValue.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  return (
    <>
      <header className={styles.header}>
        <img src="logo.svg" />
      </header>
      <main>
        <form onSubmit={handleAddTask} className={styles.addTaskForm}>
          <input
            type="text"
            placeholder="Add a new task"
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
            required
          />
          <button type="submit">
            Add <FaPlus />
          </button>
        </form>
        <div className={styles.taskCountInfos}>
          <p>
            Tasks created <span>{tasks.length}</span>
          </p>
          <p>
            Tasks completed{" "}
            <span>
              {tasks.filter((task) => task.isCompleted).length} de{" "}
              {tasks.length}
            </span>
          </p>
        </div>
        <div className={styles.tasksContainer}>
          {tasks.length === 0 ? (
            <TasksEmpty />
          ) : (
            <div className={styles.tasksList}>
              {tasks.map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  name={task.name}
                  isCompleted={task.isCompleted}
                  onRemoveTask={handleRemoveTask}
                  onToggleTask={handleToggleTask}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
