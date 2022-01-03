const box = document.getElementById("box-1");
box.addEventListener("click",function(event){
    event.target.style.backgroundColor ="red";


})

var boxes = document.getElementsByClassName("box-to-select");
for (const element of boxes){
    element.addEventListener("click",function(event) {
        event.target.style.backgroundColor ="blue";
        console.log(event,"event");

    });
}
quryFifthBox =document.querySelector("#box-5");
querFifthBox.addEventListener("click",function(event){
    event.target.style.backgroundColor ="yellow";
});

const queryBoxes = document.querySelectorAll(".box-to-select-2");
for (const element of queryBoxes){
    element.addEventListener("click",function (event) {
        event.target.style.backgroundColor="green";
    });
}
