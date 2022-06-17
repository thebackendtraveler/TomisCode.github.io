 /*Photo by Chris Karidis on Unsplash*/

 const openBtn = document.querySelector(".js-open")
 const modalBg = document.getElementById("modal-background")
 const modalBox = document.getElementById("modal-box")
 openBtn.addEventListener('click', function(event) {
     event.preventDefault()
     console.log("HELLO; THIS IS A CLICK!!")
     modalBg.classList.add("active")
     modalBox.classList.add("active")
 })

 const closeBtns = document.querySelectorAll(".js-close")
 closeBtns.forEach(node=> {
     node.addEventListener('click', function (e) {
         e.preventDefault()
         modalBg.classList.remove("active")
         modalBox.classList.remove("active")
     })
 })