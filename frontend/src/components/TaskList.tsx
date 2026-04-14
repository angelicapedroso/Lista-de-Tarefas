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
    const confirmDelete = window.confirm("Deseja excluir esta tarefa?");

    if (!confirmDelete) {
      return;
    }

    await axios.delete(`http://localhost:3000/tasks/${id}`);
    fetchTasks();
  }

  async function handleEdit(id: string, currentTitle: string) {
    const newTitle = window.prompt("Editar tarefa:", currentTitle);

    if (!newTitle) {
      return;
    }

    const formattedTitle = newTitle.trim();

    if (formattedTitle === "") {
      alert("O título da tarefa não pode ficar vazio.");
      return;
    }

    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: formattedTitle,
    });

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
                gap: "10px",
              }}
            >
              <span>{task.title}</span>

              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={() => handleEdit(task.id, task.title)}
                  style={{
                    background: "#0275d8",
                    color: "#fff",
                    border: "none",
                    padding: "6px 10px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Editar
                </button>

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
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
