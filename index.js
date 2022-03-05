import './node_modules/bulma/css/bulma.css';
import './style.css';

//window.discordRPC.setTitle("bruh")

let appleMusicLabelElem = document.getElementById("appleMusicLabel");
let customLabelElem = document.getElementById("customLabel");
let customParamsElem = document.getElementById("customParams");
let applyButtonElem = document.getElementById("customInputApply");

// Input elements
let stateElem = document.getElementById("customInputState");
let detailElem = document.getElementById("customInputDetails");
let imageLElem = document.getElementById("customInputImageBig");
let imageSElem = document.getElementById("customInputImageSmall");

// Setting click listeners
appleMusicLabelElem.onclick = () => radioChoice(0);
customLabelElem.onclick = () => radioChoice(1);
applyButtonElem.onclick = () => updatePresence();

let rpcState = "";
let rpcDetail = "";
let rpcImageL = "";
let rpcImageS = "";

// Setting change listeners
stateElem.onchange = () => rpcState = stateElem.value;
detailElem.onchange = () => rpcDetail = detailElem.value;
imageLElem.onchange = () => rpcImageL = imageLElem.value;
imageSElem.onchange = () => rpcImageS = imageSElem.value;


function radioChoice(choice) {
  if (choice == 0) {
    customParamsElem.style.display = "none";
  } else if (choice == 1) {
    customParamsElem.style.display = "initial";
  }
}

function updatePresence() {
  console.log(rpcState);
  console.log(rpcDetail);
  console.log(rpcImageL);
  console.log(rpcImageS);
  window.discordRPC.updatePresence(rpcState, rpcDetail, rpcImageL, rpcImageS)
}