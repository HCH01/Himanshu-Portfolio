var Top = document.getElementById("top");
var down = document.getElementById("down");
var right = document.getElementById("right");
var left = document.getElementById("left");
let no_click = document.querySelectorAll('body *')
let first = document.querySelector('#top')
let parent_cont = document.getElementById('parent')
let nav_opt = document.querySelectorAll('.nav-opt');
let cir = document.querySelectorAll('.circle');
let top_cont = document.querySelector('.top-cont');
let left_cont = document.querySelector('.left-cont');
let right_cont = document.querySelector('.right-cont');
let down_cont = document.querySelector('.down-cont');
const flags = {
    allow: true,
    Top: true,
    down: false,
    right: false,
    left: false
}
setTimeout(()=>{document.getElementById('stars').classList.add('stars-wrap')},2000);
function Add(animeName, animeName1, animeName2, animeName3, addAnimeClass) {
    animeName.classList.add("z");
    animeName.classList.add(addAnimeClass);
    animeName1.classList.remove("z");
    animeName2.classList.remove("z");
    animeName3.classList.remove("z");
    Top.classList.add('no-click')
    down.classList.add('no-click')
    right.classList.add('no-click')
    left.classList.add('no-click')
    document.querySelector('.nav-box').classList.add('no-click')
    flags['allow'] = false;
}

function remove(removeAnime, removeNameClass, animeName) {
    removeNameClass.classList.remove(removeAnime);
    Top.classList.remove('no-click');
    down.classList.remove('no-click');
    left.classList.remove('no-click');
    right.classList.remove('no-click');
    document.querySelector('.nav-box').classList.remove('no-click')
    flags['allow'] = true;
}


function Anime(removeAnime, removeNameClass, animeName, animeName1, animeName2, animeName3, addAnimeClass) {
    setTimeout(remove, 1500, removeAnime, removeNameClass, animeName);
    Add(animeName, animeName1, animeName2, animeName3, addAnimeClass);
}

right.addEventListener('touchstart',(e)=>{e.preventDefault()})
left.addEventListener('touchstart',(e)=>{e.preventDefault()})
document.querySelectorAll('.circle').forEach(ele=>{      
})
if(window.innerWidth < window.innerHeight){document.getElementById('navbar').style.bottom = '190px';
    top_cont.classList.add('anime-top')};

