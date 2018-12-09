
window.onload = function() {
	console.log("hello");
	checkLinearDependence([['1','2','3'],['4','5','6']], "r");
	
}

//vectors in [[a,b,c], [d,e,f]] form. array of array. type is "r" or "p". r for vectors, p for polynomials.
function checkLinearDependence(vectors, type){
	console.log("asddsa");
	var degree = vectors[0].length
	lindepsolution = document.getElementById("lindepsolution");
	if (type == "r"){
		step1 = "Given the set <br>"
		given = getSMatrix(vectors);
		step1 += given;
		setS = getSetS(vectors, type);
		baseEquateToZero = equationToZero(vectors, type);

		//rowMatrix = gaussianElimination([[1,2,3,0], [4,5,6,0], [1,1,1,0]]);
		//console.log(rowMatrix);
		var mat = vectors;//[['1','-2','1'],['0','2','-8'],['-4','5','9']]
    	var x = ['0','0','0']

    	//augmentedMat = createAugmentedMatrix(mat,x)
    		// var y = vectorRep(x)
    	//console.log(printMatrixRep(gaussianElimination(vectors)))
    	//vtran = sameVariable(vectors);
    	console.log(vectors)
    	console.log(sameVariable(vectors))
    	samevars = sameVariable(vectors);
    	console.table(printMatrixRep(matrixRep(samevars)));
    	rowEchelon = printMatrixRep(gaussianElimination(samevars));
    	console.table(printMatrixRep(gaussianElimination(samevars)));
//    	gaussianForm = gaussianElimination(matrixRep(samevars))
  //  	rowechelonform = printMatrixRep(gaussianForm);
    	rowEchelonTable = matrixTable(sameVariable(rowEchelon));
    	//console.log(rowechelontable)
    	//step1 += rowechelontable;
		step1 += "<br>The set " + setS + " of vectors in "+ type.toUpperCase() + "<sup> "+ degree+"</sup>"+ "is linearly independent if the only solution of " + baseEquateToZero + "."
		step1 +=  "Otherwise (i.e., if a solution with at least some nonzero values exists), S is linearly dependent. <br>"
		
		step1 += "<br> perform row echelon on matrix";
		// += rowchelonform;
		console.log();
	//	rowecheleonMatrix = sameVariable(rowechelonform);
		step1 += rowEchelonTable;	
		var trivial = isTrivial(sameVariable(rowEchelon));
		/*trivial = false;
		for (i = 0; i < rowecheleonMatrix.length; i++) {
			checker = true
			for (j = 0; j < rowecheleonMatrix[0].length -1; j++){
				if (rowecheleonMatrix[i][j] != rowecheleonMatrix[i][j+1] ){
					checker = false;
					console.log("it true")
				}
			}
			if (checker == true) { trivial = true}
		}
	*/
		if (trivial == true){
			step1 += "<br> System has only the trivial solution. Therefore, it is linearly independent."
		}else{
			step1 += "<br> System has a nontrivial solution. Therefore, it is linearly dependent."

		}
		
		step1solution = document.getElementById("step1");
		step1solution.innerHTML = step1;
	}
	else{
		setS = getSetS(vectors, type);
		baseEquateToZero = equationToZero(vectors, type);
		
		step1 = "The set " + setS + " of vectors in P2 is linearly independent if the only solution of " + baseEquateToZero + "."
		step1 +=  "Otherwise (i.e., if a solution with at least some nonzero values exists), S is linearly dependent. <br>"
		eq2 = equateToZero(vectors);
		step1 += eq2 + "<br>";
		sameVariable(vectors);
		[groupedEquation, subgroups, arrayMatrix] = grouping(vectors)
		step1 += groupedEquation;
		step1 += "<br> arranging the left hand side <br>"
		subgroupsdiv = ""

		for ( i = 0 ; i <= subgroups.length -1; i++){
			subgroupsdiv += "(" + subgroups[i] + ") = 0 <br>"
		}
		step1 += subgroupsdiv;

		//console.log(arrayMatrix);
		//aug = ['0','0','0']
		//mat = createAugmentedMatrix(arrayMatrix, aug);
		

		//console.log(rowMatrix);
		matrix = matrixTable(vectors);
		//rowMatrix = gaussianElimination(vectors);
		//console.log(rowMatrix);
		step1 += matrix;
		step1 += "<br> perform row echelon on matrix";
		rowecheleonMatrix = [[0,0,0], [0,1,0], [0,0,1]];
		trivial = false;
		for (i = 0; i < rowecheleonMatrix.length; i++) {
			checker = true
			for (j = 0; j < rowecheleonMatrix[0].length -1; j++){
				if (rowecheleonMatrix[i][j] != rowecheleonMatrix[i][j+1] ){
					checker = false;
					console.log("it true")
				}
			}
			if (checker == true) { trivial = true}
		}
		if (trivial == true){
			step1 += "<br> System has a trivial solution. Therefore, it is linearly independent."
		}
		step1solution = document.getElementById("step1");
		step1solution.innerHTML = step1;
	}
}

