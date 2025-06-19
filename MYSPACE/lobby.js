window.userProfileGrow = userProfileGrow;
window.openChatNotification = openChatNotification;
window.openGlobalChat = openGlobalChat;
window.stopit = stopit;
window.send = send;
window.openMusic = openMusic;
window.hidesideright = hidesideright;
window.playpause = playpause;
/*window.background1 = background1;
window.background2 = background2;
window.background3 = background3;*/
window.nextSong = nextSong;

let userProfile = document.querySelector(".user-profile")
let profilePictureDiv = document.querySelector(".profile-picture-div")
import { songList } from "./song.js";
function userProfileGrow(){

    if (userProfile.style.height === "60px") {
        userProfile.style.height = "300px";
        profilePictureDiv.style.height = "100px";
        profilePictureDiv.style.width = "100px";
        userProfile.style.flexDirection = "column-reverse";
       

    }else {
        userProfile.style.height = "60px";
        profilePictureDiv.style.height = "40px"
        profilePictureDiv.style.width = "40px"
        userProfile.style.flexDirection = "row";

        
    }
 }

 let slider = document.querySelector(".slider")
 let musicButtons = document.querySelector(".music-buttons")
 let musicMainDiv = document.querySelector(".music-main-div")
 let musicDiv = document.querySelector(".music-div")
 let musicplayer2 = document.querySelector(".music-player2-div")

 function openMusic(){

    
    if (musicMainDiv.style.width === "60px"){
        musicMainDiv.style.width = "300px";
        musicMainDiv.style.height = "400px";
        
        setTimeout(() => {
        slider.style.display = "inline";
        musicDiv.style.width = "200px";
        musicDiv.style.height = "200px";
        musicButtons.style.opacity = "1"
        slider.style.opacity = "1"
        musicDiv.style.borderRadius = "100px";
        musicDiv.style.marginTop = "20px";
        musicButtons.style.display = "flex";
        musicMainDiv.style.justifyContent = "center"
        musicMainDiv.style.rowGap = "20px";
        musicplayer2.style.display = "none";
        musicplayer2.style.borderRadius = "20px";
        musicplayer2.style.opacity = "0";
        }, 100);

        if(chatDiv.style.height ==="500px"){
            chatDiv.style.height = "80px";
            chatDiv.style.width = "100px";
            chatDiv.style.borderRadius = "100px";
            chatDiv.style.borderTopLeftRadius = "25px";
            chatLog.style.display = "none";
            chatInput.style.display = "none";
            chatLogo.style.display = "block";
         }
        
    } else{
        musicMainDiv.style.width = "60px";
        musicMainDiv.style.height = "120px";
        slider.style.display = "none";
        musicDiv.style.width = "50px";
        musicDiv.style.height = "50px";
        musicDiv.style.borderRadius = "50px";
        musicDiv.style.marginTop = "5px";
        musicButtons.style.display = "none";
        musicMainDiv.style.justifyContent = "space-between";
        musicMainDiv.style.rowGap = "0";
        musicButtons.style.opacity = "0";
        slider.style.opacity = "0";
        musicplayer2.style.display = "block";
        setTimeout(() => {
        musicplayer2.style.opacity = "1";
        musicplayer2.style.borderRadius = "50px";
        }, 500);
        

    }
 }
 let sideRightcontent = document.querySelector(".side-right-content");
 let sideRight = document.querySelector(".side-right");
 let closeRight = document.querySelector("#close-right-side");
 function hidesideright(){
    if (sideRightcontent.style.opacity === "1"){
        sideRightcontent.style.animation = "hidesideright 1s ease";
        setTimeout(() => {
            sideRightcontent.style.opacity = "0";
            sideRight.style.opacity = "0.2"
            closeRight.innerText = "menu_open";
        }, 1000);
        setTimeout(() => {
            sideRightcontent.style.display = "none";
        }, 1001);
    }else{
        sideRightcontent.style.animation = "none";
        sideRightcontent.style.opacity = "1";
        sideRight.style.opacity = "1"
        closeRight.innerText = "close";
        sideRightcontent.style.display = "block";
    }
 }
 let chatDiv = document.querySelector(".chat-div")
 let chatLog = document.querySelector(".chat-log")
 let chatInput = document.querySelector(".chat-inputs")
 let chatLogo  = document.querySelector(".chat-div > span")
 function openGlobalChat(){
    
    

    if(chatDiv.style.height === "80px"){
       chatDiv.style.height = "500px";
       chatDiv.style.width = "300px";
       chatDiv.style.borderRadius = "30px";
      /* chatDiv.style.backgroundColor = "rgba(44, 44, 44,0.8)";*/
       chatLogo.style.display = "none";
       setTimeout(() => {
         chatLog.style.display = "flex";
         chatInput.style.display = "flex";
       }, 500);
       
    }else{
       chatDiv.style.height = "80px";
       chatDiv.style.width = "100px";
       chatDiv.style.borderRadius = "100px";
       chatDiv.style.borderTopLeftRadius = "25px";
     /*  chatDiv.style.backgroundColor = "rgba(44, 44, 44,1)";*/
       chatLog.style.display = "none";
       chatInput.style.display = "none";
       chatLogo.style.display = "block";
       
    }
 }

 function openChatNotification(event){

    openGlobalChat();
 }


 function stopit(event){
    event.stopPropagation();
  
   }

   
