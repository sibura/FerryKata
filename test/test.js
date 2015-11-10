var assert = require("assert");
var Car = require("../car");
var Ferry = require("../ferry");

describe("should create a car", function(){
	it("should return car color", function(){
		var car = new Car("Black", 5);
		assert.equal(car.color, "Black");
		//console.log(car.color)
	});
	it("should return no_passengers", function(){
		var car = new Car("Black", 5);
		assert.equal(car.passengers, 5);
		//console.log(car.passengers);
	});
});

describe("should get the ferry", function(){
	it("should return cars_allowed", function(){
		var ferry = new Ferry(10, 50);
		assert.equal(ferry.cars_allowed, 10);
		//console.log(ferry.cars_allowed)
	});

	it("should return people_allowed", function(){
		var ferry = new Ferry(10, 50);
		assert.equal(ferry.people_allowed, 50);
		//console.log(ferry.people_allowed);
	});
});

describe("should get max on Board", function(){
	it("cars & people should accepted", function(){

		var ferry = new Ferry(10, 50);
		var car = new Car("White", 1);
		

		assert.equal(ferry.board(car));
		console.log(ferry.board(car));	
	});
	it("cars & people should accepted", function(){

		var ferry = new Ferry(10, 50);
		var car = new Car("White", 1);
		

		assert.equal((ferry.board), "accepted");
		//console.log(ferry.board(car));	
	});

	it("cars & people should reject", function(){

		var ferry = new Ferry(10, 50);
		var car = new Car("green", 55);
		
		assert.equal((ferry.car), "reject");
		//console.log(ferry.board(car));	
	});


});