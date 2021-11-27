const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();
client.login(process.env.TOKEN);
client.on('ready', () => {
    {
        const name = 'Yobama';
        const avatar = 'https://someur';
        const prefix = '!';
        const list = client.guilds.array().sort();

        const ai = {
            welcome: ['Welcome', 'Hey!', 'Welcome!', 'Hey there', 'my english bad sorry'],
            hello: ['Hi', 'Hi!', 'Hello', 'Hello!', 'Hai', 'Hey', 'Hoi', 'Sup', 'Hi how are you', 'Hi how are you!', 'Hello how are you', 'Hello! how are you', 'Hai how are you', 'Hey how are you', 'Hoi how are you', 'Sup how are you', 'my english bad sorry'],
            hru: ['How are you', 'How are you?', 'hru', 'hru?', 'how ru', 'how ru?', 'how r u', 'how r u?', "What's up", 'Whats up', 'what about you', 'wbu', 'my english bad sorry'],
            hrua: ["I'm fine", 'Im doing okay i guess', 'a bit meh', 'im good thanks for asking!', 'my english bad sorry'],
            ping: ['Ping', 'Ping!', 'Ping?', 'Ping!?', 'I have been summoned', "I'm just a robot I don't do much", "That's me", 'Yes?', 'What!?', 'my english bad sorry'],
            same: ['Same', 'Not the same', 'what same', 'are you sure', 'me too!', 'r u sure about that?', 'sameh', 'my english bad sorry'],
            color: ['Green', 'Lime', 'Yellow', 'Light Blue', 'Blue', 'Orange', 'Lava Red', 'Bright Red', 'Purple', 'Brown', 'Black', 'Ice White', "I don't know whats yours?", 'my english bad sorry'],
            deadchat: ['You can always talk to me, Im always online, just ask me basic questions like: How are you or Whats your favorite color', 'oof', ':deadchat:', 'Then just make it active', '@everyone get active ;/', 'my english bad sorry'],
            oh: ['Yeah ;-;', 'Yeah :sob:', 'Yeah!', 'Yep', 'Yep ;-;', 'Yep :sob:', 'my english bad sorry'],
            who: ['I am a cyborg!', 'I am a auto responding AI', "I'm cute pls dm me", 'my english bad sorry'],
            cmon: ['Yes', 'Please do', 'Yes please', 'Just do it', 'my english bad sorry'],
            wtf: ['tf', 'what the fuck', 'my english bad sorry', "Didn't funny not laugh"],
            ayy: ['LOL', 'LUL', 'lol', 'lmao', 'bruh', 'my english bad sorry', "Didn't funny not laugh"],
            bruh: ['Bruh', 'lol', 'lmao', 'my english bad sorry'],
            omg: ['omg', 'omg...', 'lmao', 'lol', 'my english bad sorry'],
            smh: ['pfft', 'smh', 'stupid', 'my english bad sorry'],
            lol: ['lol', 'lmao', 'bruh', 'oof', 'lol is short for ligma', 'my english bad sorry', "Didn't funny not laugh"],
            haha: ['lol', 'Not even funny', 'my english bad sorry', "Didn't funny not laugh"],
            fku: ['No u', 'shut the fuck up', 'shut the fuck up dirty hoe', 'shut ur fucking mouth tiny dick sucking hoe', 'my english bad sorry'],
            fn: ['Pubg is better', 'Ew fortnite', 'fortnut', 'my english bad sorry'],
            pg: ['Pubg is boring', 'Pubg is cool', "What's pubg?"],
            hoe: ['Diamond hoe', 'Golden hoe', 'Iron Hoe', 'Lapis hoe', 'Redstone hoe', 'Wait w**hoe**?', 'my english bad sorry'],
            thot: ['Twitch thot', 'u talking about Alinity?', 'Ur mom?', 'My grandma?', 'Your neighbor?', 'wait who?', 'Did you seriously just say that, im gonna copy srike you now', 'my english bad sorry'],
            xd: ['Eks dee', 'lol', 'xD', 'bruh', 'lmao', '*se* **XD** *ildo*', 'my english bad sorry', "Didn't funny not laugh"],
            ass: ['Suck it', 'My ass is a little brown please come and help clean it (I prefer with your tounge)', 'my ass is on the front', 'my ass will be your toy tonight', 'my english bad sorry'],
            pls: ['No', 'Sure', 'Why not', 'Nope', 'my english bad sorry'],
            oof: ['Big oof', 'Oof', 'my english bad sorry'],
            yeet: ['Yeet', 'Yeetus my fetus', 'my english bad sorry'],
            weeb: ['UwU', 'OwO', 'X-X', ':P', ':)', ';)', 'xD', 'Anime', 'Hentai', '()-()', 'ʕ •ᴥ•ʔ', '0:', ':0', ':O', 'O:', 'O.O', '0.O', 'O.0', 'my english bad sorry'],
            wat: ['Whaaa??', 'U wot?', '0.o?', '?-?', 'What??', 'Wot u say?', 'Nothing', 'Nothin', 'my english bad sorry'],
            gay: ["I'm gay", 'U have the big gay', 'No u', 'my english bad sorry'],
            lit: ['lit fam', 'litty', 'litty titty', 'lit'],
            dab: ['Dab on em haters', 'Dab', '*dabs*', 'dont dab pls', 'my english bad sorry', "Didn't funny not laugh"],
            rip: ['Rest in pieces', 'Rest in peperoni', 'r.i.p', 'my english bad sorry'],
            ffs: ['fuck', 'no cussing ;-;', 'my english bad sorry'],
            ok: ['No', 'K', 'Okay', 'Yeah', 'Hmh', 'uhu', 'my english bad sorry'],
            no: ['Yes', 'Nuu', 'neh', 'nah', 'my english bad sorry'],
            stfu: ['No u', "I'm sorry ;-;", 'my english bad sorry'],
            why: ['Cuz I can', 'Why not', 'Why why', 'Why me', 'my english bad sorry'],
            nice: ['noice', 'nice', 'yeah', 'no', 'my english bad sorry'],
            ikr: ['No fake', "No u don't", 'my english bad sorry'],
            yay: ['Yee', 'yaya', 'yeye', 'YAAAY!', 'my english bad sorry'],
            thicc: ['Hella thicc', 'Smack dat booty', 'Fucking thicc', 'Oh damn thicc', 'my english bad sorry'],
            good: ['Very good', 'Gud', 'No bad', "Badn't", 'my english bad sorry'],
            bad: ['No good', 'No gud', 'Bad boy', 'Bad girl', 'Very bad', "Goodn't", 'my english bad sorry'],
            wow: ['Wooooooooah', 'Woah', 'wuw', 'Wow', 'Waaauw', 'my english bad sorry'],
            mem: [':clap: :clap: Meme review', "If eu blocks memes then i'm gonna block the eu", 'dank memes', 'my english bad sorry', "Didn't funny not laugh"],
            morning: ['Morning', 'Good morning', 'Heya', 'Heyy', 'my english bad sorry'],
            night: ['Night', 'Good night', 'Bye', 'Cya', 'my english bad sorry'],
            yes: ['no', 'nah', 'neh', 'nono', 'nope', 'nada', 'nana', 'ur just retarded', 'my english bad sorry'],
        };

        const blacklist = {
            user: [],
            channel: [],
            guild: [],
        };

        let inVC = false;

        client.on('message', (message) => {
            if (message.author.bot) return;

            for (const ID in blacklist['user']) {
                if (message.author.id === ID) return;
            }
            for (const ID in blacklist['channel']) {
                if (channelId === ID) return;
            }
            for (const ID in blacklist['guild']) {
                if (guildId === ID) return;
            }

            for (const category in ai) {
                if (message.content.toLowerCase().includes(category)) {
                    //Random chance to ignore (for legitemecy)
                    if (Math.random() < 0.3) return;
                    setTimeout(() => {
                        message.channel.send(ai[category][Math.floor(Math.random() * ai[category].length)]).catch((err) => message.channel.send('peng'));
                    }, (Math.floor(Math.random() * 5) + 1) * 1000);
                    console.info(message.author.tag + ': ' + message.content);
                    return;
                }
            }

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
        });

        {
            console.info('v---------Bot-Info----------v');
            console.info('Logged into: ' + client.user.username);
            console.info('Active in: ' + list);
            console.info('^---------Bot-Info----------^' + '\n');
        }
    }
});
