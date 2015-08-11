var $ = require("jquery");

var button = $("button").on("click", function(){
	alert("hola 2");
})

module.exports = button;