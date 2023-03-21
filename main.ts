input.onButtonPressed(Button.A, function () {
    radio.sendString(" Hola como estas?")
})
input.onSound(DetectedSound.Loud, function () {
    radio.sendString("Estoy bien ")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("Hola ")
})
radio.setGroup(1)
input.setSoundThreshold(SoundThreshold.Loud, 192)
