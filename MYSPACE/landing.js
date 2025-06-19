let loginHeader = document.querySelector(".login-header")
let registerHeader = document.querySelector(".register-header")
let aboutHeader = document.querySelector(".about-header")
let loginDiv = document.querySelector(".login-div")
let registerDiv = document.querySelector(".register-div");
let register2Div = document.querySelector(".register2-div")
let cardContainer = document.querySelector(".card-container");
let flipAudio = document.querySelector(".flip-audio");
let expandAudio = document.querySelector(".expand-audio");
let shrinkAudio = document.querySelector(".shrink-audio");
let registerP = document.querySelector(".Register-p");
flipAudio.volume = 0.25;
expandAudio.volume = 0.15;
shrinkAudio.volume = 0.15
let flipAudioplayed = false;
let loginList = document.querySelector(".login-list");
let aboutList = document.querySelector(".about-list");


loginDiv.addEventListener("dblclick",function(){
        cardContainer.style.opacity= 1;
        cardContainer.style.transform = "translate(-50%,-50%) rotateY(180deg)";
        registerP.innerText = "Tap the card twice to login" ;      
            flipAudio.play();
    cardContainer.addEventListener("transitionend",function(){
        registerDiv.style.height = "500px";
        cardContainer.style.height = "500px"
        registerDiv.style.transition = "0.5s ease";
        setTimeout(() => {
            expandAudio.play();
        }, 150);
       
        
    }, {once:true})
})
registerDiv.addEventListener("dblclick",function(){
    registerDiv.style.height = "250px";
    cardContainer.style.height = "250px";
    cardContainer.style.opacity= 1;
    registerP.innerText = "Tap the card twice to register" ;

    registerDiv.addEventListener("transitionend",function(){
        cardContainer.style.transform = "translate(-50%,-50%) rotateY(0deg)";
        flipAudio.play();
    },{once : true})
    
} )



let aboutInfo = document.querySelector(".about-info")

aboutHeader.addEventListener("click",function(){
    
    cardContainer.style.display = "none";
    registerP.style.display = "none";
    aboutInfo.style.display = "block"
    loginList.style.borderBottom = "0px solid";
    aboutList.style.borderBottom = "2px solid black";
    
    

    
})

loginHeader.addEventListener("click",function(){
    cardContainer.style.display= "block";
    registerP.style.display = "block";
    aboutInfo.style.display = "none";
    loginList.style.borderBottom = "2px solid black";
    aboutList.style.borderBottom = "0px solid";


    

})

const preventflip = document.querySelectorAll("button,input");

preventflip.forEach((Element) =>{
    Element.addEventListener("dblclick",function(Event){
        Event.stopPropagation();
    })
})

let iconLight = document.getElementById("lightButton");
let iconDark = document.getElementById("darkButton")
let body = document.querySelector("body");
let materialIcon = document.querySelector(".material-icons");

iconLight.addEventListener("click",function () {
    iconDark.style.display = "block";
    iconLight.style.display = "none";
    body.style.backgroundColor = "rgb(77,77,77)";
    loginHeader.style.color = "white";
    aboutHeader.style.color = "white";
    aboutInfo.style.color = "white";
    registerP.style.color = "rgb(228, 228, 228)"
    
})
iconDark.addEventListener("click",function () {
    iconDark.style.display = "none";
    iconLight.style.display = "block";
    body.style.backgroundColor = "";
    aboutInfo.style.color = "rgb(92,92,92)";
    registerP.style.color = "gray"
    loginHeader.style.color = "black";
    aboutHeader.style.color = "black";
    
})
let passwordRegister = document.querySelector(".password-register");

function showpass(){
     if (passwordRegister.type === "password"){
        passwordRegister.type = "text";
     } else{
        passwordRegister.type = "password";
     }
}
let termsDiv = document.querySelector(".terms-div")
function openterms(){
     termsDiv.style.display = "block"
   
}
function closeterms(){
   termsDiv.style.display = "none"
}

let user = [
    {
        username: "otter",
        password: "1234"
    }
           ]

document.querySelector("#registrationform").addEventListener("submit",(event) => {
    event.preventDefault();

    let rusername = document.querySelector(".username-register").value;
    let rpassword = document.querySelector(".password-register").value;

    let invalidreg = false;

    for (let i = 0; i < user.length; i++) {
        
        if (user[i].username === rusername){
            invalidreg = true;
            break
        }
        
    }

    if(invalidreg){
        alert("username is already taken")
    }{
        user.push({ username: rusername,password: rpassword})
        alert("registration confirm")
    }

})


document.querySelector("#loginform").addEventListener("submit",(event) => {
    event.preventDefault();
  let usernamee = null;
  let lusername = document.querySelector(".username").value;
  let lpassword = document.querySelector(".password").value;
  
  for (let a = 0; a < user.length; a++) {
    
    if(lusername === user[a].username && lpassword === user[a].password){
        usernamee = lusername;
        break;
    }
    
  }

  if (usernamee){
    sessionStorage.setItem("logusername", JSON.stringify(usernamee))
    window.location.href = "lobby.html"
  }else{
    alert("wrong username or password")
    
  }
})
