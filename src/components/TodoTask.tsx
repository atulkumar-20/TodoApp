import { ITask } from "../Interface";
import "../App.css"
interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}
export const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <>
      <div className="task">
        <div className="content">
          <span>{task.taskName}</span>
          <br />
          <span>{task.deadline} days </span>
        </div>
        <button onClick={() => completeTask(task.taskName)}>Delete</button>
      </div>
    </>
  );
};
