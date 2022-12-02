import { readFileSync } from "fs";

day2Function();

function day2Function() {
      const start = process.hrtime();
      
      const file = readFileSync("./src/day2/inputs.txt", "utf-8");

      const mapScores = {
            "A": 1,
            "B": 2,
            "C": 3,
            "X": 1,
            "Y": 2,
            "Z": 3,
      }

      const mapBeats = {
            "A": "Z",
            "B": "X",
            "C": "Y",
            "X": "C",
            "Y": "A",
            "Z": "B"
      }

      const mapDraw = {
            "A": "X",
            "B": "Y",
            "C": "Z"
      }

      const scores: number[] = [];
      file.split(/\r?\n/).forEach(line => {
            const opponent = line.split(" ")[0] as "A" | "B" | "C";
            const me = line.split(" ")[1] as "X" | "Y" | "Z";

            if (mapDraw[opponent] == me) {
                  scores.push(3)
                  scores.push(mapScores[me])
            } else {
                  if (mapBeats[opponent] == me) {
                        scores.push(mapScores[me]);
                  } else {
                        scores.push(6);
                        scores.push(mapScores[me]);
                  }
            }
      })

      const sum = scores.reduce((partialSum, a) => partialSum + a, 0);
      console.log("First question: " + sum);
      const elapsed = process.hrtime(start)[1] / 1000000;

      console.log(`Execution time: ${elapsed.toFixed(5)} ms\n`)
}