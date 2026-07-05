

function fibs(n) {
    arr = [0,1]
    if (n < 2) throw new Error("n mustt be at least 2");
    if (n === 2)  return [0, 1];

    else if (arr.length < n) {
        for (let i = 2; i < n; i++) {
            let prev = arr[i - 2];
            let after = arr[i - 1];
            let final = after + prev;
            arr.push(final);
        }
        return arr;
    }
}

function fibsrec(n, arr = [0, 1]) {
    if (n < 2) throw new Error("n mustt be at least 2");
    if (n === 2)  return [0, 1];
    if (arr.length === n) return arr;
 
    else if (arr.length < n) {
        let prev = arr[arr.length - 2]
        let after = arr[arr.length - 1];
        let final = after + prev;
        arr.push(final);
        return fibsrec(n, arr);
    }
}

console.log(fibs(8));
console.log(fibsrec(8));