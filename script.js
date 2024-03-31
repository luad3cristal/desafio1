const heart = document.querySelector("#heart")
const heart1 = document.querySelector("#heart1")
const heart2 = document.querySelector("#heart2")

heart.onclick = function () {
  heart.setAttribute("name", "heart")
}

heart1.onclick = function () {
  heart1.setAttribute("name", "heart")
}

heart2.onclick = function () {
  heart2.setAttribute("name", "heart")
}
