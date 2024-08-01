"use strict";
const grid_size = 3;
let _curr_cell;
let _win = false;
let _mousecoord = new Float32Array(2);
function _init() {
    let t_grid = document.getElementById("grid");
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            let button = t_grid.rows[i].cells[j].childNodes[0];
            button.id = i.toString() + j.toString();
            button.addEventListener("mousemove", (e) => { _mousecoord[0] = e.clientX; _mousecoord[1] = e.clientY; });
        }
    }
}
_init();
function _play(cell) {
    if (!_win) {
        _curr_cell = cell;
        input(Number(cell.id[0]), Number(cell.id[1]));
    }
}
function update_grid(d_grid) {
    let t_grid = document.getElementById("grid");
    if (t_grid) {
        for (let i = 0; i < grid_size; i++) {
            for (let j = 0; j < grid_size; j++) {
                let cell = t_grid.rows[i].cells[j].childNodes[0];
                let val = d_grid[i][j];
                cell.textContent = (val == 0) ? "" : ((val == 1) ? "X" : "O");
                cell.disabled = val > 0;
                cell.classList.remove("zero");
                cell.classList.remove("X");
                cell.classList.remove("O");
                if (val == 0)
                    cell.classList.add("zero");
                if (val == 1)
                    cell.classList.add("X");
                if (val == 2)
                    cell.classList.add("O");
            }
        }
    }
}
function display_error(has_error) {
    var grid = document.getElementById("grid");
    if (grid) {
        grid.style.backgroundColor = (has_error) ? 'tomato' : 'lightslategrey';
    }
}