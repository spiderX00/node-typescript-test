import {Map} from "immutable";

export class immutableMap {
    private values: Object;
    constructor(values: Object) {
        this.values = Map(values);
    }
    get() {
        return this.values;
    }
}
