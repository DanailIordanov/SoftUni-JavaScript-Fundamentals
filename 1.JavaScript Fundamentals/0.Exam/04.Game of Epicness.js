function gameOfEpicness(objects, battles) {
    let kingdoms = [];
    for (let obj in objects) {
        if (kingdoms.some(x => x.kingdom === objects[obj].kingdom)) {
            let currentKingdom = kingdoms.find(x => x.kingdom === objects[obj].kingdom);
            if(currentKingdom.generals.some(x => x.general === objects[obj].general)) {
                let currentGeneral = currentKingdom.generals.find(x => x.general === objects[obj].general);
                currentGeneral.army += Number(objects[obj].army);
            } else {
                currentKingdom
                    .generals
                    .push({
                        'general': objects[obj].general,
                        'army': Number(objects[obj].army),
                        'wins': 0,
                        'loses': 0
                    });
            }
        } else {
            let currentKingdom = {};
            currentKingdom['kingdom'] = objects[obj].kingdom;
            currentKingdom['generals'] = [];
            currentKingdom['generals']
                .push({
                    'general': objects[obj].general,
                    'army': Number(objects[obj].army),
                    'wins': 0,
                    'loses': 0 });
            currentKingdom['totalWins'] = 0;
            currentKingdom['totalLoses'] = 0;
            kingdoms.push(currentKingdom);
        }

    }

    for (let battle in battles) {
        let attackingKingdom = kingdoms.find(k => k.kingdom === battles[battle][0]);
        let attackingGeneral = attackingKingdom.generals.find(k => k.general === battles[battle][1]);
        let deffendingKingdom = kingdoms.find(k => k.kingdom === battles[battle][2]);
        let deffendingGeneral = deffendingKingdom.generals.find(k => k.general === battles[battle][3]);
        if(attackingKingdom.kingdom == deffendingKingdom.kingdom) {
            continue;
        }
        if(attackingGeneral.army > deffendingGeneral.army) {
            attackingGeneral.army *= 1.1;
            attackingGeneral.wins++;
            deffendingGeneral.army *= 0.9;
            deffendingGeneral.loses++;
        } else if (attackingGeneral.army < deffendingGeneral.army) {
            attackingGeneral.army *= 0.9;
            attackingGeneral.loses++;
            deffendingGeneral.army *= 1.1;
            deffendingGeneral.wins++;
        }

        attackingGeneral.army = Math.trunc(attackingGeneral.army);
        deffendingGeneral.army = Math.trunc(deffendingGeneral.army);

    }

    for (let kingdom of kingdoms) {
        let totalWins = 0;
        let totalLoses = 0;
        for (let general of kingdom.generals) {
            totalWins += general.wins;
            totalLoses += general.loses;
        }
        kingdom.totalWins += totalWins;
        kingdom.totalLoses += totalLoses;
    }

    kingdoms
        .sort((k1, k2) => {
            let wins = k2.totalWins - k1.totalWins;
            if(wins !== 0) {
                return wins;
            }
            let losses = k1.totalLoses - k2.totalLoses;
            if(losses !== 0) {
                return losses;
            }
            if(k1.kingdom > k2.kingdom) {
                return 1;
            }
            if(k1.kingdom < k2.kingdom) {
                return -1;
            }
            return 0;
        });

    console.log(`Winner: ${kingdoms[0].kingdom}`);
    for (let general of kingdoms[0].generals.sort((g1, g2) => g2.army - g1.army)) {
        console.log(`/\\general: ${general.general}`);
        console.log(`---army: ${general.army}`);
        console.log(`---wins: ${general.wins}`);
        console.log(`---losses: ${general.loses}`);
    }
}

gameOfEpicness(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
);