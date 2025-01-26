import { ChangeEvent, useState } from "react";
import "./App.css";
import { ITask } from "./Interface";
import { TodoTask } from "./components/TodoTask";
const App = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    //[...todoList]---This is creating a new array and adding the newTask to it.
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
    setDeadline(0);
  };
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => task.taskName !== taskNameToDelete));
  };

  return (
    <>
      <div className="App">
        <div className="header">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Task"
              onChange={handleChange}
              name="task"
              //value={task}---Initialize the input field's value with the current value of the task state variable.
              // Update the input field's value whenever the task or deadline state variable changes.
              value={task}
            />
            <input
              type="text"
              placeholder="Deadline(In days)"
              onChange={handleChange}
              name="deadline"
              value={deadline}
            />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className="todoList">
          {todoList.map((task: ITask, key: number) => (
            <TodoTask key={key} task={task} completeTask={completeTask} />
          ))}
        </div>
      </div>
    </>
  );
};
export default App;

// The key difference lies in whether our new state depends on the previous state value. In your code, setTask(event.target.value) is setting the state directly to whatever the user typed in the input field. We're not doing any calculations based on the previous value of the task - we're just taking the new value from the event and using it directly.
// Think of it like writing in a notebook. If you're writing down exactly what someone tells you (like in your input handler), you just write the new information. But if you need to take what's already written and modify it, you need to look at the previous content first.
