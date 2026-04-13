import { useEffect, useState } from "react";
import axios from "axios";

type Task = {
  id: string;
  title: string;
  createdAt: string;
};

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function fetchTasks() {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Lista de tarefas</h2>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
