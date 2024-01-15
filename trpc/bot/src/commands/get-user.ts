import type { CommandData, SlashCommandProps } from 'commandkit';
import { trpc } from '../utils/trpc';

export const data: CommandData = {
    name: 'get-user',
    description: 'Get a user from the API.',
};

export async function run({ interaction }: SlashCommandProps) {
    await interaction.deferReply();

    const user = await trpc.getUser.query().catch((error) => {
        interaction.followUp('Error. Try again in a moment');
        console.log(error);
    });

    if (!user) return;

    interaction.reply(`User name: ${user.name}`);
}
