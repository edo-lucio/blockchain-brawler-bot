/* eslint-disable require-jsdoc */
const { sleep } = require("./utils/sleep");

async function brawl() {
    try {
        console.log(1);
        return brawl();
    } catch (err) {
        if (err instanceof RpcError) {
            // handle cooldown error
            if (err.details[0].message.includes("cooldown") == 1) {
                await sleep(36e6);
                return brawl();
            }
            // handle CPU error
            if (err.details[0].message.includes("CPU") == 1) {
                await sleep(10000);
                return brawl();
            }
        }
    }
}
