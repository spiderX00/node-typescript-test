import {Map, Record} from "immutable";

export class ImmutableMap {
    constructor(values: Object) {
        return Map(values);
    }
}

export class ImmutableRecord extends Record({ value: 1, status: "FAIL" }) {
    constructor() {
        super({ value: 2, status: "OK" });
    }
}
