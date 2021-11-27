const Discord = require('discord.js');
const client = new Discord.Client();
const guildNames = client.guilds.map((g) => g.name).join('\n');
const fs = require('fs');
client.login(process.env.TOKEN);
client.on('ready', () => {
    {
        const name = 'Yobama';
        var avatar = 'https://someur';
        var prefix = '!';
        const list = client.guilds.array().sort();

        //time
        var currentdate = new Date();
        var timeh = currentdate.getHours();
        var timem = currentdate.getMinutes();
        var ntimeh = timeh + 2;
        var ntimem = timem + 1;
        var time = ntimeh + 'h, ' + ntimem + 'm';

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
        const blacklisteduser = ['', ''];
        const blacklistedchannel = ['', ''];
        const blacklistedguild = ['', ''];

        console.log(ai);

        var channelName;
        var guildName;
        var guildId;
        var channelId;
        var totalwords;
        var words = 0;
        var vcon = 0;

        client.on('message', (message) => {
            if (message.channel.name == undefined) {
                channelName = 'dms';
                channelId = 'dms';
                guildName = 'dms';
                guildId = 'dms';
                return;
            } else {
                guildName = message.guild.name;
                guildId = message.guild.id;
                channelName = message.channel.name;
                channelId = message.channel.id;
                return;
            }

            if (message.guild.name == undefined) {
                guildName = 'dms';
                guildId = 'dms';
                return;
            } else {
                guildName = message.guild.name;
                guildId = message.guild.id;
                return;
            }
        });

        client.on('message', (message) => {
            if (message.author.bot) return;

            for (const i in blacklisteduser) {
                if (message.author.id === blacklisteduser[i].toLowerCase()) {
                    console.error(message.author.username + ' is a blacklisted user' + '\n');
                    return;
                }
            }
            for (const i in blacklistedchannel) {
                if (channelId === blacklistedchannel[i].toLowerCase()) {
                    console.error(guildName + ' | ' + channelName + ' is a blacklisted channel' + '\n');
                    return;
                }
            }
            for (const i in blacklistedguild) {
                if (guildId === blacklistedguild[i].toLowerCase()) {
                    console.error(guildName + ' is a blacklisted guild' + '\n');
                    return;
                }
            }
        });

        //MESSAGE SENT
        {
            // client.on('message', (message) => {
            //     if (message.author.bot) return;
            //     if (message.author.id == client.user.id) {
            //         console.log('Said: ' + message.content + '\n' + 'In: ' + guildName + ' | ' + channelName + '\n');
            //         return;
            //     }
            //     if (message.content.toLowerCase().includes(process.env.PREFIX + 'words')) {
            //         message.channel.send(Object.getOwnPropertyNames(ai));
            //         message.channel.send('Total words: ' + words);
            //     }
            //     if (message.isMentioned(client.user)) {
            //         message.channel.send(ai.ping[Math.floor(Math.random() * ai.ping.length)]).catch((err) => message.channel.send('peng'));
            //         console.info(message.author.tag + ': ' + message.content);
            //     }
            //     setTimeout(() => {
            //         if (message.content.toLowerCase().includes('ai' || 'diglet')) {
            //             message.channel.send(ai.ping[Math.floor(Math.random() * ai.ping.length)]).catch((err) => message.channel.send('peng'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('same')) {
            //             message.channel.send(ai.same[Math.floor(Math.random() * ai.same.length)]).catch((err) => message.channel.send('Nah not the same'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('favorite color')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('favorite colour')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('fav color')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('fav colour')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('name a color')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('name a colour')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('what color')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('what colour')) {
            //             message.channel.send(ai.color[Math.floor(Math.random() * ai.color.length)]).catch((err) => message.channel.send('Brown like my poopoo'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('dead chat')) {
            //             message.channel.send(ai.deadchat[Math.floor(Math.random() * ai.deadchat.length)]).catch((err) => message.channel.send('You can always talk to me, Im always online'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('deadchat')) {
            //             message.channel.send(ai.deadchat[Math.floor(Math.random() * ai.deadchat.length)]).catch((err) => message.channel.send('You can always talk to me, Im always online'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('oh')) {
            //             message.channel.send(ai.oh[Math.floor(Math.random() * ai.oh.length)]).catch((err) => message.channel.send('yeah'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('really')) {
            //             message.channel.send(ai.oh[Math.floor(Math.random() * ai.oh.length)]).catch((err) => message.channel.send('yeah'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('who are you')) {
            //             message.channel.send(ai.who[Math.floor(Math.random() * ai.who.length)]).catch((err) => message.channel.send('I am a AI auto responding self bot, you can talk to me and I will give cool responses!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('who is this')) {
            //             message.channel.send(ai.who[Math.floor(Math.random() * ai.who.length)]).catch((err) => message.channel.send('I am a AI auto responding self bot, you can talk to me and I will give cool responses!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('do it')) {
            //             message.channel.send(ai.cmon[Math.floor(Math.random() * ai.cmon.length)]).catch((err) => message.channel.send('YES DO IT!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('wtf')) {
            //             message.channel.send(ai.wtf[Math.floor(Math.random() * ai.wtf.length)]).catch((err) => message.channel.send('wut da fook!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('what the fuck')) {
            //             message.channel.send(ai.wtf[Math.floor(Math.random() * ai.wtf.length)]).catch((err) => message.channel.send('wut da fook!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('lmao')) {
            //             message.channel.send(ai.ayy[Math.floor(Math.random() * ai.ayy.length)]).catch((err) => message.channel.send('Oi le moo!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('lmfao')) {
            //             message.channel.send(ai.ayy[Math.floor(Math.random() * ai.ayy.length)]).catch((err) => message.channel.send('Oi le moo!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('bruh')) {
            //             message.channel.send(ai.bruh[Math.floor(Math.random() * ai.bruh.length)]).catch((err) => message.channel.send('BR|_| |_|!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('omg')) {
            //             message.channel.send(ai.omg[Math.floor(Math.random() * ai.omg.length)]).catch((err) => message.channel.send('oh my big tiddy goth gf'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('oh my god')) {
            //             message.channel.send(ai.omg[Math.floor(Math.random() * ai.omg.length)]).catch((err) => message.channel.send('oh my big tiddy goth gf'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('smh')) {
            //             message.channel.send(ai.smh[Math.floor(Math.random() * ai.smh.length)]).catch((err) => message.channel.send('BR|_| |_|!'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('lol')) {
            //             message.channel.send(ai.lol[Math.floor(Math.random() * ai.lol.length)]).catch((err) => message.channel.send('Lawl'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('haha')) {
            //             message.channel.send(ai.haha[Math.floor(Math.random() * ai.haha.length)]).catch((err) => message.channel.send('lol'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('fuck you')) {
            //             message.channel.send(ai.fku[Math.floor(Math.random() * ai.fku.length)]).catch((err) => message.channel.send('oh yes fuck me hard daddy'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('fuck u')) {
            //             message.channel.send(ai.fku[Math.floor(Math.random() * ai.fku.length)]).catch((err) => message.channel.send('oh yes fuck me hard daddy'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('fortnite')) {
            //             message.channel.send(ai.fn[Math.floor(Math.random() * ai.fn.length)]).catch((err) => message.channel.send('fortnite has the big giant gay in my ass'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('pubg')) {
            //             message.channel.send(ai.pg[Math.floor(Math.random() * ai.pg.length)]).catch((err) => message.channel.send('pubg has the big giant gay in my ass'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('hoe')) {
            //             message.channel.send(ai.hoe[Math.floor(Math.random() * ai.hoe.length)]).catch((err) => message.channel.send('Wooden hoe'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('thot')) {
            //             message.channel.send(ai.thot[Math.floor(Math.random() * ai.thot.length)]).catch((err) => message.channel.send('Did you seriously just say that, im gonna copy srike you now'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('xd')) {
            //             message.channel.send(ai.xd[Math.floor(Math.random() * ai.xd.length)]).catch((err) => message.channel.send('Did you seriously just say that, im gonna copy srike you now'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('ass')) {
            //             message.channel.send(ai.ass[Math.floor(Math.random() * ai.ass.length)]).catch((err) => message.channel.send('Ass is short for my booty hole'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('pls')) {
            //             message.channel.send(ai.pls[Math.floor(Math.random() * ai.pls.length)]).catch((err) => message.channel.send('Please fix my errors'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('please')) {
            //             message.channel.send(ai.pls[Math.floor(Math.random() * ai.pls.length)]).catch((err) => message.channel.send('Please fix my errors'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('oof')) {
            //             message.channel.send(ai.oof[Math.floor(Math.random() * ai.oof.length)]).catch((err) => message.channel.send('Ouef a error occured'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('robot')) {
            //             message.channel.send(ai.bot[Math.floor(Math.random() * ai.bot.length)]).catch((err) => message.channel.send("I'm not a robot"));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yeet')) {
            //             message.channel.send(ai.yeet[Math.floor(Math.random() * ai.yeet.length)]).catch((err) => message.channel.send('Yeet error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('wat')) {
            //             message.channel.send(ai.wat[Math.floor(Math.random() * ai.wat.length)]).catch((err) => message.channel.send('Wat I got a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('wot')) {
            //             message.channel.send(ai.wat[Math.floor(Math.random() * ai.wat.length)]).catch((err) => message.channel.send('Wat I got a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('wut')) {
            //             message.channel.send(ai.wat[Math.floor(Math.random() * ai.wat.length)]).catch((err) => message.channel.send('Wat I got a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('what')) {
            //             message.channel.send(ai.wat[Math.floor(Math.random() * ai.wat.length)]).catch((err) => message.channel.send('Wat I got a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('weeb')) {
            //             message.channel.send(ai.weeb[Math.floor(Math.random() * ai.weeb.length)]).catch((err) => message.channel.send('3rr0r'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gay')) {
            //             message.channel.send(ai.gay[Math.floor(Math.random() * ai.gay.length)]).catch((err) => message.channel.send('Errors are gay'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gey')) {
            //             message.channel.send(ai.gay[Math.floor(Math.random() * ai.gay.length)]).catch((err) => message.channel.send('Errors are gay'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gei')) {
            //             message.channel.send(ai.gay[Math.floor(Math.random() * ai.gay.length)]).catch((err) => message.channel.send('Errors are gay'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gae')) {
            //             message.channel.send(ai.gay[Math.floor(Math.random() * ai.gay.length)]).catch((err) => message.channel.send('Errors are gay'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gea')) {
            //             message.channel.send(ai.gay[Math.floor(Math.random() * ai.gay.length)]).catch((err) => message.channel.send('Errors are gay'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('lit')) {
            //             message.channel.send(ai.lit[Math.floor(Math.random() * ai.lit.length)]).catch((err) => message.channel.send('Errors are lit'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('dab')) {
            //             message.channel.send(ai.dab[Math.floor(Math.random() * ai.dab.length)]).catch((err) => message.channel.send('Dab on em errors'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('rip')) {
            //             message.channel.send(ai.rip[Math.floor(Math.random() * ai.rip.length)]).catch((err) => message.channel.send('Rip an error has occured'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('ffs')) {
            //             message.channel.send(ai.ffs[Math.floor(Math.random() * ai.ffs.length)]).catch((err) => message.channel.send('Ffs a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('ok')) {
            //             message.channel.send(ai.ok[Math.floor(Math.random() * ai.ok.length)]).catch((err) => message.channel.send('Ok an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('okay')) {
            //             message.channel.send(ai.ok[Math.floor(Math.random() * ai.ok.length)]).catch((err) => message.channel.send('Ok an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('no')) {
            //             message.channel.send(ai.no[Math.floor(Math.random() * ai.no.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yes')) {
            //             message.channel.send(ai.yes[Math.floor(Math.random() * ai.yes.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('ye')) {
            //             message.channel.send(ai.yes[Math.floor(Math.random() * ai.yes.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yea')) {
            //             message.channel.send(ai.yes[Math.floor(Math.random() * ai.yes.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yeah')) {
            //             message.channel.send(ai.yes[Math.floor(Math.random() * ai.yes.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yuh')) {
            //             message.channel.send(ai.yes[Math.floor(Math.random() * ai.yes.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yus')) {
            //             message.channel.send(ai.yes[Math.floor(Math.random() * ai.yes.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('nuu')) {
            //             message.channel.send(ai.no[Math.floor(Math.random() * ai.no.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('neh')) {
            //             message.channel.send(ai.no[Math.floor(Math.random() * ai.no.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('nah')) {
            //             message.channel.send(ai.no[Math.floor(Math.random() * ai.no.length)]).catch((err) => message.channel.send('No an error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('stfu')) {
            //             message.channel.send(ai.stfu[Math.floor(Math.random() * ai.stfu.length)]).catch((err) => message.channel.send('Stfu error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gtfo')) {
            //             message.channel.send(ai.stfu[Math.floor(Math.random() * ai.stfu.length)]).catch((err) => message.channel.send('Stfu error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('shut up')) {
            //             message.channel.send(ai.stfu[Math.floor(Math.random() * ai.stfu.length)]).catch((err) => message.channel.send('Stfu error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('shut the fuck up')) {
            //             message.channel.send(ai.stfu[Math.floor(Math.random() * ai.stfu.length)]).catch((err) => message.channel.send('Stfu error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('shut the fuck up')) {
            //             message.channel.send(ai.stfu[Math.floor(Math.random() * ai.stfu.length)]).catch((err) => message.channel.send('Stfu error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('shut tf up')) {
            //             message.channel.send(ai.stfu[Math.floor(Math.random() * ai.stfu.length)]).catch((err) => message.channel.send('Stfu error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('why')) {
            //             message.channel.send(ai.why[Math.floor(Math.random() * ai.why.length)]).catch((err) => message.channel.send('Why do errors exist'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('nice')) {
            //             message.channel.send(ai.nice[Math.floor(Math.random() * ai.nice.length)]).catch((err) => message.channel.send('Nice error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('noice')) {
            //             message.channel.send(ai.nice[Math.floor(Math.random() * ai.nice.length)]).catch((err) => message.channel.send('Nice error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('ikr')) {
            //             message.channel.send(ai.ikr[Math.floor(Math.random() * ai.ikr.length)]).catch((err) => message.channel.send('Ikr errors'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yay')) {
            //             message.channel.send(ai.yay[Math.floor(Math.random() * ai.yay.length)]).catch((err) => message.channel.send('Yay error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('yey')) {
            //             message.channel.send(ai.yay[Math.floor(Math.random() * ai.yay.length)]).catch((err) => message.channel.send('Yay error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('thicc')) {
            //             message.channel.send(ai.thicc[Math.floor(Math.random() * ai.thicc.length)]).catch((err) => message.channel.send('Thicc errors'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('good')) {
            //             message.channel.send(ai.good[Math.floor(Math.random() * ai.good.length)]).catch((err) => message.channel.send("Errors aren't good"));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('gud')) {
            //             message.channel.send(ai.good[Math.floor(Math.random() * ai.good.length)]).catch((err) => message.channel.send("Errors aren't good"));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('bad')) {
            //             message.channel.send(ai.bad[Math.floor(Math.random() * ai.bad.length)]).catch((err) => message.channel.send('Errors are bad'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('wow')) {
            //             message.channel.send(ai.wow[Math.floor(Math.random() * ai.wow.length)]).catch((err) => message.channel.send('Woah a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('whoa')) {
            //             message.channel.send(ai.wow[Math.floor(Math.random() * ai.wow.length)]).catch((err) => message.channel.send('Woah a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('woah')) {
            //             message.channel.send(ai.wow[Math.floor(Math.random() * ai.wow.length)]).catch((err) => message.channel.send('Woah a error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('meme')) {
            //             message.channel.send(ai.mem[Math.floor(Math.random() * ai.mem.length)]).catch((err) => message.channel.send('Memes are error'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('night')) {
            //             message.channel.send(ai.night[Math.floor(Math.random() * ai.night.length)]).catch((err) => message.channel.send('Nighty'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         if (message.content.toLowerCase().includes('morning')) {
            //             message.channel.send(ai.morning[Math.floor(Math.random() * ai.morning.length)]).catch((err) => message.channel.send('Mornin'));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //         //HELLO
            //         let hello = false;
            //         for (var i in ai.hello) {
            //             if (message.content.toLowerCase().startsWith(ai.hello[i].toLowerCase())) hello = true;
            //         }
            //         if (hello) {
            //             setTimeout(() => {
            //                 message.channel.send(ai.hello[Math.floor(Math.random() * ai.hello.length)]).catch((err) => message.channel.send('hello'));
            //                 console.info(message.author.tag + ': ' + message.content);
            //             }, 1000);
            //         }
            //         //HOW ARE YOU
            //         let hru = false;
            //         for (var i in ai.hru) {
            //             if (message.content.toLowerCase().includes(ai.hru[i].toLowerCase())) hru = true;
            //         }
            //         if (hru) {
            //             setTimeout(() => {
            //                 message.channel.send(ai.hrua[Math.floor(Math.random() * ai.hrua.length)]).catch((err) => message.channel.send("I'm having some issues"));
            //                 console.info(message.author.tag + ': ' + message.content);
            //             }, 1000);
            //             return;
            //         }
            //         //WELCOME
            //         let welc = false;
            //         for (var i in ai.welcome) {
            //             if (message.content.toLowerCase().includes(ai.welcome[i].toLowerCase())) welc = true;
            //         }
            //         if (welc) {
            //             setTimeout(() => {
            //                 message.channel.send(ai.hello[Math.floor(Math.random() * ai.hello.length)]).catch((err) => message.channel.send("I'm having some issues"));
            //                 console.info(message.author.tag + ': ' + message.content);
            //             }, 1000);
            //             return;
            //         }
            //         //DM
            //         if (message.content.toLowerCase().includes('dm me')) {
            //             message.author.send(ai.hello[Math.floor(Math.random() * ai.hello.length)]).catch((err) => message.channel.send("I'm having some issues"));
            //             console.info(message.author.tag + ': ' + message.content);
            //             return;
            //         }
            //     }, Math.floor(Math.random() * 3) + 0.5 * 3000);
            //     //Voice channel
            //     if (message.content.toLowerCase().includes('voice')) {
            //         const channel = message.member.voiceChannel;
            //         if (vcon == 0) {
            //             vcon = 1;
            //             channel.join();
            //             console.info(message.author.username + ' made me join a voice channel in: ' + guildName + '\n');
            //             message.channel.send('<@' + message.author.id + '>' + ' made me join a voice channel');
            //         } else {
            //             vcon = 0;
            //             channel.leave();
            //             console.info(message.author.username + ' made me leave the voice channel in: ' + guildName + '\n');
            //             message.channel.send('<@' + message.author.id + '>' + ' made me leave a voice channel');
            //         }
            //     }
            // });
        }

        Object.getOwnPropertyNames(ai).forEach(function (val, idx, array) {
            words += 1;
        });

        process.on('unhandledRejection', (err, p) => {
            console.error('No permission to respond ;-;' + '\n');
        });

        {
            console.info('v---------Bot-Info----------v');
            console.info('Logged into: ' + client.user.username);
            console.info('Active in: ' + list);
            console.info('Total words: ' + words);
            console.info('^---------Bot-Info----------^' + '\n');
        }
    }
});

//END
