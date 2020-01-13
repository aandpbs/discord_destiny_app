const pickModifier = function (numberOfModifiers) {

    var listOfModifiers = [];

    var modifiers = [
        {
            NAME: 'Primary',
            MODIFIERS: [
                'Scout Rifle',
                'Sidearm',
                'Sniper',
                'SMG',
                'Hand Canon',
                'Auto Rile',
                'Bow',
                'Grenade Launcher',
                'Pulse Rifle',
                'Shotgun'
            ],
            MESSAGE: 'Primary weapon must be '
        },
        {
            NAME: 'Special',
            MODIFIERS: [
                'Scout Rifle',
                'Sidearm',
                'Sniper',
                'SMG',
                'Hand Canon',
                'Auto Rile',
                'Bow',
                'Grenade Launcher',
                'Pulse Rifle',
                'Shotgun'
            ],
            MESSAGE: 'Special weapon must be '
        },
        {
            NAME: 'Heavy',
            MODIFIERS: [
                'Sword',
                'Rocket Launcher',
                'Grenade Launcher',
                'Sniper'
            ],
            MESSAGE: 'Heavy weapon must be '
        },
        {
            NAME: 'Subclass',
            MODIFIERS: [
                'Solar',
                'Void',
                'Arc',
            ],
            MESSAGE: 'Subclass must be '
        },
    ];

    var randomModifiers = [
        {
            NAME: 'Random',
            MODIFIERS: [
                'Cannot Use Supers',
                'No Exotics (Armor or Weapon)',
                'Abilities Only (Grenade/Super/Melee)',
            ],
            MESSAGE: ''
        }
    ];

    var lastIndex = '';
    var arrayIndex = '';
    var max = '';
    var modifier = '';

    for (var i = 1; i <= numberOfModifiers; i++) {

        if (Boolean(modifiers.length)) {

            var modifierIndex = Math.floor(Math.random() * Math.floor(modifiers.length));

            max = modifiers[modifierIndex].MODIFIERS.length;

            arrayIndex = Math.floor(Math.random() * Math.floor(max));

            modifier = modifiers[modifierIndex].MESSAGE +
                modifiers[modifierIndex].MODIFIERS[arrayIndex];

            listOfModifiers.push(modifier);

            modifiers.splice(modifierIndex, 1);

        } else {

            max = randomModifiers[0].MODIFIERS.length;

            arrayIndex = Math.floor(Math.random() * Math.floor(max));

            modifier = randomModifiers[0].MESSAGE +
                randomModifiers[0].MODIFIERS[arrayIndex];

            listOfModifiers.push(modifier);

            randomModifiers[0].MODIFIERS.splice(arrayIndex, 1);
        }
    }

    return listOfModifiers;
};

module.exports = pickModifier