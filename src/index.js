/* eslint-disable require-jsdoc */
const { Wallet } = require("./wallet");
const { config } = require("../config");
const { brawl } = require("./brawl");

async function main() {
    for (let i = 0; i < config.WALLET.length; i++) {
        const wallet = new Wallet(config.WALLET[i], config.PVT_KEY[i]);
        wallet.init();
        brawl(wallet);
    }
}

main();
