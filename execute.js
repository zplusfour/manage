#!/usr/bin/env node

require('colors');

module.exports = (cmd) => {
  require("child_process").exec(cmd, (err, out) => {
    if (err) process.stdout.write(`Command ${err.cmd} returned an error.`.underline.red);
    process.stdout.write(out);
  });
};