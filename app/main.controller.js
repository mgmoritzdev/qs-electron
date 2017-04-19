(function() {
	"use strict"
	
	angular
		.module("app")
		.controller("mainController", MainController);

	function MainController() {
		var vm = this;

		vm.hello = 'Hello World!';
	}
})();
