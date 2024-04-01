import { TodoInput } from "./components/TaskInput";
import TodoList from "./components/TaskList";

const App = () => {
  return (
    <div>
      <div className="mx-auto w-[500px] p-10  border bg-green-200 mt-10 rounded-lg shadow-md">
        <TodoInput />
        <div className="mt-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
