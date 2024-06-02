let heart = document.querySelector("#heart")
let heart2 = document.querySelector("#heart2")
let heart3 = document.querySelector("#heart3")

function take() {
  if (heart.getAttribute("name") == "heart-outline") {
    heart.setAttribute("name", "heart")
  } else {
    heart.removeAttribute("name")
    heart.setAttribute("name", "heart-outline")
  }
}

function take2() {
  if (heart2.getAttribute("name") == "heart-outline") {
    heart2.setAttribute("name", "heart")
  } else {
    heart2.removeAttribute("name")
    heart2.setAttribute("name", "heart-outline")
  }
}

function take3() {
  if (heart3.getAttribute("name") == "heart-outline") {
    heart3.setAttribute("name", "heart")
  } else {
    heart3.removeAttribute("name")
    heart3.setAttribute("name", "heart-outline")
  }
}
