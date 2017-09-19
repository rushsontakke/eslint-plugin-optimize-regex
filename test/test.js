const re = /[a-zA-Z_0-9][A-Z_\da-z]*\e{1,}/;
process.exit();
const reg = /\w+e+/;
var amount="20";
var regex = /^[0-9]\d*(?:\.\d{0,2})?$/;
if (regex.test(amount)){
 	context.setVariable("amount", amount);
} 

