const keyboardDown = window.addEventListener('keydown', keyDown);

// I added an empty JavaScript Object so that I can add values as things are added.
let pressed = {};

function keyDown(keyboardDown) {
  const audio = document.querySelector(`audio[data-key="${keyboardDown.keyCode}"]`);

  const key = document.querySelector(`.key[data-key="${keyboardDown.keyCode}"]`);
  if(key === null ) return;
  key.classList.add('playing');

  /**********************************************************
     Move the button down by 10px
    **********************************************************/

  // I started by printing out the data-key so that I know what key I'm pressing. This is really only for testing.
  // console.log(pressed[key.getAttribute('data-key')])

  // Then I check if this value is in my JS object named pressed that I wrote on line 2 which is like a list of each button I pressed and a counter that says how many times I've pressed it.
  if (pressed[key.getAttribute('data-key')] === undefined) {
    console.log(`This isn't in the list yet`);
    // Set the times pressed to one
    pressed[key.getAttribute('data-key')] = 1;
    // log how many times it has been pressed
    console.log("This key has been pressed " + pressed[key.getAttribute('data-key')] + " times");
    // Then check if the button has already been pressed 10 times. The count starts at 0 that's why we check for 9
  } else if (pressed[key.getAttribute('data-key')] === 9) {
    // Log that it has been pressed 10 times
    console.log(`This key has been pressed 10 times!`);
    // reset the count to 0
    pressed[key.getAttribute('data-key')] = 0;
  } else {
    // in any other case add 1 to the count
    pressed[key.getAttribute('data-key')]++;
    // and log how many times you've pressed something.
    console.log("This key has been pressed " + pressed[key.getAttribute('data-key')] + " times")
  }

  // set the position based on the times it's been pressed * 10px each time
  let top = pressed[key.getAttribute('data-key')] * 10;
  key.style.position = 'relative';
  key.style.top = `${top}px`;

  if (!audio) return; //only assigned keys will work

  audio.currentTime = 0;
  audio.play();

  window.setTimeout(() => transitionBack(keyboardDown), 700);
}

function transitionBack(keyboardDown) {
  // alert('test');
  let key = document.querySelector(`[data-key="${keyboardDown.keyCode}"`);
  key.classList.remove('playing');
}