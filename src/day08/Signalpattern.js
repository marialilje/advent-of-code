class Signalpattern {
    constructor(signalData){
        this.signalData = signalData;
        this.uniquePattern = this.signalData.split("|")[0];
        this.outputValue = this.signalData.split("|")[1]; 
    }
}

module.exports = Signalpattern;
