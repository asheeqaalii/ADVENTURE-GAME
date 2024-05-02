#! user/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let startGame = await inquirer.prompt({
    name: "start",
    message: chalk.grey("\n\t CLICK HERE TO START THE GAME"),
    type: "list",
    choices: ["\t START THE GAME"],
});
console.log(chalk.bgMagenta("\n\t WELCOM TO THE GENSHIN IMPACT WORLD\n\t"));
let arRank = 50;
let worldLvl = 6;
let primoGems = 80000;
let playerHp = "50,000";
console.log(chalk.green("\n\t AR RANK :", arRank));
console.log(chalk.green("\t WORLD LVL :", worldLvl));
console.log(chalk.green("\t PRIMOGEMS :", primoGems));
let dailyQuest = await inquirer.prompt({
    name: "dalies",
    message: chalk.blue("\nYOU HAVE A QUEST DO IT NOW OTHERWISE U WILL 85 PRIMOGEMS "),
    choices: [chalk.yellow("Accept"), chalk.yellow("Reject")],
    type: "list",
});
if (dailyQuest.dalies === chalk.yellow("Accept")) {
    let givingQuest = await inquirer.prompt({
        name: "quest",
        message: chalk.redBright("\n\t DEFEAT ANY TYPE OF ENEMY/BOSS"),
    });
}
else {
    console.log(chalk.blue("GAME IS OVER BEFORE IT STARTED"));
}
let defeatEnemy = await inquirer.prompt({
    name: "enemies",
    type: "list",
    choices: [
        chalk.yellow("COMMON ENEMIES"),
        chalk.yellow("ELITE ENEMIES"),
        chalk.yellow("NORMAL BOSS"),
        chalk.yellow("WEEKLY BOSS"),
    ],
    message: chalk.blue("\nWHICH ENEMY/BOSS U WANNA FIGHT?"),
});
console.log(chalk.green("\n\t YOUR CHARACTER IS AT LVL 90"));
console.log(chalk.green("\t YOUR OPPONENT IS AT LVL 80"));
//COMMON ENEMIES
if (defeatEnemy.enemies === chalk.yellow("COMMON ENEMIES")) {
    console.log(chalk.redBright("\n\t DEFEAT 4 HILLICHURLS"));
}
if (defeatEnemy.enemies === chalk.yellow("COMMON ENEMIES")) {
    let chooseCharacter = await inquirer.prompt({
        name: "character",
        message: chalk.blue("\nWHICH CHARACTER U WANNA FIGHT WITH?"),
        type: "list",
        choices: [
            chalk.yellow("DILUC"),
            chalk.yellow("KAZUHA"),
            chalk.yellow("ZHONGLI"),
            chalk.yellow("FURINA"),
        ],
    });
    if (chooseCharacter.character === chalk.yellow("DILUC")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 6000 DMG.THE OPPONENTS ARE DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("KAZUHA")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 10,000 DMG.THE OPPONENTS ARE DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("ZHONGLI")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 16K DMG.THE OPPONENTS ARE DEAD"));
    }
    else {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 10K DMG.THE OPPONENTS ARE DEAD"));
    }
    console.log(chalk.green("\n\t CONGRATULATION!! U GOT 85 PRIMOGEMS"));
    console.log(chalk.green(`\n\t TOTAL PRIMOGEMS :${primoGems + 85} `));
    console.log(chalk.red("\n\t  GAME END"));
    console.log("\n\nif u wanna continue the game run the command again cuz i don't know what is the code to contue the game.U better run the command 3 times to try other options cuz I've been making this freaking project for 2 weeks");
}
//ELITE ENEMIES
if (defeatEnemy.enemies === chalk.yellow("ELITE ENEMIES")) {
    console.log(chalk.redBright("\n\t DEFEAT 2 ABYSS MAGES"));
}
if (defeatEnemy.enemies === chalk.yellow("ELITE ENEMIES")) {
    let chooseCharacter = await inquirer.prompt({
        name: "character",
        message: chalk.blue("\t\n WHICH CHARACTER U WANNA FIGHT WITH?"),
        type: "list",
        choices: [
            chalk.yellow("XIAO"),
            chalk.yellow("RAIDEN SHOGUN"),
            chalk.yellow("EULA"),
            chalk.yellow("ALHAITHAM"),
        ],
    });
    if (chooseCharacter.character === chalk.yellow("XIAO")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 18K DMG.THE OPPONENTS ARE DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("RAIDEN SHOGUN")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 15K DMG.THE OPPONENTS ARE DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("EULA")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 8K DMG.THE OPPONENTS ARE DEAD"));
    }
    else {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 20K DMG.THE OPPONENTS ARE DEAD"));
    }
    console.log(chalk.green("\t CONGRATULATION!! U GOT 85 PRIMOGEMS"));
    console.log(chalk.green(`\t TOTAL PRIMOGEMS :${primoGems + 85} `));
    console.log(chalk.red("\n\t  GAME END"));
}
//NORMAL BOSS
if (defeatEnemy.enemies === chalk.yellow("NORMAL BOSS")) {
    console.log(chalk.redBright("\n\t DEFEAT CRYO HYPOSTASIS"));
}
if (defeatEnemy.enemies === chalk.yellow("NORMAL BOSS")) {
    let chooseCharacter = await inquirer.prompt({
        name: "character",
        message: chalk.blue("\nWHICH CHARACTER U WANNA FIGHT WITH?"),
        type: "list",
        choices: [
            chalk.yellow("VENTI"),
            chalk.yellow("SCARAMOUCH"),
            chalk.yellow("CYNO"),
            chalk.yellow("NEUVILETTE"),
        ],
    });
    if (chooseCharacter.character === chalk.yellow("VENTI")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 15K DMG.THE OPPONENT IS DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("SCARAMOUCH")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 25K DMG.THE OPPONENT IS DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("CYNO")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 20K DMG.THE OPPONENT IS DEAD"));
    }
    else {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 30K DMG.THE OPPONENT IS DEAD"));
    }
    console.log(chalk.green("\n\t CONGRATULATION!! U GOT 85 PRIMOGEMS"));
    console.log(chalk.green(`\n\t TOTAL PRIMOGEMS :${primoGems + 85} `));
    console.log(chalk.red("\n\t GAME END"));
}
//WEEKLY BOSS
if (defeatEnemy.enemies === chalk.yellow("WEEKLY BOSS")) {
    console.log(chalk.redBright("\n\t DEFEAT TARTAGLIA"));
}
if (defeatEnemy.enemies === chalk.yellow("WEEKLY BOSS")) {
    let chooseCharacter = await inquirer.prompt({
        name: "character",
        message: chalk.blue("\nWHICH CHARACTER U WANNA FIGHT WITH?"),
        type: "list",
        choices: [
            chalk.yellow("CHILDE"),
            chalk.yellow("ARLECCHINO"),
            chalk.yellow("NILOU"),
            chalk.yellow("HU TAO"),
        ],
    });
    if (chooseCharacter.character === chalk.yellow("NILOU")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 15K DMG.THE OPPONENT IS DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("ARLECCHINO")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 25K DMG.THE OPPONENT IS DEAD"));
    }
    else if (chooseCharacter.character === chalk.yellow("HU TAO")) {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 20K DMG.THE OPPONENT IS DEAD"));
    }
    else {
        console.log(chalk.green("\n\t YOUR CHARACTER GAVE 30K DMG.THE OPPONENT IS DEAD"));
    }
    console.log(chalk.green("\n\t CONGRATULATION!! U GOT 85 PRIMOGEMS"));
    console.log(chalk.green(`\n\t TOTAL PRIMOGEMS :${primoGems + 85} `));
    console.log(chalk.red("\n\t GAME END"));
}
