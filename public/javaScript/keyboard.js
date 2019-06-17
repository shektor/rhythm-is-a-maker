(function(){

const synth = new Tone.Syntha.toMaster()
const c4 = document.querySelector('.C4-key');
let fired = false;

    c4.onkeydown = function() {

        if(!fired) {
            fired = true;
            synth.triggerAttack('C4');
        }
    };

    c4.onkeyup = function(){
      synth.triggerRelease();
      fired = false;
    }

})();
