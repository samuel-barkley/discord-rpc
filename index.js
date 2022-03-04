import './node_modules/bulma/css/bulma.css';
import './style.css';
import { RPC } from "discord-rpc-electron";
/*const client = require('discord-rich-presence')('942539056401756192');
 
client.updatePresence({
  //state: 'Tired',
  details: 'Doin absolutely nothin 😑',
  //startTimestamp: Date.now(),
  //endTimestamp: Date.now() + 13370,
  largeImageKey: 'snek_large',
  smallImageKey: 'snek_small',
  //instance: true,
});*/
console.log("BRUH");

const clientId = "942539056401756192";
const scopes = ['rpc', 'rpc.api', 'messages.read'];

const client = new RPC.Client({ transport: 'websocket' });

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);
});

client.login({ clientId, scopes });

let customParamsElem = document.getElementById("containerDiv");

