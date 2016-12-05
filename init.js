"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const express = require("express");
const immutable_class_1 = require("./immutable.class");
const subject_1 = require("./subject");
const properties = require("./properties");
const TIMEOUT = 1000;
const PORT = properties.port;
const delay = (milliseconds) => __awaiter(this, void 0, void 0, function* () {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
});
const test1 = () => {
    let object = { a: 10, b: 20, c: 30 };
    let objectMap = new immutable_class_1.ImmutableMap(object);
    let objectRecord = new immutable_class_1.ImmutableRecord();
    const timeout = (offset) => __awaiter(this, void 0, void 0, function* () {
        yield delay(TIMEOUT + offset);
        console.info("delay...", objectMap, objectRecord);
    });
    for (let i = 0; i <= 10; i++) {
        timeout(i * TIMEOUT);
    }
    ;
};
const test2 = () => {
    let subject = new subject_1.Subject();
    let subscription = subject.subscribe((x) => console.info(x), (e) => console.error(e), () => console.info("onCompleted"));
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
//# sourceMappingURL=init.js.map