let Xstart;
let Ystart;
parent_cont.addEventListener("touchstart", (e) => {
    [...e.changedTouches].forEach((touch) => {
        Xstart = touch.pageX;
        Ystart = touch.pageY;
    })
    
})
parent_cont.addEventListener("touchend", (e) => {
    [...e.changedTouches].forEach((touch) => {
        if(flags['allow']){
            if(Math.abs(Xstart - touch.pageX) > Math.abs(Ystart - touch.pageY)){
                if(Xstart - touch.pageX < -50){
                    leftSwipe();
                }
                else if(Xstart - touch.pageX > 50){
                    rightSwipe();
                }
            }else{
                if(Ystart - touch.pageY < -50){
                    upSwipe();
                }
                else if(Ystart - touch.pageY > 50){
                    downSwipe();
                }
            }
        }
    })
})
const keyEventHandler = (e) => {
    if (flags['allow']) {
        switch (e.key) {
            case "ArrowLeft":
                leftSwipe();
                break;
            case "ArrowRight":
                rightSwipe();
                break;
            case "ArrowUp":
                upSwipe();
                break;
            case "ArrowDown":
                downSwipe();
                break;
        }
    }

}
const keyEvent = () => {
    window.addEventListener('keydown', (e) => {
        keyEventHandler(e);
    }
    )
}
keyEvent();
const removeBarsAnime = ()=>{
    document.querySelectorAll('.indicator').forEach(ele=>{
        ele.classList.remove("anime-bars");
    })
}
const leftSwipe = ()=>{
    if (!flags['left']) {
        flags['left'] = true;
        addClassTxt(document.getElementById('nav-left'),'3');
        addClassCir(document.getElementById('crl-left'))
        setTimeout(()=>{left_cont.classList.add('anime-left')},100)
        if (flags['Top'] ) {
            flags['Top'] = false;
            Anime('AnimeTop', Top, left, right, down, Top, 'AnimeLeft');
            removeClassTxt(document.getElementById('nav-top'),'4');
            removeClassCir(document.getElementById('crl-top'));
            top_cont.classList.remove('anime-top');
            document.querySelector('.profile-pic').classList.remove('anime-top');
        }
        else if (flags['right']) {
            flags['right'] = false;
            Anime('AnimeRight', right, left, right, down, Top, 'AnimeLeft');
            removeClassTxt(document.getElementById('nav-right'),'2');
            removeClassCir(document.getElementById('crl-right'));
            right_cont.classList.remove('anime-right');
            removeBarsAnime();
        }
        else if (flags['down']) {
            flags['down'] = false;
            Anime('AnimeDown', down, left, right, down, Top, 'AnimeLeft');
            removeClassTxt(document.getElementById('nav-down'));
            removeClassCir(document.getElementById('crl-down'));
            down_cont.classList.remove('anime-down')
            down_cont.children[0].childNodes[3].classList.remove('anime-down')
        }
    }
}
const rightSwipe = ()=>{
    if (!flags['right']) {
        flags['right'] = true;
        addClassTxt(document.getElementById('nav-right'),'2');
        addClassCir(document.getElementById('crl-right'))
        setTimeout(()=>{right_cont.classList.add('anime-right');
        document.querySelectorAll('.indicator').forEach(ele=>{
            ele.classList.add("anime-bars");
        })},300)
        right_cont.classList.add('anime-right');
        document.querySelectorAll('.indicator').forEach(ele=>{
            ele.classList.add("anime-bars");
        })
        if (flags['Top']) {
            flags['Top'] = false;
            Anime('AnimeTop', Top, right, Top, down, left, 'AnimeRight');
            removeClassCir(document.getElementById('crl-top'));
            removeClassTxt(document.getElementById('nav-top'),'4');
            top_cont.classList.remove('anime-top');
            document.querySelector('.profile-pic').classList.remove('anime-top');
        }
        else if (flags['left']) {
            flags['left'] = false;
            Anime('AnimeLeft', left, right, down, left, Top, 'AnimeRight');
            removeClassTxt(document.getElementById('nav-left'),'3')
            removeClassCir(document.getElementById('crl-left'));
            left_cont.classList.remove('anime-left')
        }
        else if (flags['down']) {
            flags['down'] = false;
            Anime('AnimeDown', down, right, left, down, Top, 'AnimeRight');
            removeClassTxt(document.getElementById('nav-down'));
            removeClassCir(document.getElementById('crl-down'));
            down_cont.classList.remove('anime-down')
            down_cont.children[0].childNodes[3].classList.remove('anime-down')
        }
    }
}
const upSwipe = ()=>{
    if (!flags['Top']) {
        flags['Top'] = true;
        addClassTxt(document.getElementById('nav-top'),'4');
        addClassCir(document.getElementById('crl-top'))
        setTimeout(()=>{top_cont.classList.add('anime-top');},500)
        setTimeout(()=>{document.querySelector('.profile-pic').classList.add('anime-top');},600)
        if (flags['right']) {
            flags['right'] = false;
            Anime('AnimeRight', right, Top, right, down, left, 'AnimeTop');
            removeClassTxt(document.getElementById('nav-right'),'2')
            removeClassCir(document.getElementById('crl-right'));
            removeBarsAnime();
            right_cont.classList.remove('anime-right');
        }
        else if (flags['left']) {
            flags['left'] = false;
            Anime('AnimeLeft', left, Top, right, down, left, 'AnimeTop');
            removeClassTxt(document.getElementById('nav-left'),'3')
            removeClassCir(document.getElementById('crl-left'));
            left_cont.classList.remove('anime-left')
        }
        else if (flags['down']) {
            flags['down'] = false;
            Anime('AnimeDown', down, Top, right, down, left, 'AnimeTop');
            removeClassTxt(document.getElementById('nav-down'))
            removeClassCir(document.getElementById('crl-down'));
            down_cont.classList.remove('anime-down')
            down_cont.children[0].childNodes[3].classList.remove('anime-down')
        }
    }
}
const downSwipe = ()=>{
    if (!flags['down']) {
        flags['down'] = true;
        addClassTxt(document.getElementById('nav-down'));
        addClassCir(document.getElementById('crl-down'));
        down_cont.classList.add('anime-down');
        setTimeout(()=>{down_cont.children[0].childNodes[3].classList.add('anime-down');console.log('first')},100)
        if (flags['right']) {
            flags['right'] = false;
            Anime('AnimeRight', right, down, right, left, Top, 'AnimeDown');
            removeClassTxt(document.getElementById('nav-right','2'))
            removeClassCir(document.getElementById('crl-right'));
            right_cont.classList.remove('anime-right');
            removeBarsAnime();
        }
        else if (flags['left']) {
            flags['left'] = false;
            Anime('AnimeLeft', left, down, right, left, Top, 'AnimeDown');
            removeClassTxt(document.getElementById('nav-left','3'))
            removeClassCir(document.getElementById('crl-left'));
            left_cont.classList.remove('anime-left')
        }
        else if (flags['Top']) {
            flags['Top'] = false;
            Anime('AnimeTop', Top, down, right, Top, left, 'AnimeDown');
            removeClassTxt(document.getElementById('nav-top','4'))
            removeClassCir(document.getElementById('crl-top'));
            top_cont.classList.remove('anime-top');
            document.querySelector('.profile-pic').classList.remove('anime-top');
        }
    }
}
const NavEvent = (ele,eleType)=>{
    if(eleType==='crl-'){
        ele.addEventListener('mouseover',()=>{
            document.getElementById(eleType + ele.id.slice(4)).classList.add('circle-focus')
            ele.classList.add('text-focus-1')
            if(ele.id.slice(4)==='right'){
                ele.classList.add('text-focus-2')
            }
            else if(ele.id.slice(4)==='left'){
                ele.classList.add('text-focus-3')
            }
            else if(ele.id.slice(4)==='top'){
                ele.classList.add('text-focus-4')
            }
        })
        ele.addEventListener('mouseout',()=>{
            document.getElementById(eleType + ele.id.slice(4)).classList.remove('circle-focus')
            ele.classList.remove('text-focus-1')
            if(ele.id.slice(4)==='right'){
                ele.classList.remove('text-focus-2')
            }
            else if(ele.id.slice(4)==='left'){
                ele.classList.remove('text-focus-3')
            }
            else if(ele.id.slice(4)==='top' && flags['Top']===false){
                ele.classList.remove('text-focus-4')
            }
        })  
    }else{
        ele.addEventListener('mouseover',()=>{
            document.getElementById(eleType + ele.id.slice(4)).classList.add('text-focus-1')
            ele.classList.add('circle-focus')
            if(ele.id.slice(4)==='right'){
                document.getElementById(eleType + ele.id.slice(4)).classList.add('text-focus-2')
            }
            else if(ele.id.slice(4)==='left'){
                document.getElementById(eleType + ele.id.slice(4)).classList.add('text-focus-3')
            }
            else if(ele.id.slice(4)==='top'){
                document.getElementById(eleType + ele.id.slice(4)).classList.add('text-focus-4')
            }
        })
        ele.addEventListener('mouseout',()=>{
            document.getElementById(eleType + ele.id.slice(4)).classList.remove('text-focus-1')
            ele.classList.remove('circle-focus')
            if(ele.id.slice(4)==='right'){
                document.getElementById(eleType + ele.id.slice(4)).classList.remove('text-focus-2')
            }
            else if(ele.id.slice(4)==='left'){
                document.getElementById(eleType + ele.id.slice(4)).classList.remove('text-focus-3')
            }
            else if(ele.id.slice(4)==='top'){
                document.getElementById(eleType + ele.id.slice(4)).classList.remove('text-focus-4')
            }
        })  
    }
}
if(flags['Top']){
    document.getElementById('nav-top').classList.add('text-focus-1-click','text-focus-4-click');
    document.getElementById('crl-top').classList.add('circle-focus-click');
}
nav_opt.forEach(ele=>{
    if(flags['allow'] && window.innerWidth > window.innerHeight){NavEvent(ele,'crl-')};
        ele.addEventListener('click',()=>{
            if(flags['allow']){
                if(ele.id.slice(4)==='left'){
                    leftSwipe(ele);
                }
                if(ele.id.slice(4)==='right'){
                    rightSwipe(ele);
                }
                if(ele.id.slice(4)==='down'){
                    downSwipe(ele);
                }
                if(ele.id.slice(4)==='top'){
                    upSwipe(ele);
                }
                
            }
        })
    })
