import { notFound } from 'next/navigation';
import axios from 'axios';

export default async function Page() {
    const response = await axios.get('http://localhost:4000/user').catch((error) => {
        console.log(error);
    });

    if (!response) notFound();

    const user = response.data as {
        id: number;
        name: string;
    };

    return <h1>Logged in as {user.name}</h1>;
}
