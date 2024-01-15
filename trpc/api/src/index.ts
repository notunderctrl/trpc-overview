import * as trpcExpress from '@trpc/server/adapters/express';
import { appRouter, createContext } from './trpc';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

app.listen(3000, () => console.log(`Listening on port 3000`));
