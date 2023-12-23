const bars = document.getElementById("bars");
const cross = document.getElementById("cross");
const menu = document.getElementById("menu");

cross.style.display= "none";
menu.style.top = "-100%";

bars.addEventListener("click" , function(){
    cross.style.display= "block";
    bars.style.display= "none";
    menu.style.transition = "all 0.5s ease 0s"
    menu.style.top = "64px";
})

cross.addEventListener("click" , function(){
    bars.style.display= "block";
    cross.style.display= "none";
    menu.style.top = "-100%";
})


