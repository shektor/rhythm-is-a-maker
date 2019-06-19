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
    f: 'Db5',
    v: 'D5',
    g: 'Eb5',
    b: 'E5',
    n: 'F5',
    j: 'Gb5',
    m: 'G5',
    k: 'Ab5',
    '\,': 'A5',
    l: 'Bb5',
    '\.': 'B5',
    '\/': 'C6'
  };

let autoWah = new Tone.AutoWah().toMaster();
let pingPong = new Tone.PingPongDelay(0.0, 0.2).toMaster();
let reverb = new Tone.Freeverb(0).toMaster();
const xSynth = new Tone.PolySynth(4, Tone.synth).toMaster()
// let wahSynth = xSynth.connect(autoWah)
// let pongSynth = wahSynth.connect(pingPong)
// let reverbSynth = pongSynth.connect(reverb)
let synth = xSynth.chain(autoWah, pingPong, reverb)


const currentNotes = {};

document.addEventListener('keydown', (event) => handleKeyDown(event))
document.addEventListener('keyup', (event) => handleKeyUp(event))

let fired = false;

const handleKeyDown = (event) => {
  const key = event.key
  if (notePairs[key] && !currentNotes[key]) {
    fired = true;
    note = synth.triggerAttack(notePairs[key])
    currentNotes[key] = note
    keyColourOn(key)
    console.log(currentNotes);
  }
};

const handleKeyUp = event => {
  const key = event.key
  if (currentNotes[key]) {
    currentNotes[key].triggerRelease(notePairs[key])
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

document.getElementById('volume').addEventListener('input', e => {
let newVolume = +e.target.value
synth.set("volume", newVolume)
})

document.getElementById('aWah').addEventListener('input', e => {
autoWah.Q.value = +e.target.value
})

document.getElementById('keyDelay').addEventListener('input', e => {
pingPong.delayTime.value = +e.target.value
})

document.getElementById('reverb').addEventListener('input', e =>{
reverb.roomSize.value = +e.target.value
})


})();
