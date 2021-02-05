#!/usr/bin/env node

const execute = require('./execute');
const fs = require('fs');
const colors = require('colors');
const atob = (str) => {return Buffer.from(str).toString("binary")};

((argv) => {
  const m = JSON.parse(atob(fs.readFileSync("Managefile")));
  if (argv.length < 3)  console.log("Create a Managefile and add your targets.".underline.green);
  else {
    try {
      execute(`${m[argv[2]].cmd}`)
    } catch (e) {
      console.log("An error occured".underline.red);
    }
  }
})(process.argv);