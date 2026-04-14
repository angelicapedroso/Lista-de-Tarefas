import { Request, Response } from "express";
import { createTask } from "../services/createTask";
import { getTasks } from "../services/getTasks";
import { deleteTask } from "../services/deleteTask";
import { updateTask } from "../services/updateTask";

export async function create(req: Request, res: Response) {
  const { title } = req.body;

  const task = await createTask(title);

  res.status(201).json(task);
}

export async function list(req: Request, res: Response) {
  const tasks = await getTasks();

  res.status(200).json(tasks);
}

export async function remove(req: Request, res: Response) {
  const { id } = req.params;

  await deleteTask(id);

  res.status(200).json({ message: "Tarefa removida com sucesso" });
}

export async function update(req: Request, res: Response) {
  const { id } = req.params;
  const { title } = req.body;

  const task = await updateTask(id, title);

  res.status(200).json(task);
}
