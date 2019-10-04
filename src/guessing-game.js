class GuessingGame {
    constructor() {
        this.minValue = null;
        this.maxValue = null;
        this.middle = null;
    }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
       return this.middle = Math.round((this.minValue + this.maxValue)/2);
    }

    lower() {
        this.maxValue = this.middle;
    }

    greater() {
        this.minValue = this.middle;
    }
}

module.exports = GuessingGame;
