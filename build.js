#!/usr/bin/env node

var fs = require('fs');
var exec = require('child_process').execSync;

var md = fs.readFileSync('bugs.md', 'utf8');
var parts = md.split('<!-- toc -->');
fs.writeFileSync('0.md', parts[0], 'utf8');
fs.writeFileSync('1.md', parts[1], 'utf8');

exec('pandoc 1.md -o index.html --template=tpl --toc');
var content = fs.readFileSync('index.html', 'utf8');
content = content.replace('<body>', '<body>\n' + exec('pandoc 0.md'));
fs.writeFile('index.html', content, 'utf8');

fs.unlink('0.md');
fs.unlink('1.md');