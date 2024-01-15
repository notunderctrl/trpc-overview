import type { CommandData, SlashCommandProps } from 'commandkit';
import axios from 'axios';

export const data: CommandData = {
    name: 'get-user',
    description: 'Get a user from the API.',
};

export async function run({ interaction }: SlashCommandProps) {
    await interaction.deferReply();

    const response = await axios.get('http://localhost:3000/user').catch((error) => {
        interaction.followUp('Error. Try again in a moment');
        console.log(error);
    });

    if (!response) return;

    const user = response.data;

    interaction.reply(`User name: ${user.name}`);
}
