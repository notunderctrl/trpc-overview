import { Client, GatewayIntentBits } from 'discord.js';
import { CommandKit } from 'commandkit';

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

new CommandKit({
    client,
    commandsPath: `${__dirname}/commands`,
});

client.login(process.env.BOT_TOKEN);
