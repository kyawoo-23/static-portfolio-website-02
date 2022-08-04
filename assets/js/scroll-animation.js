const scrollElements = document.querySelectorAll(".js-scroll")
// progress bar animation
const progress = document.querySelectorAll('.progress')
const skillPercent = document.querySelectorAll('.skill-percent')
const skillBar = document.querySelector('.skill-bar')
// skill num animation
const expNum = document.getElementById('skill-num-exp')
const pjNum = document.getElementById('skill-num-pj')

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

let progressFlag = true
let expFlag = true
let pjFlag = true
function scrollAni() {
  // on-scroll animation
  handleScrollAnimation()

  // progress bar animation
  progress.forEach((p, idx) => { 
    const dataDone = p.getAttribute('data-done')
    skillPercent[idx].style.marginRight = (100 - dataDone) + '%'
    if (skillBar.classList.contains('scrolled') && progressFlag) {
      p.animate([
        { width: '0' },
        { width: dataDone + '%' }
      ], {
        duration: 1000,
        iterations: 1,
        delay: 400,
        fill: "both"
      })
      idx === 4 && (progressFlag = false)
    } else if (skillBar.classList.contains('scrolled') !== true) {
      progressFlag = true
    }
  })

  // skill num animation
  if (expNum.classList.contains('scrolled') && expFlag) {
    expFlag = false;
    let counts1 = setInterval(updated1, 230);
    let upto1 = 0;
    function updated1() {
      var count1 = document.getElementById("skill-num-exp");
      count1.innerHTML=++upto1 + "<sup>+</sup>";
      if (upto1 === 4) {
        clearInterval(counts1);
      }
    }
  } else if (expNum.classList.contains('scrolled') !== true) {
    expFlag = true;
  }
  if (pjNum.classList.contains('scrolled') && pjFlag) {
    pjFlag = false;
    let counts2 = setInterval(updated2, 50);
    let upto2 = 0;
    function updated2() {
      var count2 = document.getElementById("skill-num-pj");
      count2.innerHTML=++upto2 + "<sup>+</sup>";
      if (upto2 === 27) {
        clearInterval(counts2);
      }
    }
  } else if (pjNum.classList.contains('scrolled') !== true) {
    pjFlag = true;
  }

}
