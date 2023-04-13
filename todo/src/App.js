import styles from './App.module.css';
import { useState } from "react";
import { Task } from "./Task"
function App() {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const newTask = (event) => {
    setTask(event.target.value);
  }

  const addTaskList = () => {
    var newTask = {
      id: taskList.length,
      taskName: task,
      completed: false,
    }
    setTaskList([...taskList, newTask]);

  };
  // console.log(taskList)
  const removeTask = (key) => {
    // alert(taskList.map((key, value) => value.id))
    setTaskList(taskList.filter((taskObject) => taskObject.id !== key))

  };

  const completeTask = (key) => {
    setTaskList(
      taskList.map((value) => {
        if (value.id === key) {

          return value.completed ? { ...value, completed: false } : { ...value, completed: true };
        }
        else {
          return value;
        }
      }));
  };
  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <input type="text" onChange={newTask}></input>
        <button type="button" onClick={addTaskList}>Submit</button>
      </div>

      <div className={taskList.length !== 0 ? styles.task : styles.noTask}>
        {taskList.map((value, key) => {
          return <Task nkey={key} value={value} removeTask={removeTask} completeTask={completeTask} />
        })}
      </div>
    </div>
  );
}

export default App;
