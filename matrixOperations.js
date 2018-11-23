// Assumptions:
// 	-inputs must be valid upon usage of each function
// 	-for matrixMultiplication, matrices must have valid dimension


//get dimension of the given matrix
//returns array [m,n]
function getdim(matrix) {
    if (matrix instanceof Array) {
        return [matrix.length].concat(getdim(matrix[0]));
    } else {
        return [];
    }
}

//returns lcm of two numbers
function lcmXY(x, y) {
	if ((typeof x !== 'number') || (typeof y !== 'number')){
		return false;
	}
	return (!x || !y) ? 0 : Math.abs((x * y) / gcdXY(x, y));
}

function lcmMoreNum(input_array) {
    if (toString.call(input_array) !== "[object Array]")  
        return  false;  
 	var r1 = 0, r2 = 0;
    var l = input_array.length;
    for(x=0;x<l;x++) {
        r1 = input_array[x] % input_array[x + 1];
        if(r1 === 0) {
            input_array[x + 1] = (input_array[x] * input_array[x+1]) / input_array[x + 1];
        }
        else {
            r2 = input_array[i + 1] % r1;
            if(r2 === 0) {
                input_array[x + 1] = (input_array[x] * input_array[x + 1]) / r1;
            }
            else {
                input_array[x+1] = (input_array[x] * input_array[x + 1]) / r2;
            }
        }
    }
    return input_array[l - 1];
}

//returns gcd of two numbers
function gcdXY(x, y) {
	//returns
	x = Math.abs(x);
	y = Math.abs(y);
	while(y) {
		var t = y;
		y = x % y;
		x = t;
	}
	return x;
}

//returns the lowest term of the fraction in format [numerator,denominator]
function toLowestTerm(numtr,dnmtr){
	var gcd = gcdXY(numtr,dnmtr)
	return [numtr/gcd,dnmtr/gcd]
}

//returns representation of the input matrix where value of each entry is in format [numerator,denominator]
//for each entry, already reduced in lowest term
function matrixRep(matrixA){
	var dim = getdim(matrixA)
	var matrix = Array(dim[0]).fill(0).map(() => Array(dim[1]).fill(0));
	for(i=0;i<dim[0];i++){
		for(j=0;j<dim[1];j++){
			matrix[i][j] = matrixA[i][j].split("/")
			matrix[i][j].length == 1? matrix[i][j].push('1') : true
			matrix[i][j] = toLowestTerm(parseInt(matrix[i][j][0]),parseInt(matrix[i][j][1]))
		}
	}
	return matrix
}

//prints matrix in the given input format where each entry is of type string
function printMatrixRep(matrixA){
	var dim = getdim(matrixA)
	var matrix = Array(dim[0]).fill(0).map(() => Array(dim[1]).fill(0));
	for(i=0;i<dim[0];i++){
		for(j=0;j<dim[1];j++){
			matrix[i][j] = matrixA[i][j][1] == 1? matrixA[i][j][0].toString() : matrixA[i][j][0].toString() + '/' + matrixA[i][j][1].toString()
		}
	}
	return matrix
}


function matrixAddition(matrixA,matrixB){
	var dimAB = getdim(matrixA)
	var lcm
	var div
	for (i = 0; i < dimAB[0]; i++) {
	  for (j = 0; j < dimAB[1]; j++) {
	  	lcm = lcmXY(matrixA[i][j][1],matrixB[i][j][1])
	  	matrixA[i][j] = [matrixA[i][j][0]*(lcm/matrixA[i][j][1]),lcm]
	  	matrixB[i][j] = [matrixB[i][j][0]*(lcm/matrixB[i][j][1]),lcm]
	    matrixA[i][j][0] += matrixB[i][j][0];
	    matrixA[i][j] = toLowestTerm(matrixA[i][j][0],matrixA[i][j][1])
	  }
	}
	return matrixA
}

function matrixSubtraction(matrixA,matrixB){
	matrixB = scalarMultiplication(-1,matrixB)
	return matrixAddition(matrixA,matrixB)
}

