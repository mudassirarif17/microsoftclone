const bars = document.getElementById("bars");
const cross = document.getElementById("cross");

cross.style.display= "none";

bars.addEventListener("click" , function(){
    cross.style.display= "block";
    bars.style.display= "none";
})

cross.addEventListener("click" , function(){
    bars.style.display= "block";
    cross.style.display= "none";
})


