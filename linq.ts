const {List} = require("linqts");
const Logger = require("log4js");
const Log = Logger.getLogger("linq-example");

let people = new List([1, 2, 3, 4, 5])
    .Where(x => x > 3)
    .Select(y => y * 2)
    .ToArray();

Log.info(people);
