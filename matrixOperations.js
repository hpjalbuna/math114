// Assumptions:
// 	-inputs must be valid upon usage of each function
// 	-for matrixMultiplication, matrices must have valid dimension

var abs = Math.abs;

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
	var lt = [numtr/gcd,dnmtr/gcd]
	lt = lt[1]<0? [-1*numtr/gcd,-1*dnmtr/gcd] : lt
	return lt
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

function rowInterchange(mat,rowSrc,rowDst){
	var temp = mat[rowDst]
	mat[rowDst] = mat[rowSrc]
	mat[rowSrc] = temp

	return mat

}

function createAugmentedMatrix(matrixA,b){
	var b = vectorRep(b)
	var i = 0
	matrixA = matrixRep(matrixA)
	if(b.length > 0){
		matrixA.forEach(function(row){
			row.push(b[i++])
		})
	}

	return matrixA
}


function gaussianElimination(matrixA){
	var solSet = Array()
	// var tempMatrix = Array(dim[0]).fill(0).map(() => Array(dim[1]).fill(0));
	// var lead = null
	var i=0,j,k

	var dim = getdim(matrixA)
	for(i=0;i<dim[0];i++){

		//find max in the current column
		var maxEl = matrixA[i][i][0] != 0? abs(matrixA[i][i][0]/matrixA[i][i][0]) : 0
		var maxRow = i
		for (k=i+1; k < dim[0]; k++) { 
			if (abs(matrixA[k][i][0]/matrixA[k][i][1]) > maxEl) {
                maxEl = matrixA[i][i][0] != 0? abs(matrixA[k][i][0]/matrixA[k][i][1]) : 0
                maxRow = k;
            }
        }
		
        matrixA = i != maxRow? rowInterchange(matrixA,i,maxRow) : matrixA

        //values under the leading entry must be 0
        for(k=i+1;k<dim[0];k++){
        	var c
        	if(matrixA[k][i][0] != 0){
	        	var num = -1*matrixA[k][i][0]*matrixA[i][i][1]
	        	var den = matrixA[k][i][1]*matrixA[i][i][0]
	        	c = [num,den]
	        	c = toLowestTerm(num,den)
	        } else{
	        	c = [0,1]
	        }
        	// console.log(c)
	       
        	var lcm
	    	for(j=0;j<dim[0]+1;j++){
	    		if(i==j){
	    			matrixA[k][j] = [0,1]
	    		} else{
	    			var temp = [matrixA[i][j][0]*c[0],matrixA[i][j][1]*c[1]]
	    			temp = temp[0]!=0? toLowestTerm(temp[0],temp[1]) : [0,1]
	    			lcm = lcmXY(temp[1],matrixA[k][j][1])
	    			var num = ((lcm/matrixA[k][j][1])*matrixA[k][j][0]) + ((lcm/temp[1])*temp[0])
	    			matrixA[k][j] = [num,lcm]
	    			matrixA[k][j] = matrixA[k][j][0] != 0? toLowestTerm(matrixA[k][j][0],matrixA[k][j][1]) : [0,1]
	    		}
	    	}
        }
	}

	return matrixA
}

function vectorRep(vector){
	var vectorTemp = []

	vector.forEach(function(v){
		v = v.split("/")
		v.length == 1? v.push('1') : true
		v = toLowestTerm(v[0],v[1])
		vectorTemp.push(v)
	})


	return vectorTemp
}


// function gaussJordanElimination(matrixA){
// 	var solSet = Array()
// 	matrixA = gaussianElimination(matrixA)
	
// 	matrixA = transposeMatrix(matrixA)

// 	// matrixA = gaussianElimination(matrixA)
// 	console.table(printMatrixRep(matrixA))

// 	return solSet
// }

function getSolutionVector(matrixA){
	//
}