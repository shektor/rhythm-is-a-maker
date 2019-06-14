describe('BeatPlayer', ()=>{
  let beatPlayer, Tone, TonePlayer, url;

  beforeEach(()=>{
    Tone = {
      Player: function(location) {
        url = location
        return TonePlayer;
      },
      Gain: function(value) {
        return value;
      }
    }

    TonePlayer = {
      toMaster: function() {}
    }

    beatPlayer = new BeatPlayer(Tone);
  });

  describe('#createSound', ()=>{
    it('accepts a file location', ()=>{
      let location = './sounds/Dry-Kick.wav'
      beatPlayer.createSound(location)
      expect(url).toBe(location)
    });

    it('connects to master output', ()=>{
      spyOn(TonePlayer, 'toMaster')
      beatPlayer.createSound('./sounds/Dry-Kick.wav')
      expect(TonePlayer.toMaster).toHaveBeenCalled()
    });
  });

  describe('#createGain', ()=>{
    it('Takes a number and map that number to the speaker', ()=>{
      spyOn(TonePlayer, 'toMaster')
      beatPlayer.createSound(0.6)
      expect(TonePlayer.toMaster).toHaveBeenCalled()
    })
  });
});

