"use strict";
const immutable_1 = require("immutable");
class ImmutableMap {
    constructor(values) {
        return immutable_1.Map(values);
    }
}
exports.ImmutableMap = ImmutableMap;
class ImmutableRecord extends immutable_1.Record({ value: 1, status: "FAIL" }) {
    constructor() {
        super({ value: 2, status: "OK" });
    }
}
exports.ImmutableRecord = ImmutableRecord;
//# sourceMappingURL=immutable.class.js.map