#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Content of the card + styles
const cardData = {
  labelWork: chalk.white.italic("       Work:"),
  labelLinkedIn: chalk.white.italic("   LinkedIn:"),
  labelGitHub: chalk.white.italic("     GitHub:"),
  labelNpm: chalk.white.italic("        npm:"),
  labelCard: chalk.white.italic("       Card:"),

  name: chalk.green("                  Donovan Herion"),
  work: chalk.green("Junior Full Stack Web Developer"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.gray("donovan-hérion"),
  github: chalk.gray("https://github.com/") + chalk.gray("donovan-herion"),
  npm: chalk.gray("https://npmjs.com/") + chalk.gray("~donovan-herion"),
  npx: chalk.red("npx") + " " + chalk.red("@donovan-herion/npx-card"),
};

// Lines
const newLine = "\n";
const emptyLine = "";

// Print
console.log(
  chalk.green(
    boxen(
      [
        `${cardData.name}`,
        emptyLine,
        `${cardData.labelWork} ${cardData.work}`,
        emptyLine,
        `${cardData.labelLinkedIn} ${cardData.linkedin}`,
        `${cardData.labelGitHub} ${cardData.github}`,
        `${cardData.labelNpm} ${cardData.npm}`,
        emptyLine,
        `${cardData.labelCard} ${cardData.npx}`,
      ].join(newLine),
      {
        padding: 1,
        margin: 1,
        borderStyle: "classic",
      }
    )
  )
);
