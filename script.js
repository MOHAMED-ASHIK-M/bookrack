//selecting popupbox and popupoverlay and addbtn
 var popupbox = document.querySelector(".popupbox")
 var popupoverlay=document.querySelector(".popupoverlay")

 var addbook=document.querySelector(".addbtn")

 addbook.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="block"
    popupoverlay.style.display="block"

 })

 //selecting cancelbtn
var cancelbtn=document.querySelector(".cancelbtn")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})

//selecting "container","add"","book-title-input","book-author-input","book-descryption-input"
var container=document.querySelector(".container")
var add=document.querySelector(".add")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescryptioninput = document.getElementById("book-descryption-input")


add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
        <p>${bookdescryptioninput.value}</p>
        <button onclick="deletebook(event)">delete</button>`
        container.append(div)
        popupbox.style.display="none"
    popupoverlay.style.display="none"
    booktitleinput.value = "";
    bookauthorinput.value = "";
    bookdescryptioninput.value = "";

    
})
function deletebook(event)
{
   event.target.parentElement.remove()
}



