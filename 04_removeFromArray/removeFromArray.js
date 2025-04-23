const removeFromArray = function () {
    var new_listo = []
    var listo = []
    var nums_to_remove = []

    // load arguments
    for (var i = 0; i < arguments.length; i++) {
        if (i == 0) {
            listo = arguments[i];
        } else {
            nums_to_remove.push(arguments[i]);
        }
    }

    for (i = 0; i < listo.length; i++) {
        console.log(listo[i]);
        
        if (nums_to_remove.indexOf(listo[i]) <= -1) {
            new_listo.push(listo[i]);
            console.log(new_listo);
        }
    }

    return new_listo

};

// Do not edit below this line
module.exports = removeFromArray;
