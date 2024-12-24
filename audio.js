const audio = {
    Map: new Howl({
        src: './audio/map.wav',
        html5: true,
        loop: true,
        volume: 0.3
    }),
    battle: new Howl({
        src: './audio/battle.wav',
        html5: true,
        loop:true,
        volume: 0.3
    }),
    snowballHit: new Howl({
        src: './audio/snowball.wav',
        html5:true, 
        volume: 0.3
    }),
    initSnowball: new Howl({
        src: './audio/snowballThrow.mp3',
        html5:true,
        volume:0.6
    }),
    victory: new Howl({
        src: './audio/victory.wav',
        html5:true,
        volume:0.6
    })
}