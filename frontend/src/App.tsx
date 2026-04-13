import { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  const [reload, setReload] = useState(false);

  function handleTaskCreated() {
    setReload((prev) => !prev);
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList reload={reload} />
    </div>
  );
}

export default App;
