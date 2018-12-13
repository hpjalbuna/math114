function gaussJordanForm(A){
	var rows = A.length;
    var columns = A[0].length;
    
    var lead = 0;
    for (var k = 0; k < rows; k++) {
        if (columns <= lead) return;
        
        var i = k;
        while (A[i][lead] === 0) {
            i++;
            if (rows === i) {
                i = k;
                lead++;
                if (columns === lead) return;
            }
        }
        var irow = A[i], krow = A[k];
        A[i] = krow, A[k] = irow;
         
        var val = A[k][lead];
        for (var j = 0; j < columns; j++) {
            A[k][j] /= val;
        }
         
        for (var i = 0; i < rows; i++) {
            if (i === k) continue;
            val = A[i][lead];
            for (var j = 0; j < columns; j++) {
                A[i][j] -= val * A[k][j];
            }
        }
        lead++;
    }
    return A;
};

var matrix = [
	[1, 2, 1, 2, 1],
	[1, 2, 2, 1, 2],
	[2, 4, 3, 3, 3],
	[0, 0, 1, -1, -1]
];
gaussJordanForm(matrix);

/*Checks if the variable is equals to zero (e.g. [0, 1, 0, 0, 0])
This returns the pivot of a particular row/equation
*/
var cont = document.getElementById('cont');
function isVarEqualsZero(row){
	var pivot = -1;
	var zeroesAfter = 0;

	for(var i = 0; i < row.length; i++){
		if(row[i] === 1){
			pivot = i;
			break;
		}
	}

	if(pivot > -1){
		for(var i = pivot+1; i <row.length; i++){
			if(row[i] === 0)
				zeroesAfter += 1;
		}

		if(zeroesAfter !== ((row.length-1)-pivot))
			pivot = -1;
	}

	return pivot;
}

/*Find columns with leading 1s*/
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

/*Find columns that are not pivots, this is used for finalizing bases*/
function findNonPivotCols(matrix){
	var pivotsCont = findPivotCols(matrix);
	var nonPivots = [];
	for (var i = 0; i < matrix[0].length; i++) {
		if(!pivotsCont.includes(i))
			nonPivots.push(i);
	}
	return nonPivots;
}

/*Find columns that are equal to*/
function findZeroRows(matrix){
	var zeroIndex = [];
	for (var i = 0; i < matrix.length; i++) {
		zeroes = 0;
		for (var j = 0; j < matrix[i].length; j++) {
			if(matrix[i][j] === 0)
				zeroes += 1;
		}

		if(zeroes === matrix[i].length)
			zeroIndex.push(i);
	}

	return zeroIndex;
}

function findFreePart(matrix, zeroes, nonPivots){
	var free = [];
	for(var i = 0; i < (matrix.length-nonPivots.length); i++) {
		var subpart = [];
		for(var j = 0; j < matrix.length; j++){
			if(!zeroes.includes(j))
				subpart.push(matrix[j][nonPivots[i]]);
		}
		free.push(subpart);
	}

	return free;
}

function findNonPivotColsForOne(matrix, zeroes, pivot){
	var nonPivotCols = [];
	for(var i = 0; i < matrix.length; i++){
		if(!zeroes.includes(i)){
			for(var j = pivot+1; j < matrix[i].length; j++){
				nonPivotCols.push(j);
			}
		}
	}
	return nonPivotCols;
}

function findFreePartForOne(matrix, zeroes, pivot){
	var free = [];
	for(var i = 0; i < matrix.length; i++){
		if(!zeroes.includes(i)){
			for(var j = pivot+1; j < matrix[i].length; j++){
				var subpart = [];
				subpart.push(matrix[i][j]);
				free.push(subpart);
			}
		}
	}

	return free;
}

function negateFreePart(free){
	for(var i = 0; i < free.length; i++){
		for(var j = 0; j < free[i].length; j++){
			free[i][j] = -1*free[i][j];
		}
	}
	return free;
}

function finalizeBases(matrix, nonPivots){
	for(var i = 0; i < matrix.length; i++){
		for(var j = 0; j < nonPivots.length; j++){
			var num = 0;
			if(i === j)
				num = 1;
			matrix[i].splice(nonPivots[j], 0, num);
		}
	}

	return matrix;
}

function findBases(matrix){
	var pivotCols = findPivotCols(matrix);
	var nonPivotCols = [];
	var zeroRows = findZeroRows(matrix);
	var freePart = [];
	var finalBases = [];

	if(findNonPivotCols(matrix).length === 0){ //For zero basis
		var zeroMatrix = [];
		for(var i = 0; i < matrix[0].length; i++)
			zeroMatrix.push(0);
		finalBases.push(zeroMatrix);
	}
	else{
		if((pivotCols.length === 1) && ((matrix.length - zeroRows.length) === 1)){
			nonPivotCols = findNonPivotColsForOne(matrix, zeroRows, pivotCols[0]);
			freePart = findFreePartForOne(matrix, zeroRows, pivotCols[0]);
		}
		else{
			nonPivotCols = findNonPivotCols(matrix);
			freePart = findFreePart(matrix, zeroRows, nonPivotCols);
			document.write(nonPivotCols);
		}
		var negatedFreePart = negateFreePart(freePart);
		finalBases = finalizeBases(negatedFreePart, nonPivotCols);
	}

	finalBases = transposeMatrix(finalBases);
	for (var i = 0; i < finalBases.length; i++) {
		for(var j = 0; j < finalBases[i].length; j++){
			cont.innerHTML += finalBases[i][j].toString() + "  "; 
		}
		cont.innerHTML += "<br>";
	}
}

function kernelOfL(mat){
	var polyVars = ['a', 'b', 'c', 'd', 'e', 'f'];
	var positions = ['t6', 't5', 't4', 't3', 't2', 't', ''];
	var equations = [];

	var rows = mat.length;

	for(var i = 0; i < rows; i++){
		var string = "";
		var pivotIndex = 0;
		var pivotFound = false;
		for (var j = 0; j < mat[i].length; j++) {
			if(isVarEqualsZero(mat[i]) > -1){
				string += polyVars[isVarEqualsZero(mat[i])] + " = 0";
				break;
			}
			if(mat[i][j] !== 0){
				if(!pivotFound){
					if((mat[i][j] === 1)){
						string = string + polyVars[j] + " = ";
						pivotFound = true;
						pivotIndex = j;
					}
				}
				else{
					/*Element is nearest from the equal sign*/
					if(j === (pivotIndex+1)){
						if(mat[i][j] === 1){
							string = string + " " + " -" + polyVars[j];
						}
						else if(mat[i][j] === -1){
							string = string + " " + polyVars[j];
						}
						else{
							string = " " + string + (-1*mat[i][j]).toString() + polyVars[j];
						}
					}
					else{
						if(mat[i][j] === 1){
							string = string + " -" + polyVars[j];
						}
						else if(mat[i][j] === -1){
							string = string + " +" + polyVars[j];
						}
						else{
							var sign = "";
							var num = "";
							if((-1*mat[i][j])<0)
								sign = "-";
							else
								sign = "+";

							if((-1*mat[i][j])<0)
								num = mat[i][j].toString();
							else
								num = (-1*mat[i][j]).toString();

							string = string + " " + sign + " " + num + polyVars[j];
						}	
					}
				}
			}
		}
		equations.push(string);
	}

	for (var i = 0; i < equations.length; i++) {
		cont.innerHTML += equations[i] + "<br>";
	}
}
kernelOfL(matrix);
findBases(matrix);
document.write("<br>");
document.write(matrix);