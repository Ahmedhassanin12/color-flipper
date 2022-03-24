const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector(`.btn-hero`);
const spanColor = document.querySelector('.color')

btn.addEventListener('click', function(){
    const randomColor = Math.trunc(Math.random()* colors.length) + 1;
    document.body.style.backgroundColor = colors[randomColor];
    spanColor.textContent = colors[randomColor]
})