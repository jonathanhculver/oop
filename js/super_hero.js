
var oop = window.oop || {};

oop.SuperHero = (function(heroName, power, level) {
	var self = {};
	var name,
		powerName,
		strengthLevel;

	var init = function(heroName, power, level) {
		/* defaults */
		heroName = (heroName === undefined ? 'batman' : heroName);
		power = (power === undefined ? 'money' : power);
		level = (level === undefined ? 1 : level); 

		setName(heroName);
		setPower(power);
		setStrength(level);
	};

	self.getName = function() {
		return name;
	};

	self.getPower = function() {
		return powerName;
	};

	self.getStrength = function() {
		return strengthLevel;
	};

	self.powerUp = function() {
		return ++strengthLevel;
	};

	self.powerDown = function() {
		return --strengthLevel;
	};

	self.attack = function(opponent) {
		self.powerUp();
		opponent.powerDown();
	};

	var setName = function(heroName) {
		name = heroName;
		return name;
	};

	var setPower = function(heroPower) {
		powerName = heroPower;
		return powerName;
	};

	var setStrength = function(level) {
		strengthLevel = level;
		return level;
	};

	init(heroName, power, level);

	return self;

});

oop.SuperHero.Alien = (function(heroName, power, level){
	var isAlien = true;
	var self = new oop.SuperHero(heroName, power, level);

	self.isAlien = function() {
		return isAlien;
	};

	return self;
});

oop.SuperHero.Human = (function(heroName, power, level){
	var isAlien = false;
	var self = new oop.SuperHero(heroName, power, level);

	self.isAlien = function() {
		return isAlien;
	};

	return self;
});
