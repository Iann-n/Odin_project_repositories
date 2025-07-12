function merge(left, right) {
    let result = []; 
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        }
        else {
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}

function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);

    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergesort([5, 3, 8, 4, 2, 7, 1, 6]));