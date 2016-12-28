import {Map, Record} from "immutable";

interface Immutable {
    value: Map<any, any>;
    get(): Map<any, any>;
};

export class ImmutableMap implements Immutable {
    value: Map<any, any>;
    constructor(value: Object) {
        this.value = Map(value);
    }
    get() {
        return this.value;
    }
};

export class ImmutableRecord extends Record({ value: 1, status: "FAIL" }) {
    constructor() {
        super({ value: 2, status: "OK" });
    }
};
