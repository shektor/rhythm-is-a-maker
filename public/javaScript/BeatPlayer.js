class BeatPlayer{
  constructor(tone = Tone){
    this.tone = tone
  }

  createSound(location){
    return(new this.tone.Player(location).toMaster())
  }

  addToBeats(sound){

  }

}

// module.exports = BeatPlayer