cir.forEach(ele=>{
    if(flags['allow'] && window.innerWidth > window.innerHeight){NavEvent(ele,'nav-');}
        ele.addEventListener('click',()=>{
            if(flags['allow']){
                if(ele.id.slice(4)==='left'){
                    leftSwipe(ele,1);
                }
                if(ele.id.slice(4)==='right'){
                    rightSwipe(ele,1);
                }
                if(ele.id.slice(4)==='down'){
                    downSwipe(ele,1);
                }
                if(ele.id.slice(4)==='top'){
                    upSwipe(ele,1);
                }
            }
        })
    })    

const addClassTxt = (ele,classNum=undefined)=>{
    document.getElementById('crl-'+ele.id.slice(4)).classList.add('circle-focus-click')
    if(classNum!==undefined){
        ele.classList.add(`text-focus-${classNum}-click`)
    }
    ele.classList.add('text-focus-1-click')
}      
const removeClassTxt = (ele,classNum=undefined)=>{
    document.getElementById('crl-'+ele.id.slice(4)).classList.remove('circle-focus-click')
    if(classNum!==undefined){
        ele.classList.remove(`text-focus-${classNum}-click`)
        if(classNum==='4'){
            ele.classList.remove(`text-focus-4`)
        }
    }
    ele.classList.remove('text-focus-1-click')
}      
const addClassCir = (ele)=>{
    document.getElementById('nav-' + ele.id.slice(4)).classList.add('text-focus-1-click')
            ele.classList.add('circle-focus-click')
            if(ele.id.slice(4)==='right'){
                document.getElementById('nav-' + ele.id.slice(4)).classList.add('text-focus-2-click')
            }
            else if(ele.id.slice(4)==='left'){
                document.getElementById('nav-' + ele.id.slice(4)).classList.add('text-focus-3-click')
            }
            else if(ele.id.slice(4)==='top'){
                document.getElementById('nav-' + ele.id.slice(4)).classList.add('text-focus-4-click')
            }
}
const removeClassCir = (ele)=>{
    document.getElementById('nav-' + ele.id.slice(4)).classList.remove('text-focus-1-click')
            ele.classList.remove('circle-focus-click')
            if(ele.id.slice(4)==='right'){
                document.getElementById('nav-' + ele.id.slice(4)).classList.remove('text-focus-2-click')
            }
            else if(ele.id.slice(4)==='left'){
                document.getElementById('nav-' + ele.id.slice(4)).classList.remove('text-focus-3-click')
            }
            else if(ele.id.slice(4)==='top'){
                document.getElementById('nav-' + ele.id.slice(4)).classList.remove('text-focus-4-click')
            }
}
