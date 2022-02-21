radio.onReceivedNumber(function (receivedNumber) {
    if (master == Math.trunc(receivedNumber / 10)) {
        if (receivedNumber % 10 == 1) {
            basic.showIcon(IconNames.Happy)
            Avanza(40)
            GiraIzq(40)
            Avanza(40)
            GiraIzq(40)
            basic.showIcon(IconNames.Heart)
        }
        if (receivedNumber % 10 == 2) {
            NeoPixel()
            for (let index = 0; index < 30; index++) {
                pins.digitalWritePin(DigitalPin.P8, 1)
                pins.digitalWritePin(DigitalPin.P12, 1)
                basic.pause(100)
                pins.digitalWritePin(DigitalPin.P8, 0)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(100)
            }
        }
        if (receivedNumber % 10 == 3) {
            basic.showString("F A N T E C 2 0 2 2")
        }
    }
    if (master == 1) {
    	
    }
})
function Avanza (velocidad: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocidad)
    izqoscuro = 1
    deroscuro = 1
    while (izqoscuro == 1 && deroscuro == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            izqoscuro = 1
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            deroscuro = 1
        } else {
            deroscuro = 0
        }
    }
    while (izqoscuro == 0 || deroscuro == 0) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            izqoscuro = 1
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            deroscuro = 1
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
        } else {
            deroscuro = 0
        }
    }
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
function GiraIzq (velocidad: number) {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
    while (izqoscuro == 1 || deroscuro == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            izqoscuro = 1
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            deroscuro = 1
        } else {
            deroscuro = 0
        }
    }
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
input.onSound(DetectedSound.Loud, function () {
    if (master == 1) {
        radio.sendNumber(23)
        basic.pause(1000)
        basic.showString("F A N T E C 2 0 2 2")
        radio.sendNumber(22)
        NeoPixel()
        for (let index = 0; index < 30; index++) {
            pins.digitalWritePin(DigitalPin.P8, 1)
            pins.digitalWritePin(DigitalPin.P12, 1)
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P8, 0)
            pins.digitalWritePin(DigitalPin.P12, 0)
            basic.pause(100)
        }
        radio.sendNumber(21)
        basic.showIcon(IconNames.Happy)
        Avanza(40)
        GiraIzq(40)
        Avanza(40)
        GiraIzq(40)
        basic.showIcon(IconNames.Heart)
    }
})
function GiroDer (velocidad: number) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
    while (izqoscuro == 1 || deroscuro == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            izqoscuro = 1
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            deroscuro = 1
        } else {
            deroscuro = 0
        }
    }
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
function Retrocede (velocidad: number) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocidad)
    izqoscuro = 1
    deroscuro = 1
    while (izqoscuro == 1 && deroscuro == 1) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            izqoscuro = 1
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            deroscuro = 1
        } else {
            deroscuro = 0
        }
    }
    while (izqoscuro == 0 || deroscuro == 0) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            izqoscuro = 1
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocidad)
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            deroscuro = 1
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(100)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
        } else {
            deroscuro = 0
        }
    }
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
}
function NeoPixel () {
    for (let index = 0; index < 5; index++) {
        RED = 0
        GREEN = 0
        BLUE = 255
        for (let index = 0; index < 255; index++) {
            RED += 1
            BLUE += -1
            strip.showColor(neopixel.rgb(RED, GREEN, BLUE))
            basic.pause(1)
        }
        for (let index = 0; index < 255; index++) {
            GREEN += 1
            RED += -1
            strip.showColor(neopixel.rgb(RED, GREEN, BLUE))
            basic.pause(1)
        }
        for (let index = 0; index < 255; index++) {
            BLUE += 1
            GREEN += -1
            strip.showColor(neopixel.rgb(RED, GREEN, BLUE))
            basic.pause(1)
        }
        basic.pause(1000)
    }
    strip.showColor(neopixel.rgb(0, 0, 0))
}
// El master siempre es 1
// El resto es superior a 1
// Mensajes:
// 21,22,23, etc -> mensajes 1,2,3 al dispositivo 2
// 31,32,33, etc -> mensajes 1,2,3 al dispositivo 3
let BLUE = 0
let GREEN = 0
let RED = 0
let deroscuro = 0
let izqoscuro = 0
let master = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
master = 2
radio.setGroup(1)
