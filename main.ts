input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    led.plot(0, 0)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(3)
    led.plot(0, 1)
    led.plot(0, 0)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    led.plot(0, 1)
})
radio.setGroup(127)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
    	
    } else {
        led.unplot(0, 0)
        led.unplot(0, 1)
    }
})
