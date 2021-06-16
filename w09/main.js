window.addEventListener('keydown', keyDown);

function keyDown(keyboardDown) {
    const audio = document.querySelector(`audio[data-key="${keyboardDown.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${keyboardDown.keyCode}"]`);
    key.classList.add('playing');

    if(!audio) return; //only assigned keys will work

    audio.currentTime = 0;
    audio.play();

    setTimeout(function(){

    }, 0.07)
}


