'use strict'
import VJManager from './vj/vj-mediasource-manager'
import ControlPerameters from './vj/vj-control-perameters';
import Midi from './vj/midi/midi';

const MOON_P = "PLBm5UHsvUTFoHiOgZl8Ycn7Y3XySDSXuV";
const nineties = "PLRQ2jIXShfkZnWUXZj1Auc30pX_d4M6j7";
const nineties2 = "PLRQ2jIXShfkZ1EI9plH-0v8r5XqtuJSqJ";
const ninetiesevents2 = "PLRQ2jIXShfkY86JFB8kScjCKS3SVVoCJ6";

ControlPerameters.time = Midi.map[5]
ControlPerameters.renderer = {
    blendMode: Midi.buttons.blendMode,
    rockOpacity: Midi.map[1],
    blendOpacity: Midi.map[13]
}

ControlPerameters.video = {
    stepBack: Midi.map[17]
}

ControlPerameters.sources = [{
    color: {
        uSaturation: Midi.map[14],
        uR: Midi.map[3],
        uG: Midi.map[4],
        uB: { value: 1. },
        uBrightness: 0.01,
        uContrast: Midi.map[0],
        uHue: Midi.map[6],
    },
    shapeMix: {
        uSize: Midi.map[16],
        uIntensity: Midi.map[17]
    },
    canvas: {
        rewind: Midi.map[11]
    }
}, {
    video: {
        back: Midi.map[6],
        forward: Midi.map[7]
    },
    color: {
        uSaturation: Midi.map[15],
        uR: Midi.map[10],
        uG: Midi.map[8],
        uB: Midi.map[9],
        uBrightness: 0.01,
        uContrast: Midi.map[12],
        uHue: Midi.map[9],
    },
    shapeMix: {
        uSize: Midi.map[16],
        uIntensity: Midi.map[17]
    },
    canvas: {
        rewind: Midi.map[2]
    }
}]


const VJ = new VJManager(document.getElementById('app'), {
    autoUpdate: false,
    mediaSources: [{
        index: 0,
        playlists: [nineties2],
        shufflePlaylist: true,
        maxVideoTime: 15,
        quality: {
            chooseBest: true,
            resolution: '360p'
        },
        rewindable: true,
        verbose: true
    }/*, {
        index: 1,
        playlists: [ninetiesevents2],
        shufflePlaylist: true,
        maxVideoTime: 15,
        paused: false,
        quality: {
            chooseBest: true,
            resolution: '360p'
        },
        rewindable: true,
        verbose: false
    }*/]
});

function _update() {
    VJ.update();
    window.requestAnimationFrame(_update);
}

_update()