const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const config = {
    WALLET: [process.env.WALLET], // insert wallets's addresses able to play the game (substitute process.env.WALLET with your wallets)
    PVT_KEY: [process.env.PVT_KEY], // same as above with pvt_key; put wallet's correspondent pvt_key in the same order
    SERVER_ENDPOINT: process.env.SERVER_ENDPOINT, // use the server endpoint you prefer
};

module.exports = { config };
