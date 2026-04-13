import { Request, Response } from "express";
import { createTask } from "../services/createTask";
import { getTasks } from "../services/getTasks";

export async function create(req: Request, res: Response) {
  const { title } = req.body;

  const task = await createTask(title);

  res.status(201).json(task);
}

export async function list(req: Request, res: Response) {
  const tasks = await getTasks();

  res.status(200).json(tasks);
}
