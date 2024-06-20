let cursor = document.querySelector(".bubblecursor")
let body = document.querySelector(".container");

body.addEventListener("mousemove", (dets)=>{
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
});


