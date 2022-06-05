/* eslint-disable require-jsdoc */
async function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

module.exports = { sleep };
