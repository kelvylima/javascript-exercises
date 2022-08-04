const repeatString = function(string, num) {
    let text = string
    let phrase = ''
    if(num < 0) {
        return 'ERROR'
    }else{
        for(let i = 0; i < num; i++){
            phrase += text

        }
        return phrase
    };
    

};
console.log(repeatString('hey', -1))
// Do not edit below this line
module.exports = repeatString;
