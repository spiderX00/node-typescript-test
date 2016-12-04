import express = require("express");
import {immutableMap} from "./immutable.map";

const TIMEOUT = 1000;
const PORT = process.env.PORT || 3000;

const delay = async (milliseconds: number) => {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
};

const main = () => {
    let object = { a: 10, b: 20, c: 30 };
    let objectMap = new immutableMap(object);
    setInterval(async () => {
        await delay(TIMEOUT);
        console.info("delay...", objectMap.get())
    }, TIMEOUT);
};

const app = express();
const server = app.listen(PORT, main);
