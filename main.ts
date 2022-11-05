input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(2000)
    basic.showString("5")
    basic.pause(2000)
    basic.showString("4")
    basic.pause(2000)
    basic.showString("3")
    basic.pause(2000)
    basic.showString("2")
    basic.pause(2000)
    basic.showString("1")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("yo")
    basic.pause(2000)
    basic.showString("amo")
    basic.pause(2000)
    basic.showString("el")
    basic.pause(2000)
    basic.showString("cuy")
})
basic.showLeds(`
    # # . # #
    # . . . #
    . # . . #
    . . . . #
    # # # # #
    `)
basic.forever(function () {
	
})
