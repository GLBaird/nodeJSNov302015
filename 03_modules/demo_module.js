var valA = 0;
var valB = 0;

function setValues(a,b) {
    valA = a;
    valB = b;
}

function addValues() {
    return valA + valB;
}



module.exports = {

    setValues: setValues,
    getAnswer: addValues

};