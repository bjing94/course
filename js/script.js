"use strict";



//only for me!
let stopButton=document.getElementById("stopButton");
let playButton=document.getElementById("playButton");
playButton.addEventListener("mousedown",function()
{
   playButton.style.opacity="0";
   playButton.style.zIndex="0";
   stopButton.style.opacity="1.0";
   stopButton.style.zIndex="1";
}
);
if(!stopButton)
{
    console.log("oh fuck!");
}
stopButton.addEventListener("mousedown",function()
{
    stopButton.style.opacity="0";
    stopButton.style.zIndex="0";
    playButton.style.opacity="1.0";
    playButton.style.zIndex="1";
}
);