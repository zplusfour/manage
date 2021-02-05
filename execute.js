#!/usr/bin/env node

module.exports = (cmd) => {
  require("child_process").exec(cmd, (err, out) => {
    if (err) throw err;
    process.stdout.write(out);
  });
};
