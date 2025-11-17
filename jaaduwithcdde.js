//generate random color 
const randomcolor =function(){
    const hex= '0123456789ABCDEF'
    let color ='#'
    for(let i=0; i<6;i++){
color+=hex[Math.floor(Math.random()*16)];
    }
 return color 
}
let  constsetinterval;
//i should reference of start and stop button 
const startchangingcolor= function(){
    // run continously so use setInterval
   constsetinterval= setInterval(changebackgroudcolor,1000)
   function changebackgroudcolor (){document.body.style.backgroundColor=randomcolor();}
};
const stopchangingcolor= function(){
    clearInterval( constsetinterval)
}
document.querySelector('#start').addEventListener('click',startchangingcolor)
document.querySelector('#stop').addEventListener('click',stopchangingcolor)