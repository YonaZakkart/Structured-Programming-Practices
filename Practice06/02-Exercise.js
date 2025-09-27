function operar(a, b, callback) {
    return callback(a, b);
}
const sumaCb = (x, y) => x + y;
const restaCb = (x, y) => x - y;
const prodCb = (x, y) => x * y;

console.log(operar(5, 3, sumaCb));
console.log(operar(5, 3, restaCb));
console.log(operar(5, 3, prodCb));