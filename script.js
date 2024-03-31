let heart = document.querySelector("#heart")
let heart1 = document.querySelector("#heart1")
let heart2 = document.querySelector("#heart2")
const c1 = heart.getAttribute("name")

heart.onclick = function () {
  heart.setAttribute("name", "heart")
}

heart.ondblclick = function () {
  heart.setAttribute("name", "heart-outline")
}

heart1.onclick = function () {
  heart1.setAttribute("name", "heart")
}

heart1.ondblclick = function () {
  heart1.setAttribute("name", "heart-outline")
}

heart2.onclick = function () {
  heart2.setAttribute("name", "heart")
}

heart2.ondblclick = function () {
  heart2.setAttribute("name", "heart-outline")
}
