const sideBarItems = document.querySelectorAll('.side-bar-item')

// side-bar on-mouse-remove animation control
for(const item of sideBarItems) {
  item.addEventListener('mouseover', function(e) {
    e.currentTarget.classList.add('preloaded')
  })
}

// side-bar on-click active control
function navigateTo(e, link) {
  for(const item of sideBarItems) {
    item.classList.remove('active')
  }
  e.classList.add('active')
  location.href = link
}

// side-bar on-scroll active control
function scrollControl() {
  let mainSection = document.querySelectorAll('.scroll-container section')
  mainSection.forEach((i, j) => {
    let rect = i.getBoundingClientRect().y
    if(rect < (window.innerHeight - 400)) {
      sideBarItems.forEach(i => i.classList.remove('active'))
      sideBarItems[j].classList.add('active')
    }
  })
}
