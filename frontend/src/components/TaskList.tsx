/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import axios from "axios";

type Task = {
  id: string;
  title: string;
  createdAt: string;
};

type TaskListProps = {
  reload: boolean;
};

export function TaskList({ reload }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  async function fetchTasks() {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  }

  async function handleDelete(id: string) {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    fetchTasks();
  }

  useEffect(() => {
    fetchTasks();
  }, [reload]);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Lista de tarefas</h2>

      {tasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                background: "#1e1e1e",
                padding: "10px 15px",
                marginBottom: "10px",
                borderRadius: "6px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{task.title}</span>

              <button
                onClick={() => handleDelete(task.id)}
                style={{
                  background: "#d9534f",
                  color: "#fff",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
