let light2 = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    light2 = input.lightLevel()
    if (light2 <= 25) {
        music.ringTone(262)
    } else {
        music.ringTone(440)
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
})
