radio.onReceivedNumber(function (receivedNumber) {
    if (master == Math.trunc(receivedNumber / 10)) {
        if (receivedNumber % 10 == 1) {
            basic.showIcon(IconNames.Happy)
            soundExpression.giggle.playUntilDone()
            Avanza(60)
            GiraIzq(20)
            Avanza(60)
            GiraIzq(20)
            basic.showIcon(IconNames.Heart)
            basic.pause(5000)
            basic.showString("")
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
    inicioavance = input.runningTime()
    while (Math.abs(input.magneticForce(Dimension.X)) <= 100 || input.runningTime() <= inicioavance + 2000) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
            izqoscuro = 1
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
            deroscuro = 1
        } else {
            deroscuro = 0
        }
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
    while (izqoscuro == 0 || deroscuro == 0) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1) {
            maqueen.motorStop(maqueen.Motors.M2)
            basic.pause(50)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocidad)
            izqoscuro = 1
        } else {
            izqoscuro = 0
        }
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
            maqueen.motorStop(maqueen.Motors.M1)
            basic.pause(50)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
            deroscuro = 1
        } else {
            deroscuro = 0
        }
    }
    maqueen.motorStop(maqueen.Motors.All)
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
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocidad)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocidad)
    basic.pause(200)
    maqueen.motorStop(maqueen.Motors.All)
}
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
    maqueen.motorStop(maqueen.Motors.All)
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
    maqueen.motorStop(maqueen.Motors.All)
}
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (master == 1) {
        radio.sendNumber(63)
        basic.pause(1000)
        radio.sendNumber(53)
        basic.pause(1000)
        radio.sendNumber(43)
        basic.pause(1000)
        radio.sendNumber(33)
        basic.pause(1000)
        radio.sendNumber(23)
        basic.pause(1000)
        basic.showString("F A N T E C 2 0 2 2")
        radio.sendNumber(22)
        radio.sendNumber(32)
        radio.sendNumber(42)
        radio.sendNumber(52)
        radio.sendNumber(62)
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
        radio.sendNumber(31)
        radio.sendNumber(41)
        radio.sendNumber(51)
        radio.sendNumber(61)
        basic.showIcon(IconNames.Happy)
        soundExpression.giggle.playUntilDone()
        Avanza(60)
        GiraIzq(20)
        Avanza(60)
        GiraIzq(20)
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        basic.showString("")
    }
})
function NeoPixel () {
    mostrarFANTEC = 1
    for (let index = 0; index < 5; index++) {
        RED = 0
        GREEN = 0
        BLUE = 255
        if (mostrarFANTEC == 1) {
            if (master == 1) {
                basic.showString("F")
            }
            if (master == 2) {
                basic.showString("A")
            }
            if (master == 3) {
                basic.showString("N")
            }
            if (master == 4) {
                basic.showString("T")
            }
            if (master == 5) {
                basic.showString("E")
            }
            if (master == 6) {
                basic.showString("C")
            }
            mostrarFANTEC = 0
        } else {
            if (master == 1) {
                basic.showString("")
            }
            if (master == 2) {
                basic.showString("2")
            }
            if (master == 3) {
                basic.showString("0")
            }
            if (master == 4) {
                basic.showString("2")
            }
            if (master == 5) {
                basic.showString("2")
            }
            if (master == 6) {
                basic.showString("")
            }
            mostrarFANTEC = 1
        }
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
let mostrarFANTEC = 0
let inicioavance = 0
let deroscuro = 0
let izqoscuro = 0
let master = 0
let strip: neopixel.Strip = null
basic.showNumber(input.magneticForce(Dimension.X))
music.setVolume(255)
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
master = 1
izqoscuro = 0
deroscuro = 0
radio.setGroup(1)
for (let index = 0; index < 4; index++) {
    Avanza(40)
    GiraIzq(30)
    Avanza(40)
    GiraIzq(30)
}