function scalarMultiplication(scalarC,matrixA){
	var dimA = getdim(matrixA)
	for (i = 0; i < dimA[0]; i++) {
	  for (j = 0; j < dimA[1]; j++) {
	    matrixA[i][j][0] != 0 ? matrixA[i][j][0] = matrixA[i][j][0]*scalarC : matrixA[i][j][0]
	    matrixA[i][j] = toLowestTerm(matrixA[i][j][0],matrixA[i][j][1])
	  }
	}
	return matrixA
}

function matrixMultiplication(matrixA,matrixB){
	var dimA = getdim(matrixA)
	var dimB = getdim(matrixB)
	var matrix = Array(dimA[0]).fill(0).map(() => Array(dimB[1]).fill(0));

	for(i = 0; i < dimA[0]; i++){
		var ctr = 0
		var allDnmtrs = Array()
		var total = 0
		var nums = Array()
		for(j = 0; j < dimB[1]; j++){
			for(k=0;k<dimA[1];k++){
				nums.push([matrixA[i][k][0] * matrixB[k][j][0],matrixA[i][k][1] * matrixB[k][j][1]])
			}
			
			nums.forEach(function(num){
				nums[ctr] = toLowestTerm(num[0],num[1])
				allDnmtrs.push(nums[ctr][1])
				ctr++
			})
			lcmNums = lcmMoreNum(allDnmtrs)
			
			nums.forEach(function(num){
				num[0] = [num[0]*(lcmNums/num[1]),lcmNums]
				total += num[0][0]
			})

			matrix[i][j] = [total,lcmNums]
			matrix[i][j] = toLowestTerm(matrix[i][j][0],matrix[i][j][1])

			ctr=0
			allDnmtrs = Array()
			total = 0
			nums = Array()
		}
	}

	return matrix
}

function transposeMatrix(matrixA){
	var dimA = getdim(matrixA)
	var matrix = Array(dimA[1]).fill(null).map(() => Array(dimA[0]).fill(null));
	
	for(i=0;i<dimA[1];i++){
		for(j=0;j<dimA[0];j++){
			matrix[i][j] = matrixA[j][i]
		}
	}
	return matrix
}

//TO-DO: Gaussian Elimination and Gauss-Jordan Elimination

// function rowInterchange(rowA,rowB,matrix){


// }

// function scalarMultRow(scalar,row,matrixA){
// 	for(i=0;i<matrixA[row].length;i++){
// 		matrixA[row][i]!=0 ? matrixA[row][i] *= scalar : matrixA[row][i]
// 	}
// 	return matrixA
// }

// function addRow(col,row,matrix){
// 	for(i=0;i<matrix[row].length;i++){
// 		matrix[row][i] += matrix[col][i]
// 	}
// 	return matrix
// }

// function searchNonZeroInd(col,matrix){
// 	var dim = getdim(matrix)
// 	for(m=dim[0]-1;m>=0;m--){
// 		if(matrix[m][col] != 0){
// 			// console.log(i)
// 			return m
// 		}
// 	}
// }

// function gaussianElimination(matrix){
// 	var dim = getdim(matrix)
// 	var temp
// 	var origMatrix
// 	var eq
// 	var idxR
// 	for(i=0;i<dim[1];i++){
// 		for(j=0;j<dim[0];j++){
// 			if(i==j){
// 				temp = matrix[j][i]
// 				eq = i
// 				if(matrix[j][i] == 0){
// 					//search for row val>0 and interchange
// 					rowEntry = matrix[i]
// 					idxR = searchNonXeroInd(i,matrix)
// 					rowChange = matrix[idxR]
// 					matrix[i] = rowChange
// 					matrix[idxR] = rowEntry
// 				}

// 				if(matrix[j][i] != 1){
// 					scalarConstant = 1/matrix[j][i]
// 					console.log(scalarConstant)
// 					// matrix = scalarMultRow(scalarConstant,j,matrix)
// 				}
// 			}
// 			console.table(matrix)

// 			// if(matrix[j][i] != 0){
// 			// 	console.log(matrix[j][i])

// 			// }
// 			// return matrix
// 		}
// 		// return

// 	}
// 	// return matrix
// }