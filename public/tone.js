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

  Tone.Transport.scheduleRepeat(repeat, '8n');
  Tone.Transport.start();

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

})()
// document.documentElement.addEventListener('mousedown', () => {
//     if (Tone.context.state !== 'running') Tone.context.resume();
//   });

//   const synths = [
//     new Tone.Synth(),
//     new Tone.Synth(),
//     new Tone.Synth()
//   ];

//   synths[0].oscillator.type = 'triangle';
//   synths[1].oscillator.type = 'sine';
//   synths[2].oscillator.type = 'sawtooth';

//   const gain = new Tone.Gain(0.8);
//   gain.toMaster();

//   synths.forEach(synth => synth.connect(gain));

//   const $rows = document.body.querySelectorAll('div > div'),
//         notes = ['G5', 'E4', 'C3'];
//   let index = 0;

//   Tone.Transport.scheduleRepeat(repeat, '8n');
//   Tone.Transport.start();

//   function repeat(time) {
//     let step = index % 8;
//     for (let i = 0; i < $rows.length; i++) {
//       let synth = synths[i],
//           note = notes[i],
//           $row = $rows[i],
//           $input = $row.querySelector(`input:nth-child(${step + 1})`);
//       if ($input.checked) synth.triggerAttackRelease(note, '8n', time);
//     }
//     index++;
//   }
