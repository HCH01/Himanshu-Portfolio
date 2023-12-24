let audioPlayer1 = document.getElementById('bells');
let audioPlayer2 = document.getElementById('song');
let audioPlayer3 = document.getElementById('vm');

function playSong(){
    document.getElementById('santa').classList.add('santa-ride');
    document.querySelector('.present-box').classList.add('fade-animation');
    audioPlayer2.pause();
    audioPlayer1.play();
    setTimeout(treeUp,7000);
}

function treeUp(){
    let tree = document.getElementById('tree-container');
    tree.classList.add('tree-up')
    let count = 0;
    let root = document.querySelector(':root');
    setTimeout(()=>{root.style.setProperty('--col-3','blue')},3000);
    setTimeout(()=>{root.style.setProperty('--col-2','green')},4000);
    setTimeout(()=>{root.style.setProperty('--col-1','red')},5000);
    setTimeout(()=>{
        document.querySelector('.star').classList.add('glow-star');
        setTimeout(()=>{
            document.querySelector('.tree').classList.add('glow-tree');
        },1000)
        setTimeout(()=>{
            document.querySelector('.payal').classList.add('glow-text');
        },2500)
        setTimeout(()=>{
            document.querySelector('.heart').classList.add('glow-heart');
            setTimeout(()=>{
                document.querySelector('.voice-present').classList.add('v-anime');
            },500)
        },4000)
    },6000);
}

function playVM(){
    audioPlayer2.volume = 0.1;
    audioPlayer3.play();
}

audioPlayer3.addEventListener('ended',()=>{
    audioPlayer2.volume = 1;
    audioPlayer2.play();
})

audioPlayer1.addEventListener('ended',()=>{
    audioPlayer2.play();
})