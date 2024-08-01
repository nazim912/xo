"use strict";
var Symbols;
(function (Symbols) {
    Symbols[Symbols["EMPTY"] = 0] = "EMPTY";
    Symbols[Symbols["CROSS"] = 1] = "CROSS";
    Symbols[Symbols["CIRCLE"] = 2] = "CIRCLE";
})(Symbols || (Symbols = {}));
let grid = [
    [Symbols.EMPTY, Symbols.EMPTY, Symbols.EMPTY],
    [Symbols.EMPTY, Symbols.EMPTY, Symbols.EMPTY],
    [Symbols.EMPTY, Symbols.EMPTY, Symbols.EMPTY]
    // case du plateau
];
function victoire(symbol) {
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] === symbol && grid[i][1] === symbol && grid[i][2] === symbol) {
            return true;
        }
    }
    for (let j = 0; j < 3; j++) {
        if (grid[0][j] === symbol && grid[1][j] === symbol && grid[2][j] === symbol) {
            return true;
        }
    }
    if ((grid[0][0] === symbol && grid[1][1] === symbol && grid[2][2] === symbol) ||
        (grid[0][2] === symbol && grid[1][1] === symbol && grid[2][0] === symbol)) {
        return true;
    }
    return false;
}
function display_win(symbol) {
    var grid = document.getElementById("grid");
    if (grid) {
        grid.style.backgroundColor = 'green';
    }
}
function input(pos_i, pos_j) {
    if (grid[pos_i][pos_j] === Symbols.EMPTY) {
        grid[pos_i][pos_j] = Symbols.CROSS;
        if (victoire(Symbols.CROSS)) {
            display_win(Symbols.CROSS);
        }
        else {
            tour();
        }
    }
}
function tour() {
    let caseVide = [];
    for (let i = 0; i < grid.length; i++) {
        const ordre = grid[i];
        for (let j = 0; j < ordre.length; j++) {
            const carre = ordre[j];
            if (carre === Symbols.EMPTY) {
                caseVide.push([i, j]);
            }
        }
    }
    if (caseVide.length > 0) {
        const [random_i, random_j] = caseVide[Math.floor(Math.random() * caseVide.length)];
        grid[random_i][random_j] = Symbols.CIRCLE;
        if (victoire(Symbols.CIRCLE)) {
            display_win(Symbols.CIRCLE);
        }
    }
    update_grid(grid);
}
