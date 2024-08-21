/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var map = function(arr, fn) {

    const arryEdited = arr;
    for (let i = 0; i <= arr.length - 1; i++) {
       arryEdited[i] = fn(arr[i], i);
    }

    return arryEdited;

};


