import express = require("express");
const properties = require("./properties");
import {ImmutableMap} from "./immutable.map";
import {Storage} from "./storage";

const TIMEOUT = 1000;
const PORT = properties.port;

const delay = async (milliseconds: number) => {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
};

const main = () => {
    let object = { a: 10, b: 20, c: 30 };
    let objectMap = new ImmutableMap(object);
    const timeout = async (offset) => {
        await delay(TIMEOUT + offset);
        console.info("delay...", objectMap.get())
    };

    for (let i = 0; i <= 10; i++) {
        timeout(i * TIMEOUT);
    };
};

const app = express();
const server = app.listen(PORT, main);
