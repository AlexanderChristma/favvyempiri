// window.addEventListener("scroll",()=>{
//     let content = document.querySelector(".mmhpics");
//     let contentposition = content.getBoundingClientRect().top;
//     let screenposition = window.innerHeight;
//     if(contentposition < screenposition){
//         content.classList.add("active");
//     }else{
//         content.classList.remove("active");
//     }

// });



var menu = document.getElementById("menu");
var nav = document.getElementById("navbar");
var close = document.getElementById("close");

window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display="block";

        },1000
    )
});

document.querySelector("#closee").addEventListener("click", function(){
    document.querySelector(".popup").style.display="none";
});


 
if(menu){
    menu.addEventListener("click", ()=>{
        nav.classList.add("active");
    })
}
if(close){
    close.addEventListener("click", ()=>{
        nav.classList.remove("active");
    })
    
}
