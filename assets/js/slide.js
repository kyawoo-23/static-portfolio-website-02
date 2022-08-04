let n = 1;
let slide1 = document.getElementById("mySlides1");
let slide2 = document.getElementById("mySlides2");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

function changeSlide(v) {
  n *= -1;
  n === 1 ? (
    slide1.style.display = "block",
    slide2.style.display = "none"
  ) : (
    slide1.style.display = "none",
    slide2.style.display = "block"
  )

  if (v === 'prev') {
    if (n === 1) {
      slide1.animate([
        { 
          transform: 'translateX(-100%)',
          opacity: 0
        },
        { 
          transform: 'translateX(0)',
          opacity: 1
        }
      ], {
        duration: 400,
        iterations: 1,
        fill: "both"
      });
    } else {
      slide2.animate([
        { 
          transform: 'translateX(-100%)',
          opacity: 0
        },
        { 
          transform: 'translateX(0)',
          opacity: 1
        }
      ], {
        duration: 400,
        iterations: 1,
        fill: "both"
      });
    }
  } else if (v === 'next') {
    if (n === 1) {
      slide1.animate([
        { 
          transform: 'translateX(100%)',
          opacity: 0
        },
        { 
          transform: 'translateX(0)',
          opacity: 1
        }
      ], {
        duration: 400,
        iterations: 1,
        fill: "both"
      });
    } else {
      slide2.animate([
        { 
          transform: 'translateX(100%)',
          opacity: 0
        },
        { 
          transform: 'translateX(0)',
          opacity: 1
        }
      ], {
        duration: 400,
        iterations: 1,
        fill: "both"
      });
    }
  }
}
