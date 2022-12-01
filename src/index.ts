import { day1Function } from "./day1";

const dayNumber = 1;

runDay(dayNumber);

async function runDay(day: number) {
      switch (day) {
            case 1:
                  const start = process.hrtime();
                  await day1Function();
                  const elapsed = process.hrtime(start)[1] / 1000000;
                  const usedMemory = process.memoryUsage().heapUsed / 1024 / 1024;

                  console.log(`===========[Performance Statistics]============\nExecution time: ${elapsed.toFixed(5)} ms\nAprox memory: ${Math.round(usedMemory * 100) / 100} mb\n===============================================`)
                  break;
      
            default:
                  break;
      }
}