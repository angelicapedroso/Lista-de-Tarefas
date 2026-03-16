import { prisma } from "../database";

export async function createTask(title: string) {
  return prisma.task.create({
    data: { title }
  });
}
