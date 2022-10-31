const bar = document.querySelector("#bar");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");

bar.addEventListener("click", function(){
    nav.classList.add("active");
});

close.addEventListener("click",function(){
    nav.classList.remove("active");
});




// Sproduct page start 
 var mainImg = document.getElementById("main_img");
 var smallImg = document.getElementsByClassName("small_img");


smallImg[0].addEventListener('click',function(){
    mainImg.src = smallImg[0].src
})
smallImg[1].addEventListener('click',function(){
    mainImg.src = smallImg[1].src
})
smallImg[2].addEventListener('click',function(){
    mainImg.src = smallImg[2].src
})
smallImg[3].addEventListener('click',function(){
    mainImg.src = smallImg[3].src
})
// Sproduct page end

