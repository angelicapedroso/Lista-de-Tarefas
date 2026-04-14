import { prisma } from "../database";

export async function updateTask(id: string, title: string) {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });
}
