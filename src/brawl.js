/* eslint-disable require-jsdoc */
const { RpcError } = require("eosjs");
const { sleep } = require("./utils/sleep");
const { config } = require("../config");

async function brawl(wallet) {
    try {
        const txData = {
            actions: [
                {
                    account: "bcbrawlers",
                    name: "brawl",
                    authorization: [
                        {
                            actor: wallet.address,
                            permission: "active",
                        },
                    ],
                    data: {
                        owner: wallet.address,
                        slot_id: 14,
                    },
                },
            ],
        };

        const addictionalTxData = {
            blocksBehind: 3,
            expireSeconds: 30,
        };

        const result = await wallet.api.transact(txData, addictionalTxData);
        console.log(result);
        return brawl(wallet);
    } catch (err) {
        if (err instanceof RpcError) {
            // handle cooldown error
            if (err.details[0].message.includes("cooldown") == 1) {
                console.log(err.details[0].message);
                await sleep(config.WAITING_TIME_MS);
                return brawl(wallet);
            }
            // handle CPU error
            if (err.details[0].message.includes("CPU") == 1) {
                console.log(err.details[0].message);
                await sleep(10000);
                return brawl(wallet);
            }
            // handle other cases (eg brawl)
            await sleep(config.WAITING_TIME_MS);
            return brawl(wallet);
        }
    }
}
module.exports = { brawl };
