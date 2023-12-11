import { TEXT_1, TEXT_2, TEXT_3 } from ".//constants.js";
import { logger } from "./logger.js";

logger(TEXT_1)
logger(TEXT_2)
logger(TEXT_3)

class JobWorker {
    constructor(name, accumulatedCost) {
        this.name = name
        this.accumulatedCost = accumulatedCost
    }

    doJob() {
        console.log(`${this.name} has done job`)
    }

    payWorker() {
        console.log(`${this.name} has been paid ${this.accumulatedCost}`)
    }

}

const nameJob = new JobWorker("Vytautas", "500");
console.log(nameJob.doJob())
console.log(nameJob.payWorker())