import { initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

export const createContext = ({}: trpcExpress.CreateExpressContextOptions) => ({});
export type Context = Awaited<ReturnType<typeof createContext>>;

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
    getUser: t.procedure.query(() => {
        return {
            id: 1,
            name: 'John Doe',
        };
    }),
});

export type AppRouter = typeof appRouter;
