( function () {
    "use strict";

    var sound = document.getElementsByClassName( 'sound' )[0]; // the sound to interact with
    var mute = document.getElementsByClassName( 'mute' )[0]; // mute/unmute button
    var volume = document.getElementsByClassName( 'volume' )[0].value; //volume setter

    function setVolume () {
        sound.volume = document.getElementsByClassName('volume')[ 0 ].value / 100;

        if( sound.volume == 0 ) {
            mute.style.backgroundImage = "url( 'img/mute.png')";
        } else {
            mute.style.backgroundImage = "url( 'img/sound.png')";
        }

        window.requestAnimationFrame( setVolume );
    }

    function muteSound () {
        if( sound.volume == 0 ) {
            document.getElementsByClassName('volume')[ 0 ].value = volume;
            mute.style.backgroundImage = "url( 'img/sound.png')";
            setVolume();
        } else {
            sound.volume = 0;
            volume = document.getElementsByClassName('volume')[ 0 ].value;
            document.getElementsByClassName('volume')[ 0 ].value = 0;
            mute.style.backgroundImage = "url( 'img/mute.png')";
        }
    }

    setVolume();
    mute.addEventListener('click', muteSound, false);
} ) ();
