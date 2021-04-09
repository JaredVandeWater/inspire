export default class Weather {
    constructor({ weather, main, name }) {
        this.icon = weather[0].icon
        this.temp = main.temp
        this.f = (main.temp - 273.15) * (9 / 5) + 32
        this.c = (main.temp - 273.15)
        this.city = name
        this.TempType = true
        this.tempEnding = null
        //true is f, false is c
    }




    setTempType() {
        if (this.TempType) {
            this.tempEnding = '&#8457;'
            return Math.floor(this.f)
        }

        this.tempEnding = '&#8451;'
        return Math.floor(this.c)
    }

}




