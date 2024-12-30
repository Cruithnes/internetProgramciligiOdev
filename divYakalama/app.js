const target = document.querySelector(".target");
target.addEventListener("mouseover", () => {
    const randomX = Math.floor(Math.random() * 1650)
    const randomY = Math.floor(Math.random() * 815)
    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
})