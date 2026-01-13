var arr = [
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'darkgoldenred',
        fullName: 'Royal Challengers Bengaluru',
        trophies: '🏆',
        captain: 'Rajat Patidar'
    },{
        team: 'MI',
        primary: 'blue',
        secondary: 'white',
        fullName: 'Mumbai Indians',
        trophies: '🏆🏆🏆🏆🏆',
        captain: 'Hardik Pandya'
    },{
        team: 'CSK',
        primary: 'yellow',
        secondary: 'white',
        fullName: 'Chennai Super Kings',
        trophies: '🏆🏆🏆🏆🏆',
        captain: 'MSD'
    },{
        team: 'GT',
        primary: '#0b0b33f8',
        secondary: 'darkgoldenrod',
        fullName: 'Gujrat Titans',
        trophies: '🏆',
        captain: 'Shubman Gill'
    },{
        team: 'LSG',
        primary: 'turquoise',
        secondary: 'white',
        fullName: 'Lucknow Super Giants',
        trophies: '❌',
        captain: 'Rishabh Pant'
    },{
        team: 'KKR',
        primary: 'purple',
        secondary: 'darkgoldenrod',
        fullName: 'Kolkata Knight Riders',
        trophies: '🏆🏆🏆',
        captain: 'Ajinkya Rahane'
    },{
        team: 'RR',
        primary: 'deeppink',
        secondary: 'white',
        fullName: 'Rajasthan Royals',
        trophies: '🏆',
        captain: 'Riyan Prag'
    },{
        team: 'SRH',
        primary: 'orangered',
        secondary: 'darkgoldenrod',
        fullName: 'Sunrisers Hyderabad',
        trophies: '🏆',
        captain: 'Pat Cummins'
    },{
        team: 'PBKS',
        primary: 'crimson',
        secondary: 'silver',
        fullName: 'Punjab Kings',
        trophies: '❌',
        captain: 'Shreyas Iyer'
    },{
        team: 'DC',
        primary: 'blue',
        secondary: 'snow',
        fullName: 'Delhi Capitals',
        trophies: '❌',
        captain: 'Axar Patel'
    }
]

var btn = document.querySelector("button");
var h1 = document.querySelector("h1");
var main = document.querySelector("main");
var fullName = document.querySelector("#fullname");
var captain = document.querySelector("#captain");
var trophy = document.querySelector("#trophies");


btn.addEventListener('click',function(){

    var winner = arr[Math.floor(Math.random()*arr.length)]

    h1.innerHTML = winner.team
    h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.primary
    fullName.innerHTML = winner.fullName
    captain.innerHTML = winner.captain
    trophy.innerHTML = winner.trophies
});