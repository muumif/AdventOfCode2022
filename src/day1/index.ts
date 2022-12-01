import { readFileSync } from "fs";

export async function day1Function() {
      console.log(`====================[Day 1]====================`);
      const elvesCalories = await getElvesCalories();

      elvesCalories.forEach(elf => {
            elvesCalories[elf.elf].sum = elvesCalories[elf.elf].calories.reduce((accumulator, value) => {
                  return accumulator + value;
            });
      });

      const sums = elvesCalories.map(elf => {
            return elf.sum;
      })

      const bestElf = elvesCalories[elvesCalories.findIndex(x => x.sum === Math.max(...sums))];
      const sortedElves = elvesCalories.sort((x, y) => y.sum - x.sum);
      const top3BestElves = sortedElves.splice(0, 3);
      const top3Sum = top3BestElves[0].sum + top3BestElves[1].sum + top3BestElves[2].sum;

      console.log(`Elf: ${bestElf.elf} with a total of: ${bestElf.sum}`);
      console.log(`Top 3 elves total: ${top3Sum}`)
}

async function getElvesCalories() {
      const file = readFileSync("./src/day1/inputs.txt", "utf-8");
      const elvesCalories: {
            sum: number; elf: number; calories: number[]; 
}[] = [];

      let count = 0;
      file.split(/\r?\n/).forEach(line => {
            if (line == "") {
                  count++;
            } else {
                  if (elvesCalories[count] != undefined){
                        elvesCalories[count].calories.push(parseInt(line, 10));
                  } else {
                        elvesCalories[count] = {
                              elf: count,
                              calories: [parseInt(line, 10)],
                              sum: 0
                        };
                  }
            }
      });

      // if (debug) {
      //       const used = process.memoryUsage().heapUsed / 1024 / 1024;
      //       console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
      // }

      return elvesCalories;
}
