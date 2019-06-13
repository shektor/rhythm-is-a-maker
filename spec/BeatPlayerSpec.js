//const BeatPlayer = require('../public/javaScript/BeatPlayer');

describe('BeatMaker', ()=>{
  let Tone;

  beforeEach(()=>{
    Tone = jasmine.createSpyObj('Tone', ['Player']);
    Player = jasmine.createSpyObj('Player', ['toMaster'])

    Tone.Player.and.returnValue(Player);
    Player.toMaster.and.returnValue('./sounds/Dry-Kick.wav')
  });

  it('Connects sound to the master output', ()=>{
    let beatPlayer = new BeatPlayer(Tone);
    expect(beatPlayer.createSound('./sounds/Dry-Kick.wav')).toBe('./sounds/Dry-Kick.wav')
  });
});