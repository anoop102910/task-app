import { deleteTask, markAsComplete } from "../slice/taskSlice";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
const Task = ({ task }) => {
  const { content, complete, id } = task;
  const dispatch = useDispatch();

  const handleTaskDeletion = () => {
    dispatch(deleteTask(id));
  };

  const handleMarkComplete = () => {
    dispatch(markAsComplete(id));
  };

  return (
    <div className="bg-white px-4 py-2 rounded-md w-full flex justify-between items-center shadow-md">
      <div className="flex">
        <input type="checkbox" checked={complete} onChange={handleMarkComplete} className="mr-4" />
         <span className={`py-1 ${complete && "line-through"}`}>{content}</span>
      </div>
      <div>
        <button className="text-red-500 p-1" onClick={handleTaskDeletion}>
          <Icon icon="fluent:delete-32-filled" className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Task;
