const produceDrivingRange = function(range){
    return function(start, end){
        const distance = Math.abs(Number.parseInt(start) - Number.parseInt(end))
        return distance > range ? `${distance - range} blocks out of range` : `within range by ${distance}`
    };
};

const produceTipCalculator = function(tip){
    return function(fare){
        return fare * tip;
    };
};
let driverId = 0
const createDriver = function(name){
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId;
        };
    };
};