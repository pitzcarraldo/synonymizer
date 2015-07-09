var expect = require("chai").expect;
var Synonymizer = require("../lib");
var synonymizer = new Synonymizer(__dirname + "/dictionary.csv");

describe("Synonymizer", function() {
    describe("#synonymize()", function () {
        it("should return synonymized words from one word", function () {
            var actual = synonymizer.synonymize("APC");
            expect(actual).to.equal("아페세");
        });

        it("should return synonymized words from words with whitespace", function () {
            var actual = synonymizer.synonymize("에잇 세컨 청바지");
            expect(actual).to.equal("에잇세컨즈 청바지");
        });
    });
});