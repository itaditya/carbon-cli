#!/usr/bin/env node

const program = require('commander');
const open = require("open");
const fs = require("fs");
const path = require('path');

program
    .version('1.0.0')
    .option('-f, --file', 'generate code image for which file')
    .action(file => {
        file = path.join(process.cwd(), file)
        const snippet = fs.readFileSync(file).toString();
        if(snippet.length >= 1500) {
          console.log('File too big !!');
          return;
        }
        const url = `https://carbon.now.sh/?bg=rgba(66,66,72,1)&t=seti&l=auto&ds=true&wc=true&wa=true&pv=48px&ph=32px&ln=false&code=${encodeURIComponent(snippet)}`;
        open(url, "chrome");
    })
    .parse(process.argv);
