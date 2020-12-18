export {};
var ConnectionModel = require("../mongoSchema/connection");
const mongoose = require("mongoose");

async function getDbFromHostName(hostname) {
    const clientCheck = await ConnectionModel.findOne({ hostname: hostname });
    if (!clientCheck) {
      console.log('no db found!')
    }
    const dbName = clientCheck.dbname;
    const db = mongoose.connection.useDb(dbName);
    return await db;
}

module.exports = {
    getDbFromHostName
}