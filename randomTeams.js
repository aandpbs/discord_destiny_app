const pickRandoms = function (array) {

    var max = array.length;
    var half = max / 2;

    var firstTeam = array;
    var secondTeam = [];

    var lastIndex = '';

    for (var i = 0; i < half; i++) {

        var arrayIndex = Math.floor(Math.random() * Math.floor(max));

        while (arrayIndex === lastIndex) {

            arrayIndex = Math.floor(Math.random() * Math.floor(max));
        }

        var removed = firstTeam.splice(arrayIndex, 1);

        secondTeam.push(removed[0]);

        max--;

        lastIndex = arrayIndex;
    }

    return {firstTeam: firstTeam, secondTeam: secondTeam};
};

module.exports = pickRandoms;

