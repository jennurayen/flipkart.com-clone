let productList = document.querySelector(".productList");
let back = document.querySelector(".back");
let next = document.querySelector(".next");

const scrollStep = 1000; 
const scrollSpeed = 300; 

back.addEventListener("click", () => {
    productList.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

next.addEventListener("click", () => {
    productList.scrollBy({ left: scrollStep, behavior: "smooth" });
});
