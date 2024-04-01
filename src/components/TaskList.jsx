import Task from "./Task";
import { useSelector } from "react-redux";

const TodoList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      <ul className="h-[300px] overflow-y-scroll pr-1">
        {tasks.length == 0 ? (
          <div className="text-center text-2xl font-bold mt-10 text-green-600">Add a Task</div>
        ) : (
          tasks.map((task, index) => (
            <li key={index} className="flex items-center mb-2">
              <Task task={task} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
