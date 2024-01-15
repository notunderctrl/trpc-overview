import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../../api/src/trpc';

export const trpc = createTRPCProxyClient<AppRouter>({
    links: [httpBatchLink({ url: 'http://localhost:3000/trpc' })],
});
