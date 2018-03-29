function printInXML(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for(let i = 0; i < input.length; i += 2){
        let question = input[i];
        let answer = input[i+1];
        printQuestion(question);
        printAnswer(answer);
    }
    console.log('</quiz>');

    function printQuestion(question) {
        console.log('  <question>');
        console.log(`    ${question}`);
        console.log('  </question>');
    }

    function printAnswer(answer) {
        console.log('  <answer>');
        console.log(`    ${answer}`);
        console.log('  </answer>');
    }
}