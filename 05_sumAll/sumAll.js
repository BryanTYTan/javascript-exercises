const sumAll = function(start, end) {
    if (typeof(start) != 'number' || typeof(end) != 'number') {
        return "ERROR"
    }

    if (start < 0 || end < 0 || start % 1 !== 0 || end % 1 !== 0) {
        return "ERROR"        
    }

    var sum = 0
    end_num = Math.max(start, end);
    start_num = Math.min(start, end);

    for (i=start_num; i <= end_num; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
