const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// settingup an empty default for lowdb
db.defaults({users: []}).write();

module.exports = db;