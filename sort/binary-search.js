// binary search algorithm in javascript

function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        var mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

var searchArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(searchArr, 5));
