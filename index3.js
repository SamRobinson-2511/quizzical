function make2DArray(cols, rows){
	let array = new Array(cols);
	for (let i = 0; i < array.length; i++){
		array[i] = new Array(rows);
	}
	return array;
}
let grid;
let cols;
let rows;
let resolution = 20;

function setup() {
	createCanvas(600, 400);
	rows = height / resolution;
	cols = width / resolution;
	grid = make2DArray(cols, rows);
		for (let i = 0; i < cols; i++){
			for (let j = 0; j < rows; j++){
				grid[i][j] = floor(random(2));
		}
	}
}


function draw() {
	background(0);



	for (let i = 0; i < cols; i++){
		for (let j = 0; j < rows; j++){
			let x = i * resolution;
			let y = j * resolution;
			if (grid[i][j] === 1){
				fill(255);
				stroke(0);
			rect(x, y, resolution, resolution);
			}
		}
	}
}

let next = make2DArray(cols,rows);
for (let i = 0; i < cols; i++){
	for (let j = 0; j < rows; j++){
		let sum = 0;
		let neighbors = count(grid, i, j);
		// sum += grid[i-1][j];//1: DOWN
		// sum += grid[i-1][j-1];//2: DOWN LEFT
		// sum += grid[i][j-1];//3: LEFT
		// sum += grid[i+1][j+1];//4: UP LEFT
		// sum += grid[i+1][j];//5: UP
		// sum += grid[i+1][j+1];//6: UP RIGHT
		// sum += grid[i][j+1];//7:RIGHT
		// sum += grid[i-1][j+1];//8: DOWN RIGHT
		
	}
}
grid = next;


