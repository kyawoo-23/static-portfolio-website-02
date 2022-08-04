var mybutton = document.getElementById("upBtn");
var lastScrollTop = window.pageYOffset;
var scrollContainer = document.querySelector(".scroll-container")

scrollContainer.addEventListener("scroll", function(){
  if (scrollContainer.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    var st = scrollContainer.pageYOffset || scrollContainer.scrollTop;
      if (st > lastScrollTop){
        // downscroll code
        mybutton.classList.remove('showBtn');
      } else {
        // upscroll code
        mybutton.classList.add('showBtn');
      }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  } else {
    mybutton.classList.remove('showBtn');
  }
}, false);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  scrollContainer.scrollTop = 0;
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
}
