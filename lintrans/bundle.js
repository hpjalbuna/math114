(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{"rref":2}],2:[function(require,module,exports){
module.exports = function (A) {
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

},{}]},{},[1]);
