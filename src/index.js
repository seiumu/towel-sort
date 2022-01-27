// You should implement your task here.

module.exports = function towelSort(matrix) {
    console.log(matrix);
    var result = [];
    var item = [];
    if (typeof matrix === "undefined") {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log("MATRIX", matrix[i]);
        if (i == 1 || i % 2 !== 0) {
            item = matrix[i].reverse();
        } else {
            item = matrix[i];
        }
        for (var j = 0; j < item.length; j++) {
            console.log(item[j]);
            result.push(item[j]);
        }
    }
    console.log(result);
    return result;
};
