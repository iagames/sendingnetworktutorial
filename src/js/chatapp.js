
function login() {
window.chatWidgetApi.DIDLogin((loginResult)=>{
        console.log("Login Status: "+loginResult);
      });
    }


function createPublicRoom() {
let roomName = document.getElementById("pubroom").value;
window.chatWidgetApi.createPublicRoom(roomName).then((roomID)=>{console.log(roomID)});
//remove this alert once your are ready to create a public room
alert("Create Public Room"+newpubroom);
}

function createPrivateRoom() {
let newprivroom = document.getElementById("privroom").value;
//remove this alert once your are ready to create a private room
alert("Create Private Room");
} 

function joinPrivateChatRoom() {
 //remove this alert once your are ready to join a private room
  alert("Join Private Chat Room");
  //window.chatWidgetApi.joinPrivateChatRoom(roomID).then((roomID)=>{
  //  console.log(roomID);
  //});
}

function inviteUser() {
  let invitee = document.getElementById("invitee").value;
  //remove this alert once your are ready to invite a user
  alert("Invite User"+invitee);
  //window.chatWidget.createDM(userName).then((roomID)=>{console.log(roomID)})
    //console.log(roomID);
  //});
}