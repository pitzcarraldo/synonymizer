[![Build Status](https://travis-ci.org/Pitzcarraldo/synonymizer.svg?branch=master)](https://travis-ci.org/Pitzcarraldo/synonymizer)

Synonymizer
===========
Simple Synonymize Engine for Node.js Based on Solr/ElasticSearch Synonyms Format.

Installation
------------
> npm install synonymizer

Usage
-----

synonyms.txt

```csv
APC,A.P.C,アー・ペー・セー,아페세
...
```

yourApp.js
```javascript
var Synonymizer = require('synonymizer');
var synonymizer = new Synonymizer('./synonyms.txt');
var synonymizeWords = synonymizer.synonymize('アー・ペー・セー Jean');
console.log(synonymizeWords); //print 'APC Jean'
```

API
---

### new Synonymizer(synonymFilePath)

* `synonymFilePath`: The file path of solr format (see http://wiki.apache.org/solr/AnalyzersTokenizersTokenFilters#solr.SynonymFilterFactory)

Returns an new instance of Synonymizer.

### synonymizer.synonymize(inputString)

* `inputString`: The string for syonymize.

Returns string replaced by synonyms.