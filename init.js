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
const immutable_map_1 = require("./immutable.map");
const TIMEOUT = 1000;
const PORT = process.env.PORT || 3000;
const delay = (milliseconds) => __awaiter(this, void 0, void 0, function* () {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
});
const main = () => {
    let object = { a: 10, b: 20, c: 30 };
    let objectMap = new immutable_map_1.immutableMap(object);
    setInterval(() => __awaiter(this, void 0, void 0, function* () {
        yield delay(TIMEOUT);
        console.info("delay...", objectMap.get());
    }), TIMEOUT);
};
const app = express();
const server = app.listen(PORT, main);
//# sourceMappingURL=init.js.map