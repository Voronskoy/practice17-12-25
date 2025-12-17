import os from "node:os";
import chalk from "chalk";
import getRandomCompliment from "./compliments.js";

console.log(chalk.bgBlue(getRandomCompliment()));
console.log(chalk.bgGreen(os.userInfo().username));
