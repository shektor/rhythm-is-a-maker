(function(){
  document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
  });

  const beatPlayer = new BeatPlayer(Tone),
        beats = [
    beatPlayer.createSound('./sounds/Dry-Kick.wav'),
    beatPlayer.createSound('./sounds/Korg-TR-Rack-Standard-Kit-Snare-Drum.wav'),
    beatPlayer.createSound('./sounds/Closed-Hi-Hat-1.wav'),
    beatPlayer.createSound('./sounds/Korg-NS5R-Open-Hi-Hat.wav'),
    beatPlayer.createSound('./sounds/Clap-3.wav'),
    beatPlayer.createSound('./sounds/Cowbell-3.wav'),
    beatPlayer.createSound('./sounds/whitney.wav'),
    beatPlayer.createSound('./sounds/james_b.wav')
  ]

  beats.forEach(beat => beat.connect(beatPlayer.createGain(0.9)));

  const $rows = document.body.querySelectorAll('tr')

  let index = 0;

  const active = true;
        inactive = false;

  if(active){
    Tone.Transport.scheduleRepeat(repeat, '8n');
  }

  document.getElementById('bpm').addEventListener('input', e => {
  Tone.Transport.bpm.value = +e.target.value
})

  document.getElementById('bpm').onchange=function(){
    document.getElementById('v').innerHTML = this.value;
};

  document.querySelector('.stop').onclick = ()=> {
    beatPlayer.stop();
    document.querySelector('.powerOn').style.color = 'green';
    document.getElementsByClassName('myCheck').checked = false;
  }

  document.querySelector('.powerOn').onclick = ()=> {
    document.querySelector('.powerOn').style.color = 'red';
    beatPlayer.start();
    document.querySelector('.powerOn').style.color = 'red';
  }

  function loopIndex(step){
    let stepX
    if (step === 0) {
      stepX = 15
    } else {
      stepX = step - 1
    }
    let milk = document.querySelector(`#c-${stepX}`)
    milk.style.backgroundColor = 'white'
    let bob = document.querySelector(`#c-${step}`)
    bob.innerHTML = ""
    bob.style.backgroundColor ='green'
  }

  function repeat(time) {
    let step = index % 16;
    for (let i = 0; i < 8; i++) {
      let beat = beats[i],
          $row = $rows[i],
          $button = $row.querySelector(`th:nth-child(${step + 1}) > button`);
      if ($button.classList.contains('button-active')){
        beat.start()
      }
    }
    loopIndex(step)
    index++;
  }

})();
