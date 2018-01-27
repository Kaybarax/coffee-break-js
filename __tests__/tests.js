
let assert = require('assert');

//test test
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', () => assert.equal(-1, [1,2,3].indexOf(4)));
    });
});
