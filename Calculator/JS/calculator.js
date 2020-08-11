function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
function ScientificCal(){
    
    this.cosCal = function(form){
        return Math.cos(form.display.value);
    }

    this.sinCal = function(form){
        return Math.sin(form.display.value);
    }

    
    this.tanCal = function(form){
        return Math.tan(form.display.value);
    }

    
    this.sqrtCal = function(form){
        return Math.sqrt(form.display.value);
    }
}

var scientific = new ScientificCal();

function cos(form) {
	form.display.value = scientific.cosCal(form);
}

function sin(form) {
	form.display.value = scientific.sinCal(form);
}

function tan(form) {
	form.display.value = scientific.tanCal(form);
}

function sqrt(form) {
	form.display.value = scientific.sqrtCal(form);
}

ScientificCal.lnCal = function(form) {

    logcalculation = Math.log(form.display.value);
	return logcalculation;
};

function ln(form){
    form.display.value = Calculate.lnCal(form);
}

ScientificCal.prototype.expCal = function(form){
    return Math.exp(form.display.value);
}

function exp(form) {
	form.display.value = calculate.expCal(form);
}

function BasicCal(){

	this.delete = function(input){
		return input.value.substring(0, input.value.length - 1);
	}

	this.changeSign = function(input){
		if(input.value.substring(0, 1) == "-")
		 return input.value.substring(1, input.value.length)
		else
		 return "-" + input.value
	}

	this.calculate = function(form){
		return eval(form.display.value);
	}

	this.sqrt = function(){
		return eval(form.display.value) * eval(form.display.value);
	}
}

var basicCal = new BasicCal();

function deleteChar(input) {
	input.value = basicCal.delete(input); 
}

function changeSign(input) {
	input.value = basical.changeSign(input);
}

function compute(form) {
	form.display.value = basicCal.calculate(form);
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
