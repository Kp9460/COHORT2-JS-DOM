
var arr = [
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'darkgoldenred'
    },{
        team: 'MI',
        primary: 'blue',
        secondary: 'white'
    },{
        team: 'CSK',
        primary: 'yellow',
        secondary: 'white'
    },{
        team: 'GT',
        primary: '#0b0b33f8',
        secondary: 'darkgoldenrod'
    },{
        team: 'LSG',
        primary: 'turquoise',
        secondary: 'white'
    },{
        team: 'KKR',
        primary: 'purple',
        secondary: 'darkgoldenrod'
    },{
        team: 'RR',
        primary: 'deeppink',
        secondary: 'white'
    },{
        team: 'SRH',
        primary: 'orangered',
        secondary: 'darkgoldenrod'
    },{
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver'
    },{
        team: 'DC',
        primary: 'blue',
        secondary: 'snow'
    }
]

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var main = document.querySelector("main");

btn.addEventListener('click',function(){

    var winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary

})