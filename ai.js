const Discord = require('discord.js-selfbot');
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES']});
const fs = require('fs');
const Dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const keyFilename = './key.json';
require('dotenv').config();

const date = new Date();
date.setHours(date.getHours() + 1);

const aiResponse = async (message) => {
    // Create a new session
    const sessionClient = new Dialogflow.SessionsClient({
        keyFilename,
    });

    const sessionPath = sessionClient.projectAgentSessionPath(process.env.PROJECT_ID, uuid.v4());

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: message,
                // The language used by the client (en-US)
                languageCode: 'en',
            },
        },
    };

    // Send request and log result
    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        return result;
    } catch (e) {
        console.log(`\n${e}`);
    }
};

client.login(process.env.TOKEN);
client.on('ready', () => {
    {
        let inVC = false;

        client.on('message', async (message) => {
            try {
                 if (message.author.id === client.user.id || message.content.length >= 265 || !message.content ||!message.channel.permissionsFor(client.user).has('SEND_MESSAGES', false)) return;
            } catch (e) {
                console.log(`\n${e}`);
            }

            const response = await aiResponse(message.content);

            if (!response || response.intent.isFallback || !response.fulfillmentText) return;

            console.log(`\n New: ${date.toUTCString()}\n   Message: ${message.content}\n     Guild: ${message.guild.name}\n     Channel: ${message.channel.name}\n     Reply: ${response.fulfillmentText}`);
            if (response.intent) {
                console.log(`   Intent: ${response.intent.displayName}`);
            } else {
                console.log('   No intent matched.');
            }

            // setTimeout(() => {
            message.channel.send(response.fulfillmentText);
            // }, (Math.floor(Math.random() * 3) + 1) * 1000);

            try {
                if (message.content.toLowerCase().includes('voice')) {
                    const channel = message.member.voiceChannel;
                    if (!inVC) {
                        inVC != inVC;
                        channel.join();
                        console.info(message.author.username + ' made me join a voice channel in: ' + guildName + '\n');
                        message.channel.send('<@' + message.author.id + '>' + ' made me join a voice channel');
                    } else {
                        inVC != inVC;
                        channel.leave();
                        console.info(message.author.username + ' made me leave the voice channel in: ' + guildName + '\n');
                        message.channel.send('<@' + message.author.id + '>' + ' made me leave a voice channel');
                    }
                }
            } catch (e) {
                console.log(`\n${e}`);
            }
        });

        {
            console.info('v---------Bot-Info----------v');
            console.info('Logged into: ' + client.user.username);
            // console.info('Active in: ' + client.guilds.array().sort());
            console.info('Dialogflow: ' + process.env.PROJECT_ID);
            console.info('^---------Bot-Info----------^');
        }
    }
});

process.on('uncaughtException', (err) => {
    console.log(err);
});
