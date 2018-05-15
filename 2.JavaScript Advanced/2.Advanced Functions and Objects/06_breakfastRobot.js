function calculateMacros() {
    let carbohydrates = 0;
    let fats = 0;
    let proteins = 0;
    let flavour = 0;

    function manager(input) {
        let inputParams = input.split(' ').filter(x => x !== '');
        let command = inputParams[0];
        let quantity = inputParams[2];

        if (command === 'restock') {
            let macroelement = inputParams[1];
            return restock(macroelement, quantity);
        } else if (command === 'prepare') {
            let recipe = inputParams[1];
            return prepare(recipe, quantity);
        } else {
            return report();
        }
    }

    return manager;

    function restock(macroelement, quantity) {
        switch (macroelement) {
            case 'carbohydrate':
                carbohydrates += Number(quantity);
                break;
            case 'fat':
                fats += Number(quantity);
                break;
            case 'protein':
                proteins += Number(quantity);
                break;
            case 'flavour':
                flavour += Number(quantity);
                break;
        }

        return 'Success';
    }

    function prepare(recipe, quantity) {
        let neededCarbohydrates = 0;
        let neededFats = 0;
        let neededProteins = 0;
        let neededFlavour = 0;

        if (recipe === 'apple') {
            neededCarbohydrates = 1 * quantity;
            neededFlavour = 2 * quantity;

            if (carbohydrates >= neededCarbohydrates) {
                if (flavour >= neededFlavour) {
                    carbohydrates -= neededCarbohydrates;
                    flavour -= neededFlavour;
                } else {
                    return 'Error: not enough flavour in stock';
                }
            } else {
                return 'Error: not enough carbohydrate in stock';
            }
        } else if (recipe === 'coke') {
            neededCarbohydrates = 10 * quantity;
            neededFlavour = 20 * quantity;

            if (carbohydrates >= neededCarbohydrates) {
                if (flavour >= neededFlavour) {
                    carbohydrates -= neededCarbohydrates;
                    flavour -= neededFlavour;
                } else {
                    return 'Error: not enough flavour in stock';
                }
            } else {
                return 'Error: not enough carbohydrate in stock';
            }
        } else if (recipe === 'burger') {
            neededCarbohydrates = 5 * quantity;
            neededFats = 7 * quantity;
            neededFlavour = 3 * quantity;

            if (carbohydrates >= neededCarbohydrates) {
                if (fats >= neededFats) {
                    if (flavour >= neededFlavour) {
                        carbohydrates -= neededCarbohydrates;
                        fats -= neededFats;
                        flavour -= neededFlavour;
                    } else {
                        return 'Error: not enough flavour in stock';
                    }
                } else {
                    return 'Error: not enough fat in stock';
                }
            } else {
                return 'Error: not enough carbohydrate in stock';
            }
        } else if (recipe === 'omelet') {
            neededFats = 1 * quantity;
            neededProteins = 5 * quantity;
            neededFlavour = 1 * quantity;

            if (proteins >= neededProteins) {
                if (fats >= neededFats) {
                    if (flavour >= neededFlavour) {
                        fats -= neededFats;
                        proteins -= neededProteins;
                        flavour -= neededFlavour;
                    } else {
                        return 'Error: not enough flavour in stock';
                    }
                } else {
                    return 'Error: not enough fat in stock';
                }
            } else {
                return 'Error: not enough protein in stock';
            }
        } else if (recipe === 'cheverme') {
            neededCarbohydrates = 10 * quantity;
            neededFats = 10 * quantity;
            neededProteins = 10 * quantity;
            neededFlavour = 10 * quantity;

            if (proteins >= neededProteins) {
                if (carbohydrates >= neededCarbohydrates) {
                    if (fats >= neededFats) {
                        if (flavour >= neededFlavour) {
                            carbohydrates -= neededCarbohydrates;
                            fats -= neededFats;
                            proteins -= neededProteins;
                            flavour -= neededFlavour;
                        } else {
                            return 'Error: not enough flavour in stock';
                        }
                    } else {
                        return 'Error: not enough fat in stock';
                    }
                } else {
                    return 'Error: not enough carbohydrate in stock';
                }
            } else {
                return 'Error: not enough protein in stock';
            }
        } else {
            return;
        }

        return 'Success';
    }

    function report() {
        return `protein=${proteins} carbohydrate=${carbohydrates} fat=${fats} flavour=${flavour}`;
    }
}

let result = calculateMacros();

let resultSet = ['restock carbohydrate 10',
    'restock flavour 10',
    'prepare apple 1',
    'restock fat 10',
    'prepare burger 1',
    'report'
];

for (let i = 0; i < resultSet.length; i++) {
    console.log(result(resultSet[i]));;
}