import express = require("express");
const properties = require("./properties");
import {ImmutableMap} from "./immutable.map";
import {Storage} from "./storage";
import {Subject} from "./subject";

const TIMEOUT = 1000;
const PORT = properties.port;

const delay = async (milliseconds: number) => {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
};

const test1 = () => {
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

const test2 = () => {
  let subject = new Subject();
  let subscription = subject.subscribe(
      (x) => console.info(x),
      (e) => console.error(e),
      () => console.info("onCompleted")
  );

  subject.next("onSuccess");
  subject.error("onError");
  subject.complete();
  subject.unsubscribe();
};

const main = () => {
  test1();
  test2();
};

const app = express();
const server = app.listen(PORT, main);
