const Discord = require('discord.js');
const client = new Discord.Client();
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
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    try {
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;
        return result;
    } catch (error) {
        console.log(error);
        return;
    }
};

const aiTrain = async (message) => {
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
                languageCode: 'en-US',
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.Train(request);
    const result = responses[0].queryResult;
    return result;
};

client.login(process.env.TOKEN);
client.on('ready', () => {
    {
        const name = 'Yobama';
        const avatar = 'https://someur';
        const prefix = '!';
        const list = client.guilds.array().sort();

        const blacklist = {
            user: [],
            channel: [],
            guild: [],
        };

        let inVC = false;

        client.on('message', async (message) => {
            if (message.author.id === client.user.id) return;

            console.log(`\n New: ${date.toUTCString()}`);

            for (const ID in blacklist['user']) {
                if (message.author.id === ID) return;
            }
            for (const ID in blacklist['channel']) {
                if (channelId === ID) return;
            }
            for (const ID in blacklist['guild']) {
                if (guildId === ID) return;
            }

            const response = await aiResponse(message.content);

            if (!response) return;

            console.log(`  Query: ${response.queryText}`);

            //Dumbass
            if (response.intent.isFallback) {
                console.info("  Didn't understand");
                return;
            }

            console.log(`  Response: ${response.fulfillmentText}`);
            if (response.intent) {
                console.log(`  Intent: ${response.intent.displayName}`);
            } else {
                console.log('  No intent matched.');
            }

            message.channel.send(response.fulfillmentText);

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
                console.log(e);
            }
        });

        {
            console.info('v---------Bot-Info----------v');
            console.info('Logged into: ' + client.user.username);
            console.info('Active in: ' + list);
            console.info('^---------Bot-Info----------^');
        }
    }
});
