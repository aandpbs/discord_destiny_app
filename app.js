require('dotenv').config();
const Discord = require('discord.js');
const randomTeams = require('./randomTeams.js');
const randomActivity = require('./randomActivity.js');
const randomModifier = require('./randomModifier.js');

const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {

    // if (msg.author.username === 'aguynameddave') {
    //
    //     msg.channel.send('Okay boss');
    // }

    var emoji = ':poop:';
    var channel = msg.channel.name;
    var mentions = msg.mentions.everyone;
    var author = msg.author.username;

    if (channel === 'lfg-ps4' && Boolean(mentions) && author === 'aguynameddave') {

        msg.channel.send(emoji);
    }

    if (msg.content === '!activity') {

        const activity = randomActivity();

        msg.channel.send(activity);

    } else if (msg.content.startsWith('!players')) {

        const players = msg.mentions.users.array();

        var names = [];

        for (var i = 0; i < players.length; i++) {

            names.push(players[i].username);
        }

        const teams = randomTeams(names);

        const firstTeam = teams.firstTeam;
        const secondTeam = teams.secondTeam;

        msg.channel.send('First Team: ' + firstTeam);
        msg.channel.send('Second Team: ' + secondTeam);
    } else if (msg.content === '!help') {

        const helpMsg = 'To have an activity chosen at random, enter !activity.' +
            ' to have a modifier for an activity chosen at random, enter !modifier.' +
            ' To have up to 4 different random modifiers chosen, enter !modifier + the number of modifiers you want.' +
            ' For example: !modifier 3 will result in 3 random modifiers being chosen.' +
            ' To have a group of players split up in to two random teams, enter !players followed by' +
            ' the list of players. For example: !players @playerOne @playerTwo @playerThree @playerFour';

        msg.channel.send(helpMsg);
    } else if (msg.content.startsWith('!modifier')) {

        var numberOfModifiers = msg.content.replace('!modifier', '');

        numberOfModifiers = Boolean(numberOfModifiers) ? numberOfModifiers : 1;

        if (numberOfModifiers == 69) {

            msg.channel.send('https://giphy.com/gifs/69-l378u7ekKJ4qyPp7y');

        } else if (numberOfModifiers == 420) {

            msg.channel.send('https://giphy.com/gifs/3jcgPn9fzfaXc1EHJC');

        } else {

            const modifier = randomModifier(numberOfModifiers);

            msg.channel.send(modifier);
        }

    } else if (msg.content === '!nahb') {

        msg.channel.send('Go fuck yourself');
    }
});
