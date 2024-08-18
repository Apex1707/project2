let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('play');
let masterpause=document.getElementById('pause');
let progressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('ping');

let songs=[
    {songname:"Subhanallah",filepath:'songs/1.mp3',coverpath:'covers/1.jpeg'},
    {songname:"Abhi kuch dino se",filepath:'songs/2.mp3',coverpath:'covers/2.webp'},
    {songname:"Akull-Yaad na aye",filepath:'songs/3.mp3',coverpath:'covers/3.jpeg'},
    {songname:"pehle bhi main",filepath:'songs/4.mp3',coverpath:'covers/4.jpg'},
    {songname:"Chale aana",filepath:'songs/5.mp3',coverpath:'covers/5.jpeg'},
    {songname:"Ek tarfa",filepath:'songs/6.mp3',coverpath:'covers/6.jpeg'},
    {songname:"Jab tak",filepath:'songs/7.mp3',coverpath:'covers/7.jpeg'},
    {songname:"Nai Lagda",filepath:'songs/8.mp3',coverpath:'covers/8.jpeg'},
    {songname:"Shayad",filepath:'songs/9.mp3',coverpath:'covers/9.jpeg'},
    {songname:"Tu hi hai",filepath:'songs/10.mp3',coverpath:'covers/10.jpeg'}
]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.style.display="none"
        masterpause.classList.remove('pauseok');
        gif.style.opacity=1;
    }
})

masterpause.addEventListener('click',()=>{
    if(audioElement.play || audioElement.currentTime>0){
        
            audioElement.pause();
            masterpause.classList.add('pauseok');
            masterplay.style.display="inline"
            gif.style.opacity=0;
            
    }
})

audioElement.addEventListener('timeupdate',()=>{
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   progressbar.value=progress;
   

})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
    
})

const makeAllplay=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{

    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        songindex=parseInt(e.target.id)
        audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
})
