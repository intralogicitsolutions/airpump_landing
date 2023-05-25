// For Making Header Responsive
const menu_btn = document.querySelector(".menu-btn");
const close_btn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const drawer = menu.querySelector(".drawer");
const blank = menu.querySelector(".blank");
const body = document.querySelector("body");
const close = () => {
  menu.classList.remove("blur");
  drawer.classList.remove("drawer-visible");
  body.classList.remove("body");
};

menu_btn.addEventListener("click", (e) => {
  menu.classList.add("blur");
  drawer.classList.add("drawer-visible");
  body.classList.add("body");
});

close_btn.addEventListener("click", (e) => {
  close();
});

blank.addEventListener("click", (e) => {
  close();
});

Array.from(drawer.querySelectorAll("a")).forEach((element) => {
  element.addEventListener("click", () => {
    close();
  });
});



// scroll
window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function dataFilled(){
  var name = document.getElementById("exampleInputName1").value;
  var email = document.getElementById("exampleInputEmail1").value;
  var massage = document.getElementById("exampleFormControlTextarea1").value;
  var btn = document.getElementById("formBtn")
  var emailError = document.getElementById("exampleInputEmail1").classList;


  if (name.length > 0 && massage.length > 0 && email.length > 0  ) {
    
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }


}
