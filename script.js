let toggleNavStatus = false;
const myNav = document.querySelector(".nav-main");
const myBody = document.querySelector("body");
const red = document.querySelector("li.red-background");
const orange = document.querySelector("li.orange-background");
const purple = document.querySelector("li.purple-background");
const green = document.querySelector("li.green-background");
const grey = document.querySelector("li.grey-background");

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");


    if (toggleNavStatus === false) {
        getSidebar.style.width = "350px";
        getSidebar.style.visibility = "visible";

        toggleNavStatus = true;
    } 
    
    else if (toggleNavStatus === true) {
        getSidebar.style.width = "80px";
        getSidebar.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

let toggleRed = function(){
    myBody.classList.add("red-background");
    myBody.classList.remove("grey-background", "orange-background", "purple-background", "green-background");
    document.getElementById("color").innerHTML = "red";
}

let toggleOrange = function(){
    myBody.classList.add("orange-background");
    myBody.classList.remove("grey-background", "red-background", "purple-background", "green-background");
    document.getElementById("color").innerHTML = "orange";
}

let togglePurple = function(){
    myBody.classList.add("purple-background");
    myBody.classList.remove("grey-background", "orange-background", "red-background", "green-background");
    document.getElementById("color").innerHTML = "purple";
}

let toggleGreen = function(){
    myBody.classList.add("green-background");
    myBody.classList.remove("grey-background", "orange-background", "purple-background", "red-background");
    document.getElementById("color").innerHTML = "green";
}

let toggleGrey = function(){
    myBody.classList.add("grey-background");
    myBody.classList.remove("red-background", "orange-background", "purple-background", "green-background");
    document.getElementById("color").innerHTML = "grey";
}


myNav.addEventListener("mouseover", toggleNav);
red.addEventListener("click", toggleRed);
red.addEventListener("click", toggleNav);
orange.addEventListener("click", toggleOrange);
orange.addEventListener("click", toggleNav);
purple.addEventListener("click", togglePurple);
purple.addEventListener("click", toggleNav);
green.addEventListener("click", toggleGreen);
green.addEventListener("click", toggleNav);
grey.addEventListener("click", toggleGrey);
grey.addEventListener("click", toggleNav);

myBody.addEventListener("keydown", function(e){
    if (e.key == 1){
        toggleRed();
    }
    else if (e.key == 2){
        toggleOrange();
    }
    else if (e.key == 3){
        togglePurple();
    }
    else if (e.key == 4){
        toggleGreen();
    }
    else if (e.key == 5){
        toggleGrey();
    }
});
