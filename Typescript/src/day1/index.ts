import { readFileSync } from "fs";

day1Function();

function day1Function() {
      const start = process.hrtime();

      const file = readFileSync("./src/day1/inputs.txt", "utf-8");
      let calories = 0;
      let allCalories: number[] = [];

      file.split(/\r?\n/).forEach(line => {
            if (line == "") {
                  allCalories.push(calories);
                  calories = 0;
            } else {
                  calories += Number(line);
            }
      });

      const sortedCalories = allCalories.sort(function(a, b) {return b-a})
      const topCalories = sortedCalories[0] + sortedCalories[1] + sortedCalories[2];



      console.log(`Best elf calories: ${sortedCalories[0]}`);
      console.log(`Top 3 elves combined calories: ${topCalories}`)
      const elapsed = process.hrtime(start)[1] / 1000000;

      console.log(`Execution time: ${elapsed.toFixed(5)} ms\n`)
}
