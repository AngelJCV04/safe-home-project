//Menu
const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function () {
  menu.classList.toggle("active");
});

//Closes the menu when they touch the button
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach((menuLinks) => {
  menuLinks.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

//Carousel
if (document.querySelector("#container-slider")) {
  setInterval('fntExecuteSlide("next")', 5000);
}
//List Slider
if (document.querySelector(".listslider")) {
  let link = document.querySelectorAll(".listslider li a");
  link.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let item = this.getAttribute("itlist");
      let arrItem = item.split("_");
      fntExecuteSlide(arrItem[1]);
      return false;
    });
  });
}

function fntExecuteSlide(side) {
  let parentTarget = document.getElementById("slider");
  let elements = parentTarget.getElementsByTagName("li");
  let curElement, nextElement;

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].style.opacity == 1) {
      curElement = i;
      break;
    }
  }
  if (side == "prev" || side == "next") {
    if (side == "prev") {
      nextElement = curElement == 0 ? elements.length - 1 : curElement - 1;
    } else {
      nextElement = curElement == elements.length - 1 ? 0 : curElement + 1;
    }
  } else {
    nextElement = side;
    side = curElement > nextElement ? "prev" : "next";
  }
  //Highlight The Points
  let elementSel = document
    .getElementsByClassName("listslider")[0]
    .getElementsByTagName("a");
  elementSel[curElement].classList.remove("item-select-slid");
  elementSel[nextElement].classList.add("item-select-slid");
  elements[curElement].style.opacity = 0;
  elements[curElement].style.zIndex = 0;
  elements[nextElement].style.opacity = 1;
  elements[nextElement].style.zIndex = 1;
}
