const keyboardDown = window.addEventListener('keydown', keyDown);
let moveBox = 0;

function keyDown(keyboardDown) {
    const audio = document.querySelector(`audio[data-key="${keyboardDown.keyCode}"]`);

    const key = document.querySelector(`.key[data-key="${keyboardDown.keyCode}"]`);
    key.classList.add('playing');

    if(moveBox === 100){
        moveBox = 0;
    }

    key.style.position = 'relative';
    key.style.top = `${moveBox}px`;
    moveBox += 10;

    if(!audio) return; //only assigned keys will work

    audio.currentTime = 0;
    audio.play();

    window.setTimeout( () => transitionBack(keyboardDown), 700);
}

function transitionBack(keyboardDown) {
// alert('test');
let key = document.querySelector(`[data-key="${keyboardDown.keyCode}"`);
key.classList.remove('playing');
}