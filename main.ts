radio.setGroup(127)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
        led.plot(0, 0)
        led.unplot(0, 1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
        led.unplot(0, 0)
        led.plot(0, 1)
    } else if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(3)
        led.plot(0, 1)
        led.plot(0, 0)
    } else {
        radio.sendNumber(0)
        led.unplot(0, 0)
        led.unplot(0, 1)
    }
    basic.pause(100)
})
