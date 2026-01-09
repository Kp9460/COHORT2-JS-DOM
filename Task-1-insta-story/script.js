
let arr = [
    {dp:"https://i.pinimg.com/736x/26/5f/f0/265ff08549c111d4aa423f5ef2838c64.jpg",story:"https://i.pinimg.com/1200x/c4/65/82/c46582ce47545bbd39cbea2866a07807.jpg"},
    {dp:"https://i.pinimg.com/1200x/a7/e6/17/a7e6179145629d4f03cd25bddf2802b3.jpg",story:"https://i.pinimg.com/1200x/a7/e6/17/a7e6179145629d4f03cd25bddf2802b3.jpg"},
    {dp:"https://i.pinimg.com/736x/33/00/1a/33001aae0a09bc093c13c1925b87d8fe.jpg",story:"https://i.pinimg.com/736x/33/00/1a/33001aae0a09bc093c13c1925b87d8fe.jpg"},
    {dp:"https://i.pinimg.com/1200x/31/a3/26/31a326766f04208c13c54284bc60d331.jpg",story:"https://i.pinimg.com/1200x/64/6d/5e/646d5e4a8def6f395a97250b1e59f3e2.jpg"},
    {dp:"https://i.pinimg.com/736x/ea/cf/d4/eacfd4324d1bd5734e86771e48c49b0d.jpg",story:"https://i.pinimg.com/736x/4e/df/8e/4edf8e2ad614f9cd22080a4d0e1ca5e6.jpg"}
]

let storiyaan = document.querySelector("#storiyaan");
let clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
});

storiyaan.innerHTML = clutter;

storiyaan.addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    },3000);
});