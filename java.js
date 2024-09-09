let rightarrow= document.querySelector('.right');
let leftarrow= document.querySelector('.left');
let slide= document.querySelector('.slide');

leftarrow.addEventListener("click",()=>{
    slide.style.scrollBehavior="smooth"
    slide.scrollLeft += 500; 
});

rightarrow.addEventListener("click",()=>{
    slide.style.scrollBehavior="smooth"
    slide.scrollLeft -= 500; 
});


// Mouse drag functionality
let isDown = false;
let startX;
let scrollLeft;

slide.addEventListener("mousedown", (e) => {
    isDown = true;
    slide.classList.add("active"); // Optional: to apply styles like cursor change
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
    const walk = (x - startX) * 2; // Multiply by 2 to increase the drag speed
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

