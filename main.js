let fontIcon = document.querySelector(".share-parent i");
let share = document.querySelector(".share-parent");
let footer = document.querySelector(".footer");
let lastIcon = document.querySelector(".last-share-icon");


fontIcon.addEventListener("click",function(){
    if (getComputedStyle(document.body).width.split("px")[0] < 1100) {
        share.style.display = "none";
        footer.style.display = "flex";
    }
    else {
        lastIcon.style.display = "flex" ;
    }
})
