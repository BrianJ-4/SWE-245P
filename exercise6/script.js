// Get container that holds all slides in one horizontal row
const slideContainer = document.querySelector(".slide__container");

// Get all images inside container including clone slides
const images = document.querySelectorAll(".slide__container img");

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

// Start on first real slide
let counter = 1;
let imgSize = images[0].clientWidth;

// Position container so first real image is visible
slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;

// Next
nextButton.addEventListener("click", () => {
    // Prevent going past last available image index
    if (counter >= images.length - 1)
        return;
    counter++;
    slideContainer.style.transition = "0.25s ease-in-out";
    slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
});

// Previous
prevButton.addEventListener("click", () => {
     // Prevent going before first available image index
    if (counter <= 0)
        return;
    counter--;
    slideContainer.style.transition = "0.25s ease-in-out";
    slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
});

// Looping logic when sliding animation finishes
slideContainer.addEventListener("transitionend", () => {
    // If moved onto cloned first slide at end
    if (images[counter].id === "firstClone") {
        slideContainer.style.transition = "none";
        counter = 1;
        // Jump back to real slide #1
        slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
    }
    // If moved onto cloned last slide at beginning
    if (images[counter].id === "lastClone") {
        slideContainer.style.transition = "none";
        counter = images.length - 2;
        // Jump to last real slide
        slideContainer.style.transform = `translateX(${-imgSize * counter}px)`;
    }
});

// In the HTML we have all five images next to each other in a straight line, 
// with the clone images at the ends. The visible area only shows one image 
// at a time. When we change the image, we don’t replace anything, we just 
// shift the whole strip of images left or right so that the image we want 
// moves into the visible area.