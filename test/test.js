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
	
	});

	it("should return people_allowed", function(){
		var ferry = new Ferry(10, 50);
		assert.equal(ferry.people_allowed, 50);
	});
});

describe("should get max on Board", function(){
	it("cars & people should be on board", function(){

		var ferry = new Ferry(10, 50);
		var car = new Car("White", 1);
		var car1 = new Car("green", 20);

		console.log(ferry.board);
		assert.equal(ferry.board(car), "Rejected");
		assert.equal(ferry.board(car1), "Accepted");
		console.log(ferry.board(car));	
	});
	
	it("Accepted cars & people should be on board", function(){

		var ferry = new Ferry(10, 50);
		var car = new Car("yellow", 5);
		
		assert.equal(ferry.board(car), "Accepted");
		console.log(ferry.board(car));
	
	});

	it("rejected cars & people should be on board", function(){

		var ferry = new Ferry(10, 50);
		
		var car3 = new Car("green", 55);
		assert.equal(ferry.board(car3), "Accepted");
		console.log(ferry.board(car3));
			
	});
});