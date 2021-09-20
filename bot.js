const SteamUser = require("steam-user");
const config = require('./config.json');
const client = new SteamUser();
process.title = 't.me/undecryptable'
const logOnOptions = {
    accountName: config.username,
    password: config.password,
};
client.logOn(logOnOptions);
client.on("loggedOn", (e) => {
    client.setPersona(1);
    client.gamesPlayed([config.CustomStatus, config.AppID]);
});
client.on('err', function (e) {
    log_err(e)
});
console.clear();
console.log("Started Succesfully");
