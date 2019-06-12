(function(){
  document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
  });

  const beats = [
    new Tone.Player('./sounds/Dry-Kick.wav').toMaster(),
    new Tone.Player('./sounds/Korg-TR-Rack-Standard-Kit-Snare-Drum.wav').toMaster(),
    new Tone.Player('./sounds/Closed-Hi-Hat-1.wav').toMaster()
  ];

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
  
  function repeat(time) {
    let step = index % 8;
    for (let i = 0; i < $rows.length; i++) {
      let beat = beats[i],
          $row = $rows[i],
          $input = $row.querySelector(`input:nth-child(${step + 1})`);
      if ($input.checked) beat.start();
    }
    index++;
  }
  
})();
