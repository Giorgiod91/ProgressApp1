import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const taskRouter = createTRPCRouter({
  getAll: protectedProcedure.query(({ ctx }) => {
    return ctx.db.task.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),

  create: protectedProcedure
    .input(z.object({ title: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.db.task.create({
        data: {
          title: input.title,
          userId: ctx.session.user.id,
        },
      });
    }),
  update: protectedProcedure
    .input(
      z.object({
        taskId: z.string().refine((val) => !isNaN(Number(val)), {
          message: "taskId must be a number",
        }),
        completed: z.boolean(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const { taskId, completed } = input;
      const task = await ctx.db.task.update({
        where: { id: Number(taskId) },
        data: { completed },
      });
      return task;
    }),
});
