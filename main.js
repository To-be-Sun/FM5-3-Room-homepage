"use strict"
{
    const bgImages = {
        small: ["url(images/mobile-image-hero-1.jpg)", "url(images/mobile-image-hero-2.jpg)", "url(images/mobile-image-hero-3.jpg)"],
        large: ["url(images/desktop-image-hero-1.jpg)", "url(images/desktop-image-hero-2.jpg)", "url(images/desktop-image-hero-3.jpg)"],
    };
    const headlines = document.querySelectorAll(".text h1");
    const details = document.querySelectorAll(".text p");
    
    let screenSize = getScreenSize();
    let slideIndex = 0;
    
    function getScreenSize() {
    const width = window.innerWidth;
    if (width < 780) return "small";
    return "large";
    }
    getScreenSize();
    
    function updateBackground() {
    const slideshow = document.getElementById("slideshow");
    slideshow.style.backgroundImage = bgImages[screenSize][slideIndex];
    headlines.forEach((headline) => headline.style.display = "none");
    details.forEach((detail) => detail.style.display = "none");
    headlines[slideIndex].style.display="block";
    details[slideIndex].style.display="block";
    }
    updateBackground();
    
    document.getElementById("back").addEventListener("click",()=>{
    slideIndex--;
    if(slideIndex<0){
        slideIndex=bgImages[screenSize].length-1;
    }
    updateBackground();
    })

    document.getElementById("ahead").addEventListener("click",()=>{
    slideIndex++;
    if(slideIndex>bgImages[screenSize].length-1){
        slideIndex=0;
    }
    updateBackground();
    })

    document.querySelector("header img").addEventListener("click", ()=>{
        document.querySelector(".hamburger-open").style.transform="none";
        document.querySelector("header img").style.display = "none";
    })
    document.getElementById("close-btn").addEventListener("click", ()=>{
        document.querySelector(".hamburger-open").style.transform="translate(20000px,0)";
        document.querySelector("header img").style.display = "block";
    })


      
      
}