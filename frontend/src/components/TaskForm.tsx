import { useState } from "react";
import axios from "axios";

export function TaskForm() {
  const [title, setTitle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    await axios.post("http://localhost:3000/tasks", {
      title
    });

    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Criar</button>
    </form>
  );
}
