import { notFound } from 'next/navigation';
import { trpc } from '@/utils/trpc';

export default async function Page() {
    const user = await trpc.getUser.query().catch((error) => {
        console.log(error);
    });

    if (!user) notFound();

    return <h1>Logged in as {user.name}</h1>;
}
