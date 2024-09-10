let rightarrow= document.querySelector('.right');
let leftarrow= document.querySelector('.left');
let slide= document.querySelector('.slide');
let video=document.querySelector('.videio-main');

let platpause=document.querySelector('.plat-pause');
let play= document.querySelector('.playv');
let pause=document.querySelector('.pause');
let menu=document.querySelector('.menu');
let arrow=document.querySelector('.arrow');




leftarrow.addEventListener("click",()=>{
    slide.style.scrollBehavior="smooth"
    slide.scrollLeft += 500; 
});

rightarrow.addEventListener("click",()=>{
    slide.style.scrollBehavior="smooth"
    slide.scrollLeft -= 500; 
});



let isDown = false;
let startX;
let scrollLeft;

slide.addEventListener("mousedown", (e) => {
    isDown = true;
    slide.classList.add("active"); 
    startX = e.pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
});

slide.addEventListener("mouseleave", () => {
    isDown = false;
    slide.classList.remove("active");
});

slide.addEventListener("mouseup", () => {
    isDown = false;
    slide.classList.remove("active");
});

slide.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slide.offsetLeft;
    const walk = (x - startX) * 2; 
    slide.scrollLeft = scrollLeft - walk;
});


// Touch events for mobile
slide.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - slide.offsetLeft;
    scrollLeft = slide.scrollLeft;
});

slide.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - slide.offsetLeft;
    const walk = (x - startX) * 2; // Adjust for drag speed
    slide.scrollLeft = scrollLeft - walk;
});

slide.addEventListener("touchend", () => {
    isDown = false;
});




platpause.addEventListener("click", () => {
    
    if (platpause.querySelector('i.playv')) {
        video.play(); 
        platpause.innerHTML = '<i class="fa-solid fa-pause pause style"></i>'; 

        
        setTimeout(() => {
            platpause.style.display = "none";  
        }, 2000);
    } 
    
    else {
        video.pause(); 
        platpause.innerHTML = '<i class="fa-solid fa-play playv style"></i>'; 
        platpause.style.display = "flex";
    }
});


video.addEventListener("click", () => {
    platpause.style.display = "flex"; 

   
    if (platpause.querySelector('i.pause')) {
        
        setTimeout(() => {
            if (!video.paused) { 
                platpause.style.display = "none";  
            }
        }, 3000);
    } 
    
    else {
        platpause.style.display = "flex"; 
    }
});

arrow.addEventListener('click', () => {
    menu.classList.toggle('show'); 
});






 