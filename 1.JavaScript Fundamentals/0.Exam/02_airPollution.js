function getPollutedBlocks(matrix, effectsOnMap) {
    let mapOfSofia = [];
    for(let i = 0; i < 5; i++) {
        mapOfSofia.push(matrix[i].split(' ').map(Number));
    }

    //let effects = {};
    //for(let i = 0; i < effectsOnMap.length; i++) {
    //    let effectsParams = effectsOnMap[i].split(' ');
    //    effects[effectsParams[0]] = Number(effectsParams[1]);
    //}

    for (let effect in effectsOnMap) {
        let effectParams = effectsOnMap[effect].split(' ');
        let effectName = effectParams[0];
        let effectValue = Number(effectParams[1]);
        switch (effectName) {
            case 'breeze':
                for(let i = 0; i < 5; i++) {
                    mapOfSofia[effectValue][i] -= 15;
                    if(mapOfSofia[effectValue][i] < 0) {
                        mapOfSofia[effectValue][i] = 0;
                    }
                }
                break;
            case 'gale':
                for(let i = 0; i < 5; i++) {
                    mapOfSofia[i][effectValue] -= 20;
                    if(mapOfSofia[i][effectValue] < 0) {
                        mapOfSofia[i][effectValue] = 0;
                    }
                }
                break;
            case 'smog':
                for(let i = 0; i < 5; i++) {
                    for(let j = 0; j < 5; j++) {
                        mapOfSofia[i][j] += effectValue;
                    }
                }
                break;
        }
    }
    
    let result = [];
    for(let i = 0; i < 5; i++) {
        for(let j = 0; j < 5; j++) {
            if(mapOfSofia[i][j] >= 50) {
                result.push(`[${i}-${j}]`);
            }
        }
    }

    if(result.some(x => x)) {
        console.log(`Polluted areas: ${result.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }

}

getPollutedBlocks([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
);