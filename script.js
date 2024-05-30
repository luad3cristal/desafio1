let heart = document.querySelector("#heart")
let heart1 = document.querySelector("#heart1")
let heart2 = document.querySelector("#heart2")
let c1 = heart.getAttribute("name")

if (heart.getAttribute("name") == "heart-outline") {
  heart.onclick = function () {
    heart.setAttribute("name", "heart")
  }
}

// if (heart.getAttribute("name") == "heart") {
//   heart.onclick = function () {
//     heart.setAttribute("name", "heart-outline")
//   }
// }

if (heart1.getAttribute("name") == "heart-outline") {
  heart1.onclick = function () {
    heart1.setAttribute("name", "heart")
  }
}

if (heart2.getAttribute("name") == "heart-outline") {
  heart2.onclick = function () {
    heart2.setAttribute("name", "heart")
  }
}
