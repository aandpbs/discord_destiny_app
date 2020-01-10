const pickActivity = function () {

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

    var max = activities.length;

    var arrayIndex = Math.floor(Math.random() * Math.floor(max));

    return activities[arrayIndex];
}

module.exports = pickActivity