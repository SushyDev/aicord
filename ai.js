const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const Dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');
const keyFilename = './key.json';
require('dotenv').config();

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
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    return result;
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

            //Dumbass
            if (response.intent.isFallback) return;

            console.log(response.intent.isFallback);

            console.log(`  Query: ${response.queryText}`);
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
            console.info('^---------Bot-Info----------^' + '\n');
        }
    }
});
