require("dotenv").config();

const praline = require("./commands/praline");

module.exports = (config) => {

  if (config.help) {
    console.log(`Usage: truffle run sync [command]`);
    console.log(`Commands: praline`);
    return;
  }

  if (config._.length < 2) {
    console.log("No command provided. Run truffle run sync --help to see the full list.");
    return;
  }

  switch (config._[1]) {
    case "praline":
      praline(config);
      break;
    default:
      console.log("Command not found. Run truffle run sync --help to see the full list.");
  }
}