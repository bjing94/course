"use strict";
//async - не ждет никого и начинает работу
//defer - ждет загрязки страницы

//courses
//=====Class manipulations:
const pnls=document.querySelectorAll(".sexyPanel");
// console.log(pnls[0].classList.length); 
// console.log(pnls[0].classList.item(0)); 
// console.log(pnls[0].classList.add('sexyPanelRed')); 
//pnls[0].classList.add('sexyPanelRed');
//pnls[0].classList.remove('sexyPanelRed');

//only for me!
let mainSong = document.getElementById("mainSong");
const stopButton = document.getElementById("stopButton");
const playButton = document.getElementById("playButton");
const sidebarButton = document.querySelector(".sexyButtonSidebar");
const sidebar=document.querySelector(".sexySideBar");
const sidebarLinks=document.querySelectorAll(".sexyInteractiveText");
//========Mobile stuff
// window.addEventListener("DOMContentLoaded",()=>{
//     const panel=document.querySelector("#firstPanel"); 
//     playButton.addEventListener("touchstart", (e)=>{
//         e.preventDefault();

//         console.log("start");
//     });
//     playButton.addEventListener("touchmove", (e)=>{
//         e.preventDefault();

//         console.log("move");
//     });
//     playButton.addEventListener("touchend", (e)=>{
//         e.preventDefault();

//         console.log("end");
//     });
// })


playButton.addEventListener("mousedown", (e) => {
    console.log(e);
    playButton.style.opacity = "0";
    playButton.style.zIndex = "0";
    stopButton.style.opacity = "1.0";
    stopButton.style.zIndex = "1";
   let currentAudio= document.querySelector('.custom-option.selected');
   let newSrc=currentAudio.dataset.value;
//    console.log(newSrc);
//    console.log(typeof(newSrc));
   mainSong.src = newSrc;
    mainSong.play();
    
    
});

stopButton.addEventListener("mousedown", function () {
    stopButton.style.opacity = "0";
    stopButton.style.zIndex = "0";
    playButton.style.opacity = "1.0";
    playButton.style.zIndex = "1";
    mainSong.pause();
    
});

sidebarButton.addEventListener('click',()=>{

    if(sidebarButton.classList.contains('sexyButtonSidebar-active') && sidebar.classList.contains('sexySideBar-active'))
    {
        sidebarButton.classList.remove('sexyButtonSidebar-active');

        sidebar.classList.remove('sexySideBar-active','sexySideBar-slide');
        console.log("sliding out!");
        sidebar.classList.add('sexySideBar-slideout');
    }
    else
    {
        if(sidebar.classList.contains('sexySideBar-slideout'))
        {
            console.log("removing!");
             sidebar.classList.remove('sexySideBar-slideout');
        }
        sidebarButton.classList.add('sexyButtonSidebar-active');
        sidebar.classList.add('sexySideBar-active','sexySideBar-slide');
        
       
        
    }
});

function dynamicallyCreateSexyPanels(start, n, startRGB, endRGB) {
    let baseName = "dynamicSexyPanel";
    let createdPanel;
    let mainBody = document.getElementById("mainPart");
    let addR = (endRGB[0] - startRGB[0]) / n;
    let addG = (endRGB[1] - startRGB[1]) / n;
    let addB = (endRGB[2] - startRGB[2]) / n;
    let currR = startRGB[0];
    let currG = startRGB[1];
    let currB = startRGB[2];
    for (let i = 0; i < n; i++) {
        createdPanel = document.createElement(baseName + i);
        createdPanel.classList.add("sexyPanel");
        createdPanel.style.top = start + "px";
        createdPanel.innerHTML = "<div class='sexyPanelTextBox'>Our daddy told us not to be ashamed of our dicks!</div>"
        createdPanel.style.backgroundColor = `rgb(${currR},${currG},${currB})`;
        start = start + 400;
        mainBody.append(createdPanel);
        currR += addR;
        currG += addG;
        currB += addB;
    }
};

dynamicallyCreateSexyPanels(2150, 5, [0, 0, 0], [255, 255, 255]);

//=======custom droplist
document.querySelector('.custom-select-wrapper').addEventListener('click',function(){
    this.querySelector('.custom-select').classList.toggle('open');
});//Here we open our droplist

for(const option of document.querySelectorAll(".custom-option")){
    option.addEventListener('click',function(){ //on click find that contains selected
        if(!this.classList.contains('selected'))
        {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;

        }
    })
}

window.addEventListener('click',function(e){ //close if we click off
    const select = document.querySelector('.custom-select')
    if(!select.contains(e.target)){
        select.classList.remove('open');
    }
})

