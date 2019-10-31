const btn = document.getElementById("reqBtn");

function changeButton() {

 btn.style.color = "red";
  btn.innerHTML = "Pending";

                       };

 btn.addEventListener('click', changeButton() )