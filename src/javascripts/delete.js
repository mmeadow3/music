"use strict";

let Print = require('./print');

let Delete = function (){
	$('.deleteButton').click(function(){
		$(this).parent().remove();
	});
};

module.exports = Delete;