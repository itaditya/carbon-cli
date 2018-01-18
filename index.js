#!/usr/bin/env node

const program = require('commander');
const open = require("open");
const fs = require("fs");

program
    .version('1.0.0')
    .option('-f, --file', 'generate code image for which file')
    .action(file => {
        const snippet = fs.readFileSync(file);
        const url = `https://carbon.now.sh/?bg=rgba(66,66,72,1)&t=seti&l=auto&ds=true&wc=true&wa=true&pv=48px&ph=32px&ln=false&code=${encodeURI(snippet)}`;
        open(url, "chrome");
    })
    .parse(process.argv);
