import {Map} from "immutable";

export class ImmutableMap {
    private values: Object;
    constructor(values: Object) {
        this.values = Map(values);
    }
    get() {
        return this.values;
    }
}
