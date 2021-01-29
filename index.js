console.log("Gerenciador");

var client = "Maurício Rodrigues"

console.log("Cliente :" + client);

var valProduct = 100;
var valDiscount = 37;


var discountFunc = require("./modules/calDiscount");


var finalValue = discountFunc(valProduct,valDiscount);


console.log("valor final do produto" + finalValue);
