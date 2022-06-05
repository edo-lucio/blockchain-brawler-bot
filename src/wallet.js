/* eslint-disable require-jsdoc */
const { Api, JsonRpc } = require("eosjs");
const { JsSignatureProvider } = require("eosjs/dist/eosjs-jssig"); // development only
const { TextEncoder, TextDecoder } = require("util");
const fetch = require("node-fetch");
const { config } = require("../config");

class Wallet {
    constructor(address, privateKey) {
        this.address = address;
        this.privateKey = privateKey;
    }

    init() {
        const rpc = new JsonRpc(config.SERVER_ENDPOINT, { fetch });
        const signatureProvider = new JsSignatureProvider([this.privateKey]);
        this.api = new Api({
            rpc,
            signatureProvider,
            textDecoder: new TextDecoder(),
            textEncoder: new TextEncoder(),
        });
    }
}

module.exports = { Wallet };
