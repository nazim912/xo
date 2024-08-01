function victoire(symbol: Symbols): boolean {

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j <= grid[i].length - 4; j++) {
            if (
                grid[i][j] === symbol &&
                grid[i][j + 1] === symbol &&
                grid[i][j + 2] === symbol &&
                grid[i][j + 3] === symbol
            ) {
                return true;
            }
        }
    }

    for (let i = 0; i <= grid.length - 4; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (
                grid[i][j] === symbol &&
                grid[i + 1][j] === symbol &&
                grid[i + 2][j] === symbol &&
                grid[i + 3][j] === symbol
            ) {
                return true;
            }
        }
    }

    return false;
}
