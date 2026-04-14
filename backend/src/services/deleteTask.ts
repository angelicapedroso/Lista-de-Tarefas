import { prisma } from "../database";

export async function deleteTask(id: string) {
  return prisma.task.delete({
    where: {
      id,
    },
  });
}
