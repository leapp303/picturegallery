	'use strict';
	 
	angular.module('photog', ['ngAnimate'])
	  .controller('AngularCtrl', function ($scope) {
	 
	    
	    $scope.pictures = [
		
	        {loc: 'http://www.wallsave.com/wallpapers/800x500/flowers-nature/364306/flowers-nature-best-animals-web-design-studio-364306.jpg'},
	        {loc: 'http://www.desktopaper.com/wp-content/uploads/fond-ecran-nature-hd-15-wide-800x500.jpg'},
	        {loc: 'http://www.desktopaper.com/wp-content/uploads/beautiful-trees-and-nature-wallpapers-hd-800x500.jpg'},
	        {loc: 'http://www.wallsave.com/wallpapers/800x500/qoutes/118153/qoutes-hairstyle-tattoo-cool-beautiful-nature-part-118153.jpg'},
	        {loc: 'http://www.wallsave.com/wallpapers/800x500/animal-black-and-white-animals-nature-rain/319683/animal-black-and-white-animals-nature-rain-category-hd-subcategory-forests-319683.jpg'},
			{loc: 'http://www.wallsave.com/wallpapers/800x500/moonlight-in-the-winter/306615/moonlight-in-the-winter-category-nature-hd-subcategory-306615.jpg'},
	        {loc: 'http://www.wallsave.com/wallpapers/800x500/oil-nature/435467/oil-nature-paintings-winter-season-snow-trees-artwork-435467.jpg'},
	        {loc: 'http://www.wallsave.com/wallpapers/800x500/green-nature/193163/green-nature-cool-love-beautiful-193163.jpg'}
	    ];
	 
	    
	    $scope._Index = 0;
	 
	    $scope.display = function (cursor) {
	        return $scope._Index === cursor;
	    };
	 
	    $scope.showPicture = function (cursor) {
	        $scope._Index = cursor;
	    };
	});