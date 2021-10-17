let start = 0
let érték = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    start = 0
    érték = 0
})
input.onButtonPressed(Button.B, function () {
    érték = input.runningTime() - start
    basic.showNumber(Math.idiv(érték, 100))
})
