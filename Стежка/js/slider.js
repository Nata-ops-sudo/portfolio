window.addEventListener("DOMContentLoaded", function () {
  "use strict";
  var listItemWidth = 479;
  var visibleCards = 3;
  var slidesList = document.querySelector(".carousel-list");
  var listElems = document.querySelectorAll(".carousel-item");
  var listPosition = 0;
  var leftArrow = document.querySelector(".carousel-previous");
  var rightArrow = document.querySelector(".carousel-next");
  leftArrow.addEventListener("click", function (e) {
    e.preventDefault();
    listPosition += listItemWidth * 1;
    slidesList.style.transform = "translate(" + listPosition + "px, 0)";

    if (listPosition > 0) {
      listPosition = -(
        listItemWidth * listElems.length -
        listItemWidth * visibleCards
      );
      slidesList.style.transform = "translate(" + listPosition + "px, 0)";
    }
  });
  rightArrow.addEventListener("click", function (e) {
    e.preventDefault();
    listPosition -= listItemWidth * 1;
    console.log(listPosition);
    slidesList.style.transform = "translate(" + listPosition + "px, 0)";

    if (
      Math.abs(listPosition) >=
      listItemWidth * listElems.length - listItemWidth * (visibleCards - 1)
    ) {
      listPosition = 0;
      slidesList.style.transform = "translate(" + listPosition + "px, 0)";
    }
  });
});
