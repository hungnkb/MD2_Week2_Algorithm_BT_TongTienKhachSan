let arr = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3],]

let totalCost = (data: number[][]): number => {
    let cost = 0;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] != 0) {
                cost += data[i][j];
            }
        }
    }
    return cost
}


console.log(totalCost(arr))


