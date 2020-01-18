const pickModifier = function (numberOfModifiers) {

    var listOfModifiers = [];

    var modifiers = [
        {
            NAME: 'Primary',
            MODIFIERS: [
                {
                    name: 'Scout Rifle',
                    ammoType: 'Primary'
                },
                {
                    name: 'Sniper',
                    ammoType: 'Special'
                },
                {
                    name: 'SMG',
                    ammoType: 'Primary'
                },
                {
                    name: 'Hand Canon',
                    ammoType: 'Primary'
                },
                {
                    name: 'Auto Rile',
                    ammoType: 'Primary'
                },
                {
                    name: 'Sidearm',
                    ammoType: 'Primary'
                },
                {
                    name: 'Bow',
                    ammoType: 'Primary'
                },
                {
                    name: 'Pulse Rifle',
                    ammoType: 'Primary'
                },
                {
                    name: 'Shotgun',
                    ammoType: 'Special'
                }
            ],
            MESSAGE: 'Primary weapon must be '
        },
        {
            NAME: 'Special',
            MODIFIERS: [
                {
                    name: 'Scout Rifle',
                    ammoType: 'Primary'
                },
                {
                    name: 'Sniper',
                    ammoType: 'Special'
                },
                {
                    name: 'SMG',
                    ammoType: 'Primary'
                },
                {
                    name: 'Hand Canon',
                    ammoType: 'Primary'
                },
                {
                    name: 'Auto Rile',
                    ammoType: 'Primary'
                },
                {
                    name: 'Sidearm',
                    ammoType: 'Primary'
                },
                {
                    name: 'Bow',
                    ammoType: 'Primary'
                },
                {
                    name: 'Pulse Rifle',
                    ammoType: 'Primary'
                },
                {
                    name: 'Shotgun',
                    ammoType: 'Special'
                },
                {
                    name: 'Grenade Launcher',
                    ammoType: 'Primary'
                },
                {
                    name: 'Fusion Rifle',
                    ammoType: 'Special'
                },
            ],
            MESSAGE: 'Special weapon must be '
        },
        {
            NAME: 'Heavy',
            MODIFIERS: [
                {
                    name: 'Sword',
                    ammoType: 'Heavy'
                },
                {
                    name: 'Rocket Launcher',
                    ammoType: 'Heavy'
                },
                {
                    name: 'Grenade Launcher',
                    ammoType: 'Heavy'
                },
                {
                    name: 'Machine Gun',
                    ammoType: 'Heavy'
                }
            ],
            MESSAGE: 'Heavy weapon must be '
        },
        {
            NAME: 'Subclass',
            MODIFIERS: [
                {
                    name: 'Solar'
                },
                {
                    name: 'Void'
                },
                {
                    name: 'Arc'
                },
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

    var listOfAmmoTypes = [];

    for (var i = 1; i <= numberOfModifiers; i++) {

        if (Boolean(modifiers.length)) {

            var modifierIndex = Math.floor(Math.random() * Math.floor(modifiers.length));

            max = modifiers[modifierIndex].MODIFIERS.length;

            arrayIndex = Math.floor(Math.random() * Math.floor(max));

            if (Boolean(listOfAmmoTypes.length)) {

                for (var j = 0; j < listOfAmmoTypes.length; j++) {

                    var isCurrentAmmoSpecial = modifiers[modifierIndex].MODIFIERS[arrayIndex].ammoType === 'Special';
                    var isExistingSpecial = listOfAmmoTypes[j] === 'Special';

                    if (isCurrentAmmoSpecial === isExistingSpecial) {

                        arrayIndex = Math.floor(Math.random() * Math.floor(max));
                    }
                }
            }

            modifier = modifiers[modifierIndex].MESSAGE +
                modifiers[modifierIndex].MODIFIERS[arrayIndex].name;

            listOfModifiers.push(modifier);
            listOfAmmoTypes.push(modifiers[modifierIndex].MODIFIERS[arrayIndex].ammoType);

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
