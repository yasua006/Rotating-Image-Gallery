// Getting the elements
const imgconElem = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
// Assign a number
let x = 0;
// a string
let timer;
function updateGallery()
{
    // fix
    imgconElem.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    // ends here
    timer = setTimeout(()=> {
        x = x - 45;
        updateGallery();
    }, 3000);
}
// using the function outside
updateGallery()
prevEl.addEventListener("click", ()=> {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
});
nextEl.addEventListener("click", ()=> {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
});