var helloWorld = require('./index');
var expect = require('chai').expect;

describe('Hello World Test', function() {
    it('should return Hello, World!', function() {
        expect(helloWorld()).to.equal('Hello, World!');
    });
});
