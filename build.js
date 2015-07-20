var fs = require('fs')
var parse = require('json-schema-to-markdown')
var schema = require('./schema.json')
var parsed = parse(schema)
fs.writeFileSync('./schema.md', parsed, 'utf8')