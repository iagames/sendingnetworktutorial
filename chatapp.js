
function login() {
window.chatWidgetApi.DIDLogin((loginResult)=>{
        console.log("Login Status: "+loginResult);
        let userID = window.chatWidgetApi.getUserId();
        console.log("User ID: "+userID);
        //let roomName = "My New Room";
        //window.chatWidgetApi.createPublicRoom(roomName).then((roomID)=>{console.log(roomID)});
        
      });
    }