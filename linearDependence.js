window.onload = function() {
	console.log("hello");
	checkLinearDependence([[1,2,3],[4,5,6], [7,8,9]], "p");
}

//vectors in [[a,b,c], [d,e,f]] form. array of array. type is "r" or "p". r for vectors, p for polynomials.
function checkLinearDependence(vectors, type){
	console.log("asddsa");
	lindepsolution = document.getElementById("lindepsolution");
	if (type == "r"){
		
		step1 = "The set S = {v1, v2, v3} of vectors in R3 is linearly independent if the only solution of c1v1 + c2v2 + c3v3 = 0 is c1, c2, c3 = 0."
	}
	else{
		setS = getSetS(vectors);
		baseEquateToZero = equationToZero(vectors);
		
		step1 = "The set " + setS + " of vectors in P2 is linearly independent if the only solution of " + baseEquateToZero + "."
		step1 +=  "Otherwise (i.e., if a solution with at least some nonzero values exists), S is linearly dependent. <br>"
		eq2 = equateToZero(vectors);
		step1 += eq2 + "<br>";
		sameVariable(vectors);
		[groupedEquation, subgroups] = grouping(vectors)
		step1 += groupedEquation;
		step1 += "<br> arranging the left hand side <br>"
		subgroupsdiv = ""
		for ( i = 0 ; i <= subgroups.length -1; i++){
			subgroupsdiv += "(" + subgroups[i] + ") = 0 <br>"
		}
		step1 += subgroupsdiv;
		step1solution = document.getElementById("step1");
		step1solution.innerHTML = step1;
		

	}
}

function getSetS(vectors){
	len = vectors[0].length;
	setS = "S = {";
	for (i = 1; i <= len; i++){
		setS += "p<sub>" + i + "</sub>(t)"
		if (i != len) {
			setS += ", "
		}
	}
	setS += "}"
	return setS;
}

function equationToZero(vectors){
	len = vectors[0].length;
	baseEquateToZero = "";
	for (i = 1; i <= len; i++){
		baseEquateToZero += "c<sub>" + i + "</sub>p<sub>" + i + "</sub>" + "(t)"
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
	sameVar = [];
	len = vectors.length
	len2 = vectors[0].length;

	for (v = 0; v < len2; v++){
		sameVar.push([])
	}
	console.log(sameVar, len)
	for (index = 0; index <len  ; index++){
		for (i = 0; i<= len2 -1 ; i ++){

			console.log(vectors, len, len2)
			console.log(i, index)
			console.log("pushing" + vectors[i][index])

			sameVar[index].push(vectors[i][index]);
		}
	}
	console.log(sameVar);
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
			groupedEquation += "= 0"
		}
	}
	console.log(groupedEquation)
	console.log(subgroups)

	return [groupedEquation, subgroups];
}