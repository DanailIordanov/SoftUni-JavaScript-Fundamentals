let jsdom = require('jsdom-global')();
let $ = require('jquery');

let expect = require('chai').expect;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('sharedObjectTests', function () {
    let targetHtml;
    beforeEach(() => {
        document.body.innerHTML = '<div id="wrapper">' +
            '<input type="text" id="name">' +
            '<input type="text" id="income">' +
            '</div>';

        targetHtml = $('#wrapper');
        sharedObject.name = null;
        sharedObject.income = null;
    });

    it('should have name initially set to null', function () {
        expect(sharedObject.name).to.equal(null, 'Name is not initially set to null');
    });
    
    it('should have income initially set to null', function () {
        expect(sharedObject.income).to.equal(null, 'Income is not initially set to null');
    });

    it('should not change value of name with an empty string as input parameter', function () {
        sharedObject.changeName('');

        let name = $('#name').val();
        expect(name).to.equal('', 'A change has been made to the html');
        expect(sharedObject.name).to.equal(null, 'A change has been made to the object');
    });

    it('should change value of name with correct input parameter', function () {
        sharedObject.changeName('someName');

        let name = $('#name').val();
        expect(name).to.equal('someName', 'A change should have been made to the html');
        expect(sharedObject.name).to.equal('someName', 'A change should have been made to the object');
    });

    it('should not change value of income with a string as input parameter', function () {
        sharedObject.changeIncome('someString');

        let income = $('#income').val();
        expect(income).to.equal('', 'A change has been made to the html');
        expect(sharedObject.income).to.equal(null, 'A change has been made to the object');
    });

    it('should not change value of income with a negative number as input parameter', function () {
        sharedObject.changeIncome(-150);

        let income = $('#income').val();
        expect(income).to.equal('', 'A change has been made to the html');
        expect(sharedObject.income).to.equal(null, 'A change has been made to the object');
    });

    it('should change value of income with correct input parameter', function () {
        sharedObject.changeIncome(750);

        let income = $('#income').val();
        expect(income).to.equal('750', 'A change should have been made to the html');
        expect(sharedObject.income).to.equal(750, 'A change should have been made to the object');
    });

    it('should not update value of name when value of input box is an empty string', function () {
        let name = $('#name');
        name.val(null);

        sharedObject.updateName();
        expect(sharedObject.name).to.equal(null, 'A change has been made to the object');
    });

    it('should update value of name when value of input box is a string', function () {
        let name = $('#name');
        name.val('someName');

        sharedObject.updateName();
        expect(sharedObject.name).to.equal(name.val(), 'A change should have been made to the object');
    });

    it('should not update value of income when value of input box is not a number', function () {
        let income = $('#income');
        income.val({someProp: 'someText'});

        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(null, 'A change has been made to the object');
    });

    it('should not update value of income when value of input box is negative number', function () {
        let income = $('#income');
        income.val('-8000');

        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(null, 'A change has been made to the object');
    });

    it('should update value of income when value of input box is positive number', function () {
        let income = $('#income');
        income.val('500');

        sharedObject.updateIncome();
        expect(sharedObject.income).to.equal(+income.val(), 'A change should have been made to the object');
    });
});