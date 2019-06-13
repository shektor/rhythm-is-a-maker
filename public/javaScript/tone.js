(function(){
  document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
  });

  const beatPlayer = new BeatPlayer(Tone)
  const beats = [
    beatPlayer.createSound('./sounds/Dry-Kick.wav'),
    beatPlayer.createSound('./sounds/Korg-TR-Rack-Standard-Kit-Snare-Drum.wav'),
    beatPlayer.createSound('./sounds/Closed-Hi-Hat-1.wav')
  ]

  const gain = new Tone.Gain(0.8);
  gain.toMaster();

  beats.forEach(beat => beat.connect(gain));

  const $rows = document.body.querySelectorAll('div > div')

  let index = 0;

  const active = true;
        inactive = false;

  if(active){
    Tone.Transport.scheduleRepeat(repeat, '8n');
  }

  document.querySelector('.stop').onclick = ()=> {
    Tone.Transport.stop();
    document.querySelector('.powerOn').style.color = 'green';
    document.getElementsByClassName('myCheck').checked = false;
  }

  document.querySelector('.powerOn').onclick = ()=> {
    document.querySelector('.powerOn').style.color = 'red';
    Tone.Transport.start();
    document.querySelector('.powerOn').style.color = 'red';
  }

  function loopIndex(step){
    let stepX
    if (step === 0) {
      stepX = 15
    } else {
      stepX = step - 1
    }
    let milk = document.querySelector(`.c-${stepX}`)
    // milk.innerHTML = stepX + 1
    milk.style.backgroundColor = 'white'
    let bob = document.querySelector(`.c-${step}`)
    bob.innerHTML = ""
    bob.style.backgroundColor ='red'
  }

  function repeat(time) {
    let step = index % 16;
    for (let i = 0; i < $rows.length; i++) {
      let beat = beats[i],
          $row = $rows[i],
          $input = $row.querySelector(`input:nth-child(${step + 1})`);
      if ($input.checked){
        beat.start()
      }
    }
    loopIndex(step)
    index++;
  }

})();
