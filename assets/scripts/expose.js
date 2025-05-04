// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  

  const jsConfetti = new JSConfetti()


  const selectedElement = document.querySelector("#horn-select")
  const image = document.querySelector("img")
  const button = document.querySelector("button")
  const audio = document.querySelector("audio")
  const volume = document.querySelector("#volume-controls input")
  const volumePicture = document.querySelector("#volume-controls img")

  selectedElement.addEventListener("change", (event) => { 
    if (selectedElement.value === "select") {
      image.setAttribute("src", "assets/images/no-image.png")
      audio.setAttribute("src", "")
    } else if (selectedElement.value === "air-horn") {
      image.setAttribute("src", "assets/images/air-horn.svg")
      audio.setAttribute("src", "assets/audio/air-horn.mp3")
    } else if (selectedElement.value === "car-horn") {
      image.setAttribute("src", "assets/images/car-horn.svg")
      audio.setAttribute("src", "assets/audio/car-horn.mp3")
    } else if (selectedElement.value === "party-horn") {
      image.setAttribute("src", "assets/images/party-horn.svg")
      audio.setAttribute("src", "assets/audio/party-horn.mp3")
    }
  })

  volume.addEventListener("input", (event) => {
    const volumeValue = volume.value / 100;
    audio.volume = volumeValue;

    if (volumeValue === 0) {
      volumePicture.setAttribute("src", "assets/icons/volume-level-0.svg");
    } else if (volumeValue < 0.33) {
      volumePicture.setAttribute("src", "assets/icons/volume-level-1.svg");
    } else if (volumeValue < 0.67) {
      volumePicture.setAttribute("src", "assets/icons/volume-level-2.svg");
    }
    else {
      volumePicture.setAttribute("src", "assets/icons/volume-level-3.svg");
    }
  })

  button.addEventListener("click", (event) => {
    if (audio.src === "") {
      return;
    } else if (selectedElement.value === "party-horn") {
      jsConfetti.addConfetti()
    }
    audio.play();
});
}