let messageInput = document.querySelector(".message");
let messages = document.querySelector(".messages")
function send(){
    
    if (messageInput.value === ""){

    }else{
        let message = messageInput.value;
        chatLog.innerHTML += `<div class="message-div">
                               <p readonly onclick="stopit(event)" class="messages">${message}</p>
                             </div>`
        messageInput.value = "";     
    }
                     

}   
let playpausee = document.querySelector("#playpause")
let playpauseee = document.querySelector("#playpausee")
let songplay = false;

function playpause(){

   
   if (playpausee.textContent === "play_arrow" || playpauseee.textContent === "play_arrow"){
    disk.style.animation = "rotate 15s linear infinite";
    disk.style.animationPlayState = "running";
    playpausee.textContent = "stop";
    playpauseee.textContent = "stop";
    song.play();
 
      
   }else{
    song.pause()
    disk.style.animationPlayState = "paused";
    playpausee.textContent = "play_arrow";
    playpauseee.textContent = "play_arrow";
      
   }
}

 for( let i = 0; i < songList.length; i++ ){
   sideRightcontent.innerHTML += `<div class="topic-div" style ="background-image: url(${songList[i].img});"><p class ="sang">${songList[i].name}</p><p class="number" style ="display:none;">${i}</p></div>`
 }

 let disk = document.querySelector(".disk");
 let musicCoverDivs = document.querySelectorAll(".topic-div");
 let songname = document.querySelector(".song-name")
 let song = new Audio();

 let numberofsong = 0;
       songname.innerText = `${songList[numberofsong].name}`
       disk.style.backgroundImage = `url(${songList[numberofsong].img})`;
       musicDiv.style.backgroundImage = `url(${songList[numberofsong].img})`;
       song.src = (songList[numberofsong].music);


 musicCoverDivs.forEach(function (musicCoverDiv){
   musicCoverDiv.addEventListener("click",function () {
       numberofsong = parseInt(this.querySelector(".number").textContent)   
       songname.innerText = `${songList[numberofsong].name}` + " - " + `${songList[numberofsong].artist}`;
       disk.style.backgroundImage = `url(${songList[numberofsong].img})`;
       musicDiv.style.backgroundImage = `url(${songList[numberofsong].img})`;
       body.style.backgroundImage = `url(${songList[numberofsong].img})`;
       song.src = (songList[numberofsong].music);
       song.loop = false;


       song.load()
       if (playpausee.textContent === "stop" || playpauseee.textContent === "stop"){
              song.play()
       }
   
   });  
   
 })

function importUI(numberofsong){
       
       songname.innerText = `${songList[numberofsong].name}`
       disk.style.backgroundImage = `url(${songList[numberofsong].img})`;
       musicDiv.style.backgroundImage = `url(${songList[numberofsong].img})`;
       body.style.backgroundImage = `url(${songList[numberofsong].img})`;
       song.src = (songList[numberofsong].music);
       if (playpausee.textContent === "stop" || playpauseee.textContent === "stop"){
        song.play()
       }
}

function nextSong(){   

    if(shuffle === true){
        numberofsong = Math.floor(Math.random()* 13);
      
        importUI(numberofsong);
    }else{

   if(numberofsong !== null && numberofsong < songList.length - 1){
        numberofsong++;

       importUI(numberofsong);

        
    }else{
        numberofsong = 0
       
        
        importUI(numberofsong);
    }
}
}

window.backSong = backSong;

function backSong(){
    if(numberofsong !== null && numberofsong <= songList.length - 1 && numberofsong >= 0 ){
        numberofsong--;

        importUI(numberofsong);
    }else{
        numberofsong = songList.length - 1;

        importUI(numberofsong);
    }
}
window.loopSong = loopSong;
let loopbutton1 = document.querySelector(".music-buttons > span:nth-child(1)")
let loopbutton2 = document.querySelector(".music-buttons2 > span:nth-child(1)")
function loopSong(){
    song.loop = !song.loop
    
    
    if (song.loop === true){
        
        loopbutton1.style.backgroundColor = "rgba(136, 136, 136,0.5)";
        loopbutton2.style.backgroundColor = "rgba(136, 136, 136,0.5)";
        shuffle = false;
        shufflebutton1.style.backgroundColor = "rgba(136, 136, 136,0)";
        shufflebutton2.style.backgroundColor = "rgba(136, 136, 136,0)";
    }else{
        loopbutton1.style.backgroundColor = "rgba(136, 136, 136,0)";
        loopbutton2.style.backgroundColor = "rgba(136, 136, 136,0)";
    }

}

