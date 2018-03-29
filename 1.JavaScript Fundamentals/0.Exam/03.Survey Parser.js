function parseSurvey(input) {
    let firstRegex = new RegExp('.*<svg>(.+)<\\/svg>.*', 'gm');
    let secondRegex = new RegExp('<cat><text>.+?\\[(.+)\\]<\\/text><\\/cat>\\s*<cat>((<g><val>.+<\\/val>.+<\\/g>)+)<\\/cat>', 'gm');
    let match = firstRegex.exec(input);
    if (match !== null) {
        let insidePart = secondRegex.exec(match[1]);
        if(insidePart !== null) {
            let label = insidePart[1];
            let ratings = insidePart[2];
            let validRatings = ratings.match(/<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/gm);
            let numberOfRatings = 0;
            let ratingValue = 0;
            for (let rating of validRatings) {
                let ratingParams = /<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>/gm.exec(rating);
                if(ratingParams == null) {
                    console.log('Invalid format');
                    continue;
                }
                numberOfRatings += Number(ratingParams[2]);
                ratingValue += ratingParams[1] * ratingParams[2];
            }
            let averageRating = ratingValue / numberOfRatings;
            console.log(`${label}: ${Math.round(averageRating * 100) / 100}`);
        } else {
            console.log('Invalid format')
        }

    } else {
        console.log('No survey found');
    }
}

parseSurvey('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>');
//parseSurvey('<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>');
//parseSurvey('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
//parseSurvey('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>');