import { useState } from "react";
import axios from "axios";

type TaskFormProps = {
  onTaskCreated: () => void;
};

export function TaskForm({ onTaskCreated }: TaskFormProps) {
  const [title, setTitle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await axios.post("http://localhost:3000/tasks", {
      title,
    });

    setTitle("");
    onTaskCreated();
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
  <input
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="Digite uma tarefa"
    style={{
      padding: "8px",
      marginRight: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc"
    }}
  />
  <button
    type="submit"
    style={{
      padding: "8px 12px",
      borderRadius: "4px",
      border: "none",
      background: "#4CAF50",
      color: "#fff",
      cursor: "pointer"
    }}
  >
    Criar
  </button>
</form>
  );
}
