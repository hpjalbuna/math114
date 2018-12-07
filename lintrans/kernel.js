var rref = require('rref');
function gaussJordanForm(matrix){
	return rref(matrix);
}

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

function kernel(mat){
	var polyVars = ['a', 'b', 'c', 'd', 'e', 'f'];
	var positions = ['t6', 't5', 't4', 't3', 't2', 't', '']
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

	var cont = document.getElementById('cont');
	for (var i = 0; i < equations.length; i++) {
		cont.innerHTML += equations[i] + "<br>";
	}
}
kernel(matrix);
document.write(matrix);