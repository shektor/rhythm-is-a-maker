describe('BeatPlayer', ()=>{
  let Tone, beatPlayer;

  beforeEach(()=>{
    Tone = jasmine.createSpyObj('Tone', ['Player', 'Gain']);
    Player = jasmine.createSpyObj('Player', ['toMaster'])
    Gain = jasmine.createSpyObj('Gain',['toMaster'] )

    Tone.Player.and.returnValue(Player);
    Player.toMaster.and.returnValue('./sounds/Dry-Kick.wav');
    Tone.Gain.and.returnValue(Gain);
    Gain.toMaster.and.returnValue(0.5);
    beatPlayer = new BeatPlayer(Tone);

  });

  describe('#createSound', ()=>{
    it('Connects sound to the master output', ()=>{
      let beatPlayer = new BeatPlayer(Tone);
      expect(beatPlayer.createSound('./sounds/Dry-Kick.wav')).toBe('./sounds/Dry-Kick.wav')
    });
  });

  describe('#createGain', ()=>{
    it('Takes a number and map that number to the speaker', ()=>{
      expect(beatPlayer.createGain(0.5)).toBe(0.5)
    })
  });
});
