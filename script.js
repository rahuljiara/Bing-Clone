
// Background Changer In Every 2 Hour

let date = new Date;
let hr = date.getHours();

document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

if (hr >= 1 && hr <= 2) {
    document.body.style.backgroundImage = "url('img/bg11.jpg')";
}
else if (hr > 2 && hr <= 4) {
    document.body.style.backgroundImage = "url('img/bg12.jpg')";
}
else if (hr > 4 && hr <= 6) {
    document.body.style.backgroundImage = "url('img/bg1.jpg')";
}
else if (hr > 6 && hr <= 8) {
    document.body.style.backgroundImage = "url('img/bg2.jpg')";
}
else if (hr > 8 && hr <= 10) {
    document.body.style.backgroundImage = "url('img/bg3.jpg')";
}
else if (hr > 10 && hr <= 12) {
    document.body.style.backgroundImage = "url('img/bg4.jpg')";
}
else if (hr > 12 && hr <= 14) {
    document.body.style.backgroundImage = "url('img/bg5.jpg')";
}
else if (hr > 14 && hr <= 16) {
    document.body.style.backgroundImage = "url('img/bg6.jpg')";
}
else if (hr > 16 && hr <= 18) {
    document.body.style.backgroundImage = "url('img/bg7.jpg')";
}
else if (hr > 18 && hr <= 20) {
    document.body.style.backgroundImage = "url('img/bg8.jpg')";
}
else if (hr > 20 && hr <= 22) {
    document.body.style.backgroundImage = "url('img/bg9.jpg')";
}
else {
    document.body.style.backgroundImage = "url('img/bg10.jpg')";
}

// Feedback Form Toggle
let feedbackForm = document.getElementById("form-feedback");
let feedbackBtn = document.getElementById("btn-feedback");
let search = document.getElementById("search");
feedbackForm.style.display = "none";
function formOpen() {
    feedbackForm.style.display = "block";
    
}
function formClose() {
    feedbackForm.style.display = "none";
}


// Navbar Toggle

let navlist = document.getElementById("nav-list");
navlist.style.height = "0px";
let navToggle = () => {
    if (navlist.style.height == "0px") {
        navlist.style.height = "100vh";
        navlist.style.transition = "1s";
    } else {
        navlist.style.height = "0";
        navlist.style.transition = "1s";
    }
}


// Info Page
let infoDisc = document.getElementById("info-discription")
        infoDisc.style.maxHeight = "0vh"
        const info = () =>{
          if(  infoDisc.style.maxHeight == "0vh"){
            infoDisc.style.maxHeight = "100vh"
            infoDisc.style.transition = ".3s"
          }
          else{
            infoDisc.style.maxHeight = "0vh"
            infoDisc.style.transition = ".3s"
          }
        }