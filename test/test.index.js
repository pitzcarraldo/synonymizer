var expect = require('chai').expect;
var Synonymizer = require('../lib');
var synonymizer = new Synonymizer(__dirname + '/dictionary.csv');

describe('Synonymizer', function() {
    describe('#synonymize()', function () {
        it('should return synonymized words from one word', function (done) {
            synonymizer.synonymize('APC', function(err, result){
                expect(result).to.equal('아페세');
                done();
            });
        });

        it('should return synonymized words from words with whitespace', function (done) {
            synonymizer.synonymize('에잇 세컨', function(err, result){
                expect(result).to.equal('에잇세컨즈');
                done();
            });
        });
    });
});