const Sequelize = require("sequelize");

export class SequelizeModule {
    private storage: String;
    constructor(uri: String) {
        this.storage = new Sequelize(uri);
    }
}
