import { Request, Response } from "express";
import { createTask } from "../services/createTask";

export async function create(req: Request, res: Response) {
  const { title } = req.body;

  const task = await createTask(title);

  res.status(201).json(task);
}