window.shuffleSong = shuffleSong;
let shuffle = false
let shufflebutton1 = document.querySelector(".music-buttons > span:nth-child(5)")
let shufflebutton2 = document.querySelector(".music-buttons2 > span:nth-child(5)")
function shuffleSong(){
    shuffle = !shuffle;
   

    if (shuffle === true){
        
        shufflebutton1.style.backgroundColor = "rgba(136, 136, 136,0.5)";
        shufflebutton2.style.backgroundColor = "rgba(136, 136, 136,0.5)";
        song.loop = false;
        loopbutton1.style.backgroundColor = "rgba(136, 136, 136,0)";
        loopbutton2.style.backgroundColor = "rgba(136, 136, 136,0)";
    }else{
        shufflebutton1.style.backgroundColor = "rgba(136, 136, 136,0)";
        shufflebutton2.style.backgroundColor = "rgba(136, 136, 136,0)";
    }
}

song.addEventListener("ended",() => {


    if(shuffle === true){
        numberofsong = Math.floor(Math.random()* songList.length);
        console.log(numberofsong);
        console.log(songList.length)

        importUI(numberofsong);
    }
    else if(song.loop === true){
        
        song.play();
        console.log("the song should loop")
    }else if(song.src === null){
        playpausee.textContent = "play_arrow";
        playpauseee.textContent = "play_arrow";
        song.pause();
    }
    else{
        numberofsong ++
   
    if (numberofsong >= songList.length){
        numberofsong = 0
    }

    importUI(numberofsong);
    }
    
   
    
})

let position = 0;
/*window.musicslider = musicslider;

function musicslider(){
    musicsliderr.value = song.currentTime * (song.duration /100)
}*/
let musicsliderr = document.querySelector("#music2-slider")
let music1sliderr = document.querySelector("#music1-slider")

musicsliderr.addEventListener("input",() => {
    song.currentTime = (song.duration / 100) * musicsliderr.value;
})

song.addEventListener("timeupdate",() => {
   musicsliderr.value = (song.currentTime / song.duration ) * 100;
})

music1sliderr.addEventListener("input",() => {
    song.currentTime = (song.duration / 100) * music1sliderr.value;
})
//update the location of the range based on the currentime
song.addEventListener("timeupdate",() => {
   music1sliderr.value = (song.currentTime / song.duration ) * 100;
})
let body = document.querySelector("body");




let ctime = document.querySelector(".ctime");
let dtime = document.querySelector(".dtime");

song.addEventListener("loadedmetadata", () => {
    let dminutes = Math.floor(song.duration / 60 );
    let dseconds = Math.floor(  song.duration - dminutes * 60 );

    if (dminutes < 10){ dminutes = "0" + dminutes}
    if (dseconds < 10){ dseconds = "0" + dseconds}

    dtime.textContent = dminutes + " : " + dseconds;
       
});

song.addEventListener("timeupdate", () => {
    let cminutes = Math.floor(song.currentTime / 60);
    let cseconds = Math.floor( song.currentTime - cminutes * 60 );

    if (cminutes < 10){  cminutes = "0" + cminutes }
    if (cseconds < 10){  cseconds = "0" + cseconds }


    ctime.textContent = cminutes + " : " + cseconds;
});


let volumeSlider = document.querySelector(".volume-slider");

volumeSlider.addEventListener("input", () => {
    song.volume = volumeSlider.value;
})

let loguser = JSON.parse(sessionStorage.getItem("logusername"));

let guestname = document.querySelector(".guest-name");
if(loguser){
    alert("welcome "+ loguser)
    guestname.textContent = loguser;
}else{
    guestname.textContent = "guest";
}




/*function background1(){
    body.style.filter = "grayscale(100%) contrast(120%)";
    body.style.backgroundImage = "url(Background/b1.jpg)"
}
function background2(){
    body.style.filter = "unset";
    body.style.backgroundImage = "url(Background/background.png)"
    body.style.backgroundColor = "rgb(194, 194, 194)"
}
function background3(){
    body.style.backgroundImage = "url(Background/background.png)"
    body.style.backgroundColor = "rgb(92,92,92)"
    body.style.filter = "unset";
}

*/


