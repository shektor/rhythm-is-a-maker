((exports)=>{
  class BeatPlayer{
    constructor(tone = Tone){
      this.tone = tone
    }

    createSound(location){
      return(new this.tone.Player(location).toMaster())
    }

    createGain(value){
      return(new this.tone.Gain(value).toMaster());
    }

    stop(){
      return(this.tone.Transport.stop());
    }

    start(){
      return(this.tone.Transport.start());
    }
  }
  exports.BeatPlayer = BeatPlayer
})(this);
