"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
day1Function();
function day1Function() {
    var start = process.hrtime();
    var file = (0, fs_1.readFileSync)("./src/day1/inputs.txt", "utf-8");
    var calories = 0;
    var allCalories = [];
    file.split(/\r?\n/).forEach(function (line) {
        if (line == "") {
            allCalories.push(calories);
            calories = 0;
        }
        else {
            calories += Number(line);
        }
    });
    var sortedCalories = allCalories.sort(function (a, b) { return b - a; });
    var topCalories = sortedCalories[0] + sortedCalories[1] + sortedCalories[2];
    console.log("Best elf calories: ".concat(sortedCalories[0]));
    console.log("Top 3 elves combined calories: ".concat(topCalories));
    var elapsed = process.hrtime(start)[1] / 1000000;
    console.log("Execution time: ".concat(elapsed.toFixed(5), " ms\n"));
}
