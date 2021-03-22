let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = input.runningTime()
})
/**
 * stop watch using Microbit. Converting milliseconds into seconds by dividing the elapsed by 1000
 */
input.onButtonPressed(Button.B, function () {
    basic.showNumber((input.runningTime() - timer) / 1000)
})
