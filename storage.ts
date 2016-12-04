const Sequelize = require("sequelize");

export class Storage {
    private storage: String;
    constructor(uri: String) {
        this.storage = new Sequelize(uri);
    }
}
