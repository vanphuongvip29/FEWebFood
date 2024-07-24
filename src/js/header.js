window.onscroll = function () {
  fixHeader();
};

function fixHeader() {
  var header = document.getElementById("header");
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.backgroundColor = "pink";
    header.style.width = "100%";
  } else {
    header.style.position = "relative";
    header.style.backgroundColor = "pink";
  }
}
