import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Lista de tarefas</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
