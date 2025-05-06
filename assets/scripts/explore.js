// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectVoice = document.getElementById('voice-select');
  const synth = window.speechSynthesis;
  let voices = [];
  const button = document.querySelector('button');
  const image = document.querySelector('img');

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      selectVoice.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    const text = document.getElementById('text-to-speak').value;
    const selectedOption = selectVoice.selectedOptions[0].getAttribute('data-name');
    const selectedVoice = voices.find(voice => voice.name === selectedOption);
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = selectedVoice;
    image.src = `assets/images/smiling-open.png`;
    synth.speak(utterance);
    utterance.onend = () => {
      image.src = `assets/images/smiling.png`;
    };
  });
}