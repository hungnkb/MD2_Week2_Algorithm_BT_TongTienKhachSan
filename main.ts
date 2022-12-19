let arr = [[0, 1, 1, 2],
[0, 5, 0, 0],
[2, 0, 3, 3],]

let totalCost = (data: number[][]): number => {
    let cost = 0;
    let i = 0;
    let j = 0;
    while (data) {
        while (i < data.length) {
            while (j < data[i].length) {
                if (data[i][j] != 0) {
                    cost += data[i][j];
                }
                j++;
            };
        }
        i++;
        data.unshift()
        totalCost(data)
    }
    return cost;
}

totalCost(arr)

