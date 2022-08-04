// console log
const style1 = 'background: #1A1C26; color: #fff; font-size: .9rem;'
console.log("%cThis is a portfolio website of a UI/UX Designer so I believe that inspecting this website and judging the code should not interfere with the designer's designing skills.", style1)

const style2 = 'background: #1A1C26; color: #F2A000; font-size: .8rem; font-style: italic;'
console.log("%cWith Respects, The mysterious coder.", style2)

// href link
function goTo(link) {
  window.open('https://' + link, "_blank", "noopener")
}

// mobile menu js
let menuToggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

menuToggle.onclick = function() {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
}

links.forEach(link => {
  link.onclick = function() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    links.forEach(link => {
      link.classList.toggle('fade');
    });
  }
})

// let counts1 = setInterval(updated);
// let upto1 = 0;
// function updated() {
//   var count1 = document.getElementById("skill-num-exp");
//   count1.innerHTML=++upto1;
//   if (upto1 === 4) {
//     clearInterval(counts1);
//   }
// }

// loading splash screen js
// let perfData = window.performance.timing, 
// 		EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
// 		time = parseInt((EstimatedTime/1000)%100)*100

// const timeOrigin = window.performance.timeOrigin,
//       durataion = Math.max(1000, parseInt((timeOrigin/1000)%100)*100 || 100)

// const start = 0, end = 100

// console.log(time, durataion)

// animateValue(start, end, durataion)
        
// function animateValue(start, end, duration) {
//   let range = end - start,
//     current = start,
//     increment = end > start ? 1 : -1,
//     stepTime = Math.abs(Math.floor(duration / range)),
//     loader = document.querySelector('.loader'),
//     splashLeft = document.querySelector('.loader-left'),
//     splashRight = document.querySelector('.loader-right'),
//     percent = document.querySelector('.loading-text')
    
//   let timer = setInterval(function() {
//     window.scrollTo(0, 0)
//     current += increment
//     percent.innerText = current + '%'
//     if (current == end) {
//       splashLeft.classList.add('splash-left')
//       splashRight.classList.add('splash-right')
//       percent.style.display = "none"
//       setTimeout(() => {
//         loader.style.display = "none"
//       }, 500)
//       clearInterval(timer)
//     }
//   }, stepTime)
// }
