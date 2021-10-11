let cursorMeter = document.getElementById('cursorMeter')
document.addEventListener('mousemove', function (e) {
  cursorMeter.style.top = e.clientY+'px'
  cursorMeter.style.left = e.clientX+'px'
})


let percent = document.getElementById('percent')
let progressBar = document.getElementById('progressBar')
let calcProgress = () => {
  let totalHeight = document.body.scrollHeight - window.innerHeight
  let progress = (window.pageYOffset / totalHeight) * 100
  progressBar.style.width = progress + '%'
  percent.innerHTML = "Page Scrolled " + Math.round(progress) + "%"
}

window.onscroll = function () {
  calcProgress()
}
window.onresize = function () {
  calcProgress()
}