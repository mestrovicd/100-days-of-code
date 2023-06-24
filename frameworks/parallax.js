const image = document.getElementById("main-image");
new simpleParallax(image, {
    scale: 1.5,
    delay: 0.6,
    transition: "cubic-bezier(0,0,0,1)",
});
