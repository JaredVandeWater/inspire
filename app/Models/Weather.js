export default class Weather {
    constructor({ weather, main, name }) {
        this.icon = weather[0].icon
        this.temp = main.temp
        this.city = name
        this.TempType = false
        this.tempEnding = null
        //true is f, false is c
    }




    setTempType() {
        let cels = Math.floor(this.temp - 273.15)
        if (this.TempType) {
            this.temp = Math.floor(cels * (9 / 5) + 32)
            this.tempEnding = '&#8457;'
        } else {
            this.temp = cels
            this.tempEnding = '&#8451;'
        }
        return this.temp
    }

}




