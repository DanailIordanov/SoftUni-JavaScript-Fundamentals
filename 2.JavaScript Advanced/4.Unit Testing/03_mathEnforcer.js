let expect = require('chai').expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcerTests', function () {
    describe('addFive', function () {
        it('should return undefined with a non-number parameter', function () {
            expect(mathEnforcer.addFive('someString')).to.equal(undefined, 'Function did not return correct result!');
        });
        it('should return correct result with a negative number parameter', function () {
            expect(mathEnforcer.addFive(-100)).to.equal(-95, 'Function did not return correct result!');
        });
        it('should return correct result with a floating point number parameter', function () {
            expect(mathEnforcer.addFive(8.76783)).to.be.closeTo(13.76783, 0.01, 'Function did not return correct result!');
        });
    });
    describe('subtractTen', function () {
        it('should return undefined with a non-number parameter', function () {
            expect(mathEnforcer.subtractTen('someString')).to.equal(undefined, 'Function did not return correct result!');
        });
        it('should return correct result with a negative number parameter', function () {
            expect(mathEnforcer.subtractTen(-90)).to.equal(-100, 'Function did not return correct result!');
        });
        it('should return correct result with a floating point number parameter', function () {
            expect(mathEnforcer.subtractTen(97.1983)).to.be.closeTo(87.1983, 0.01, 'Function did not return correct result!');
        });
    });
    describe('sum', function () {
        it('should return undefined with a non-number first parameter', function () {
            expect(mathEnforcer.sum('someString', 10)).to.equal(undefined, 'Function did not return correct result!');
        });
        it('should return undefined with a non-number second parameter', function () {
            expect(mathEnforcer.sum(10, {name: 'Ivan'})).to.equal(undefined, 'Function did not return correct result!');
        });
        it('should return correct result with a negative number parameters', function () {
            expect(mathEnforcer.sum(-100, -50)).to.equal(-150, 'Function did not return correct result!');
        });
        it('should return correct result with one negative number parameter', function () {
            expect(mathEnforcer.sum(100, -50)).to.equal(50, 'Function did not return correct result!');
        });
        it('should return correct result with floating point number parameters', function () {
            expect(mathEnforcer.sum(8.76783, 11.53)).to.be.closeTo(20.29783, 0.01, 'Function did not return correct result!');
        });
    });
});