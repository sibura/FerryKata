# Ferry Kata

In a country far far away there's lots of Ferries that allows people to easily travel by car between all the different islands of this country.

This countries’ government would like to control the number of cars and people that can get onto a Ferry.

To help them they need you to:

* Create a Car class each car instance has a color and keeps track of the number of passengers in the car.

* Create a Ferry class, the constructor should specify the number of cars allowed on the ferry and also how many people are allowed on the ferry. 

Cars are allowed onto the Ferry using the board method. If the ferry is not full yet the 
board method returns 'accepted'. If there are enough people or cars on the Ferry already the board method should return 'rejected'.

The Ferry class instance should keep track of the number of people and cars on the Ferry using the people_count and car_count properties.

Once you can load cars into the Ferry, look at other things the Ferry company is interested in.

The Ferry company is also interested in:
knowing how many cars of a certain color is on the Ferry. 
updating the people and car counts correctly when a car is leaving the Ferry
giving a car 50% discount after three trips on the same ferry. The board method should return ‘half price!’.
giving a free trip after 7 trips on any Ferry.The board method should returns ‘you go free!’
