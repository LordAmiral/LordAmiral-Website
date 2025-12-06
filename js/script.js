paragraph = document.querySelector("p")
/// console.log("hello")
/// console.log(paragraph)
paragraph.innerHTML = "Ce texte A changé"

const myEvent = document.getElementById("myButton");

myEvent.addEventListener("click", () => {
    console.log("click");
})


///let musicPlayer = document.getElementById("musicPlayer");
///musicPlayer.autoplay = true;
///musicPlayer.load();


document.addEventListener('click', () => {
    const musicPlayer = document.getElementById("musicPlayer");
    musicPlayer.play();
});



const audio = document.getElementById('musicPlayer');
const muteBtn = document.getElementById('soundOn');

muteBtn.addEventListener('click', () => {
    if (audio.muted) {
        audio.muted = false;
        console.log('Sound ON');
        muteBtn.src = 'assets/soundOn.svg';
    } else {
        audio.muted = true;
        console.log('Sound OFF');
        muteBtn.src = 'assets/soundOff.svg';
    }
});
