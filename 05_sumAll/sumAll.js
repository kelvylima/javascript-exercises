const sumAll = function(initnum, finalnum) {
    let sum = 0;
    if(initnum < 0 || typeof(initnum) !== 'number' || typeof(finalnum) !== 'number') {
        return 'ERROR'
    } else {
        if(initnum > finalnum) {
            for(let i = initnum; i >= finalnum; i--){
                sum+=i
            };
        } else {
            for(let i = initnum; i <= finalnum; i++) {
            sum += i
            };
        };
        return sum;}
};
console.log(sumAll(4, 1))
console.log(typeof(90))
// Do not edit below this line
module.exports = sumAll;
