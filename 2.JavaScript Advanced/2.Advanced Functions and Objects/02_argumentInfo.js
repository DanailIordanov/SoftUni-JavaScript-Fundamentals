function displayInformation() {
    let resultList = [];
    for (let i = 0; i < arguments.length; i++) {
        let currentObj = arguments[i];
        let typeOfCurrentObj = typeof currentObj;
        if (!resultList[typeOfCurrentObj]) {
            resultList[typeOfCurrentObj] = 1;
        } else {
            resultList[typeOfCurrentObj]++;
        }
        console.log(`${typeOfCurrentObj}: ${currentObj}`);
    }

    let sortedResultList = [];
    for (let type in resultList) {
        sortedResultList.push([type, resultList[type]]);
    }

    sortedResultList.sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sortedResultList.length; i++) {
        console.log(`${sortedResultList[i][0]} = ${sortedResultList[i][1]}`);
    }
}

displayInformation(42, 'cat', 15, 'kitten', 'tomcat');