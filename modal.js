var parent= document.querySelector(".modal-parent")
var section = document.querySelector("section")
var press=document.querySelector(".X")
var btn =document.querySelector("button")

btn.addEventListener("click", appear)
function appear(){
    parent.style.display="block";
    section.style.filter= "blur(10px)";
}
press.addEventListener("click", disappear)
function disappear(){
    parent.style.display="none";
    section.style.filter= "blur(0px)";
}
parent.addEventListener("click", disapp)
function disapp(c){
    if(c.target.className="modal-parent"){
    parent.style.display="none";
    section.style.filter= "blur(0px)";
    }
}
