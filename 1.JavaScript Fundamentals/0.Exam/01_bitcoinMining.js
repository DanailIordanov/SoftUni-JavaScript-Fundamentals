function minedGold(input) {
    let daysOfPurchase = [];
    let boughtBitcoins = 0;
    let money = 0;
    for (let i = 0; i < input.length; i++) {
        let currentDayGold = Number(input[i]);
        if (i % 3 === 2) {
            currentDayGold *= 0.7;
        }

        let currentDayMoney = currentDayGold * 67.51;
        money += currentDayMoney;

        while (money >= 11949.16) {
            money -= 11949.16;
            boughtBitcoins++;
            daysOfPurchase.push(i + 1);
        }
    }
    
    if(boughtBitcoins > 0) {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${daysOfPurchase[0]}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: 0`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }
}

minedGold([3124.15, 504.212, 2511.124]);