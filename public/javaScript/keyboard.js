(function(){

  const notePairs = {
    q: 'C4',
    2: 'Db4',
    w: 'D4',
    3: 'Eb4',
    e: 'E4',
    r: 'F4',
    5: 'Gb4',
    t: 'G4',
    6: 'Ab4',
    y: 'A4',
    7: 'Bb4',
    u: 'B4',
    i: 'C5',
    9: 'Db5',
    o: 'D5',
    0: 'Eb5',
    p: 'E5'
  };

const synth = new Tone.Synth().toMaster()

const currentNotes = {};

document.addEventListener('keydown', (event) => handleKeyDown(event))
document.addEventListener('keyup', (event) => handleKeyUp(event))

let fired = false;

const handleKeyDown = (event) => {
  const key = event.key
  if (notePairs[key] && !fired) {
    fired = true;
    note = synth.triggerAttack(notePairs[key])
    currentNotes[key] = note
    keyColourOn(key)
  }
};

const handleKeyUp = event => {
  const key = event.key
  if (currentNotes[key]) {
    currentNotes[key].triggerRelease()
    fired = false;
    delete currentNotes[key]
    keyColourOff(key);
  }

}

function keyColourOn(key){
  currentKey = document.querySelector(`#${notePairs[key]}`)
  currentKey.classList.add('active-key')
};

function keyColourOff(key){
  currentKey = document.querySelector(`#${notePairs[key]}`)
  currentKey.classList.remove('active-key')
}

})();
