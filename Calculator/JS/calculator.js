function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
class ScientificCal{
	
    cosCal(form){
        return Math.cos(form.display.value);
    }

    sinCal(value){
        return Math.sin(value);
    }

    
    tanCal(form){
        return Math.tan(form.display.value);
    }

    
    sqrtCal(value){
        return Math.sqrt(value);
	}
	
	static lnCal(form) {

		logcalculation = Math.log(form.display.value);
		return logcalculation;
	};
}

let scientific = new ScientificCal();

function cos(form) {
	form.display.value = scientific.cosCal(form);
}

function sin(form) {
	form.display.value = scientific.sinCal(form.display.value);
}

function tan(form) {
	form.display.value = scientific.tanCal(form);
}

function sqrt(form) {
	form.display.value = scientific.sqrtCal(form.display.value);
}

function ln(form){
    form.display.value = Calculate.lnCal(form);
}

ScientificCal.prototype.expCal = function(form){
    return Math.exp(form.display.value);
}

function exp(form) {
	form.display.value = calculate.expCal(form);
}

class BasicCal{

	delete(input){
		return input.value.substring(0, input.value.length - 1);
	}

	changeSign(input){
		if(input.value.substring(0, 1) == "-")
		 return input.value.substring(1, input.value.length)
		else
		 return "-" + input.value
	}

	cal(value){
		return eval(value);
	}

	sqrt(form){
		return eval(form.display.value) * eval(form.display.value);
	}
}

let basicCal = new BasicCal();

function deleteChar(input) {
	input.value = basicCal.delete(input); 
}

function changeSign(input) {
	input.value = basical.changeSign(input);
}

function compute(form) {
	form.display.value = basicCal.cal(form.display.value);
}

function square(form) {
	form.display.value = basicCal.sqrt(form);
}

function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.substring(i, i+1)
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
