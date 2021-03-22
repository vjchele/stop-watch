let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber((input.runningTime() - timer) / 1000)
})
