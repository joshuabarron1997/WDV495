// JavaScript Document
let accountBalance: number; //ts defined variable type
accountBalance = 0;
let stringBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(0); //global variables

function depositAccount(num:any){//ts defined argrument type
	// num = "5";

	if (isNaN(num) || num.trim() === ""){  //validtes input
		document.querySelector("#message").innerHTML = "<p>Please enter a number.</p>"; //sends error
		console.log("sent here");
	}
	else{
		let n: number; //ts defined variable type
		n = parseFloat(num);
		if (n < 0){
			document.querySelector("#message").innerHTML = "<p>Amount cannot be negative.</p>"; //sends error
		}
		else{
			accountBalance += n;
			var s = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n); //easy string
			stringBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(accountBalance); //more easy strings
			document.querySelector("#message").innerHTML = ""; //clears a error
		}
	}
	displayAccount();
}

function withdrawAccount(num:any){//ts defined argrument type

	if (isNaN(num) || num.trim() === ""){  //validtes input
		document.querySelector("#message").innerHTML = "<p>Please enter a number.</p>"; //sends error
	}
	else{
		let n: number; //ts defined variable type
		n = parseFloat(num);
		if (n < 0){
			document.querySelector("#message").innerHTML = "<p>Amount cannot be negative.</p>"; //sends error
		}
		else if(n > accountBalance){
			document.querySelector("#message").innerHTML = "<p>Cannot withdraw more than you have!</p>"; //sends error
		}
		else{
			accountBalance -= n;
			var s = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n); //easy string
			stringBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(accountBalance); //more easy strings
			document.querySelector("#message").innerHTML = ""; //clears a error
			
		}
	}
	displayAccount();
}

function displayAccount(){
	document.querySelector("#balance").innerHTML = stringBalance //balance
}

function resetAccount(){
	accountBalance = 0;
	stringBalance = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(0); //clear everything and resets variables
	document.querySelector("#message").innerHTML = "";
	document.querySelector("#inAmt").innerHTML = "";
	document.querySelector("#balance").innerHTML = "";
}

function clearFields(){
	document.querySelector("#message").innerHTML = ""; //clears literal string fields and changes no numbers
	document.querySelector("#inAmt").innerHTML = "";
	document.querySelector("#balance").innerHTML = "";
}



document.addEventListener('DOMContentLoaded', init, false); //adds listenters when dom loads
function init(){

	document.querySelector("#button3").addEventListener('click', function(){depositAccount((<HTMLInputElement>document.getElementById('inAmt')).value)}); ///converted document selectors into typescript parsable elements
	
	document.querySelector("#button4").addEventListener('click', function(){withdrawAccount((<HTMLInputElement>document.getElementById('inAmt')).value)});
	
	document.querySelector("#button5").addEventListener('click', displayAccount);
	
	document.querySelector("#button2").addEventListener('click', resetAccount);
	
	document.querySelector("#clear").addEventListener('click', clearFields);
}