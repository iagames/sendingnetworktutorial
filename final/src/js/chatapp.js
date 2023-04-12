
function login() {
window.chatWidgetApi.DIDLogin((loginResult)=>{
        console.log("Login Status: "+loginResult);
      });
    }


function createPublicRoom() {
const roomName = document.getElementById("pubroom").value;
if (roomName == null || roomName.length === 0 ){
  alert("Please give the room a name");
  return;
}
window.chatWidgetApi.createPublicRoom(roomName).then((roomID)=>{console.log(roomID)}).catch((error)=>{console.log(error)});
//remove this alert once your are ready to create a public rooms
alert("Public Room Created "+roomName);
}

function createPrivateRoom() {
const roomName = document.getElementById("privroom").value;
if (roomName == null || roomName.length === 0 ){
  alert("Please give the room a name");
  return;
}
window.chatWidgetApi.createPrivateRoom(roomName).then((roomID)=>{console.log(roomID)}).catch((error)=>{console.log(error)});;
//remove this alert once your are ready to create a private rooms
alert("Private Room Created "+roomName);
} 

function joinPrivateChatRoom() {
 //remove this alert once your are ready to join a private room
  alert("Join Private Chat Room");
  //You can find the API for the sending.me widget here: https://sending-network.gitbook.io/sending.network/development/website-chat-widget-sdk/room
  //This is the function that will be called when the user clicks the join button
  //window.chatWidgetApi.joinPrivateChatRoom(roomID).then((roomID)=>{
  //  console.log(roomID);
  //});
}

function inviteUser() {
  let invitee = document.getElementById("invitee").value;
  //remove this alert once your are ready to invite a user
  alert("Invite User"+invitee);
  //You can find the API for the sending.me widget here: https://sending-network.gitbook.io/sending.network/development/website-chat-widget-sdk/room#invite-user-to-a-chat
  //This is the function that will be called when the user clicks the invite button
  //window.chatWidget.createDM(userName).then((roomID)=>{console.log(roomID)})
    //console.log(roomID);
  //});
}