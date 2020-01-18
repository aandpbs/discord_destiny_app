const pickActivity = function (randomThing) {

    var maps = [
        "Altar of Flame",
        "Convergence",
        "Citadel",
        "Distant Shore",
        "Emperor's Respite",
        "Endless Vale",
        "Eternity",
        "Firebase Echo",
        "Fragment",
        "Gambler's Ruin",
        "Javelin-4",
        "Legion's Gulch",
        "Midtown",
        "Retribution",
        "Rusted Lands",
        "The Dead Cliffs",
        "The Fortress",
        "Twlight Gap",
        "Vostok",
        "Widow's Court",
        "Wormhaven",
        "Pacifica",
        "Radiant Cliffs",
        "The Burnout",
        "Solitude",
        "Meltdown",
    ];

    var activities = [
        'Private Gambit Matches',
        'Private PvP Matches',
        'High Score Nightfall',
        'Strike Races',
        'Leviathan',
        'Prestige Leviathan',
        'Eater of Worlds',
        'Prestige Eater Of Worlds',
        'Spire of Stars',
        'Prestige Spire of Stars',
        'Last Wish',
        'Crown of Sorrows',
        'Scourge of the Past',
        'PvP Tournament'
    ];

    var arr = '';

    if (randomThing === 'map') {

        arr = maps;
    } else if (randomThing === 'activity') {

        arr = activities
    }

    var max = arr.length;

    var arrayIndex = Math.floor(Math.random() * Math.floor(max));

    return arr[arrayIndex];
}

module.exports = pickActivity