function getSetS(vectors, type){
	console.log(type)
	len = vectors[0].length;
	setS = "S = {";
	for (i = 1; i <= len; i++){
		if (type == "r"){
			setS += "v<sub>" + i + "</sub>"

		}else{
			setS += "p<sub>" + i + "</sub>(t)"
		}
		if (i != len) {
			setS += ", "
		}
	}
	setS += "}"
	return setS;
}

function equationToZero(vectors, type){
	console.log(type)
	len = vectors[0].length;
	baseEquateToZero = "";
	for (i = 1; i <= len; i++){
		if (type == "r"){
			baseEquateToZero += "c<sub>" + i + "</sub>v<sub>" + i + "</sub>"

		}else{
			baseEquateToZero += "c<sub>" + i + "</sub>p<sub>" + i + "</sub>" + "(t)"
		}
		if (i != len) {
			baseEquateToZero += " + "
		}
	}
	baseEquateToZero += " = 0 is "
	for (i = 1; i <= len; i++){
		baseEquateToZero += "c<sub>" + i + "</sub>" 
		if (i != len) {
			baseEquateToZero += ", "
		}
	}
	baseEquateToZero += " = 0"
	return baseEquateToZero;
}

function equateToZero(vectors){
	//c1 (1  + 2 t + 3 t2)  +  c2 (4  + 5 t + 6 t2) = 0
	len = vectors.length;
	len2 = vectors[0].length
	powers = []
	
	equateToZero = "";
	
	array = []
	for (i = 1; i <= len; i++){
		equateToZero += "c<sub>" + i + "</sub>(";
		for (k = 0; k < len2; k++){
			
			equateToZero += vectors[i-1][k];
			if (k != 0){
				equateToZero += "t"

			}
			if (k != 0 && k != 1){
				equateToZero += "<sup>" + k + "</sup>"
				
			}
			if (k != len2-1){
				equateToZero += " + ";
			}
			
		}
		equateToZero += ")"
		if (i != len){
			equateToZero += " + ";
		}	
	}
	equateToZero += " = 0"
	return equateToZero;
}

function sameVariable(vectors){
	console.log("SAME VARIABLE")
	sameVar = [];
	numberOfElements = vectors.length
	depth = vectors[0].length;

	for (v = 0; v < depth; v++){
		sameVar.push([])
	}

	for (element = 0; element < numberOfElements  ; element++){
		for (i = 0; i < depth ; i ++){
			

			sameVar[i].push(vectors[element][i]);
		}
	}
	//index serve as their t value
	return sameVar;
}

function grouping(vectors){
	vectors = sameVariable(vectors);
	groupedEquation =""
	len = vectors.length;
	len2 = vectors[0].length;
	sub = 1;
	subgroups = []
	
	for (i = 0; i <= len -1; i++){
		groupedEquation += "("
		sub = 1
		subs = ""
		
		for (n = 0; n <= len2 -1; n++){
			
			subs += vectors[i][n] + "c<sub>" + sub + "</sub>"
			if (n != len2 -1){
				subs += " + "
			}
		sub++;

		}
		subgroups.push(subs);
		groupedEquation += subs;
		if ( i == 0){
			groupedEquation += ")"
		}
		else{
			groupedEquation += ")t <sup>" + i + "</sup>";
		
		}
		if (i != len-1){
			groupedEquation += " + ";
		}else{
			groupedEquation += "= 0";
		}
	}
	arrayMatrix = vectors;
	return [groupedEquation, subgroups,arrayMatrix ];
}



function matrixTable(vectors){
	vectors = sameVariable(vectors);
	var tableMatrix = "<table id='tableMatrix'> ";
	var rows = vectors.length;
	var depth = vectors[0].length;
	for (row = 0; row < rows; row++) {
		tableMatrix += "<tr>"
		for (col = 0; col <depth; col++){
			tableMatrix += "<td>" + vectors[row][col] + "</td>"
		}
		tableMatrix += "</tr>"
	}
	tableMatrix += "</table>"
	return tableMatrix;

}


//


function getSMatrix(vectors){
	//div = "<table class='sMatrix'> <tr> <td> </td><td> </td><td> </td></tr> <tr><td>S</td><td> = </td><td> { </td></tr></table>";
	div = "<table class='givenMatrix'>";
	numberOfVectors = vectors[0].length;
	//for (i=0; i < numberOfVectors ; i++){
		div += "<tr><td>S = {</td>"

		vectors.forEach(function(row){
			div += "<td><table class='vectorMatrix'>"
			row.forEach(function(vec){
				div += "<tr class='vec'><td>" + vec + "</td></tr> ";
				});
			div += "</table> </td><td>" 
			if (row != vectors[vectors.length-1]){div+= ","}
			"</td>"
			})
	//}
	div += " <td> } </td></tr></table>";
	//div += "<table class='sMatrix'> <tr> </tr> <tr><td> } </td></tr></table>";

	$("#givenMatrix").find('td').css("border-left", "solid 1px black");

	return div;

}


function isTrivial(vectorsInREF){
	for (var i = 0; i < vectorsInREF.length ; i++){
		if (vectorsInREF[i][i] == 0){
			return false;
		}
	}
	return true;
}