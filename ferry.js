module.exports = function(cars_allowed, people_allowed){
	this.cars_allowed = cars_allowed;
	this.people_allowed = people_allowed;
	this.count_cars = 0;
	this.count_people = 0;

	this.board = function(car){
		this.count_cars  ++;
		this.count_people =  this.count_people + car.passengers;
 		
	 if (this.count_cars > car) {
	 	return "allowed";
	  }//else{
	 // 	return "rejected";
	 // }
};
    
}