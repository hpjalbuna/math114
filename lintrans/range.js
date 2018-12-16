var matrix = [
	[1, 0, 0.6, 2],
	[3, 1, 6, 4],
	[1, 9, 4, 8]
];

var copy = [];
for(var i = 0; i < matrix.length; i++){
	var sub = [];
	for(var j = 0; j < matrix[i].length; j++)
		sub.push(matrix[i][j]);
	copy.push(sub);
}

var cont = document.getElementById('cont');
gaussJordanForm(copy);

function findPivotCols(matrix){
	var validPivots = [];

	for (var i = 0; i < matrix.length; i++) {
		for (var j = 0; j < matrix[i].length; j++) {
			if(matrix[i][j] === 1){
				validPivots.push(j);
				break;
			}
		}
	}
	return validPivots;
}

function fractionalizeMatrix(matrix){
	for(var i = 0; i < matrix.length; i++){
		for(var j = 0; j < matrix[i].length; j++){
			if(!(Number.isInteger(matrix[i][j])))
				matrix[i][j] = (new Fraction(matrix[i][j])).toString();
		}
	}
}

function findBasesForRange(matrix, copy){
	var pivots = findPivotCols(copy);
	var finalBases = [];

	if(pivots.length === 0){
		var row = [];
		for(var i = 0; i < matrix.length; i++)
			row.push(0);
		finalBases.push(row);
	}
	else{
		for(var i = 0; i < pivots.length; i++){
			var row = [];
			for(var j = 0; j < matrix.length; j++)
				row.push(matrix[j][pivots[i]]);
			finalBases.push(row);
		}
	}
	

	finalBases = transposeMatrix(finalBases);

	fractionalizeMatrix(finalBases);

	for (var i = 0; i < finalBases.length; i++) {
		for(var j = 0; j < finalBases[i].length; j++){
			cont.innerHTML += finalBases[i][j].toString() + " "; 
		}
		cont.innerHTML += "<br>";
	}

	return finalBases;
}

function findDimension(matrix){
	return matrix.length;
}

var rangeBases = findBasesForRange(matrix, copy);
var dim = findDimension(rangeBases);
cont.innerHTML += "<br> Dimension for rangeL: "+""+dim+"<br>";



