"use strict";
var _ = require("lodash");
var fs = require("fs");
var synonyms = require("solr-synonyms");
var SEPARATOR = " ";

var splitByTwoWords = function (words) {
    var splitWords = words.split(SEPARATOR);
    var splitByTwoWords = [];
    for (var i = 0; i < splitWords.length - 1; i++) {
        splitByTwoWords.push([splitWords[i], splitWords[i + 1]].join(" "));
    }
    return splitByTwoWords;
};

module.exports = function (dictionaryPath) {
    var self = this;
    this.dictionary = synonyms.parse(fs.readFileSync(dictionaryPath).toString());
    this.synonymize = function (words) {
        words = words.toLowerCase();
        _.each(splitByTwoWords(words), function(word){
            if(self.dictionary[word]) {
                words = words.replace(new RegExp(word,"g"), self.dictionary[word][0]);
            }
        });
        _.each(words.split(SEPARATOR), function(word){
            if(self.dictionary[word]) {
                words = words.replace(new RegExp(word,"g"), self.dictionary[word][0]);
            }
        });
        return words;
    };
    return this;
};