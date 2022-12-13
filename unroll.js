function unroll(squareArray) {
    let unrolled  = [];

    while (squareArray.length > 0){
    unrolled = [...unrolled, squareArray.shift()];
    unrolled = [...unrolled, squareArray.map(row => row.pop())]
    unrolled = [...unrolled, squareArray.pop().reverse()]
    unrolled = [...unrolled, squareArray.map(row => row.shift()).reverse()]
    }

    return unrolled.flat()
}

module.exports = unroll;
