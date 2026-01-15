let btn = document.querySelector("button");
let main = document.querySelector("main");

let arr = ['“The greatest pleasure of life is love.”',' “Life is what we make it, always has been, always will be.” ',' “Every strike brings me closer to the next home run.”','“Life is short, and it is here to be lived.” ','“When you cease to dream you cease to live.”','“Every moment is a fresh beginning.”'];

btn.addEventListener("click",function(){

    let h1 = document.createElement('h1');

    let x = Math.random()*80
    let y = Math.random()*80
    let rot = Math.random()*360
    let scl = Math.random()*3
    
    let a = Math.floor(Math.random()*arr.length)

    h1.innerHTML = arr[a]
    h1.style.color = 'white'
    h1.style.position = 'absolute'

    h1.style.top = y+'%'
    h1.style.left = x+'%'
    h1.style.scale = scl
    h1.style.rotate = rot+'deg'

    main.appendChild(h1);
});

