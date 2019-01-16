/*
    JAVASCRIPT INHERITANCE
    
    In simple terms, inheritance is the concept of one object gaining the properties or behavious of another object. TO say A inherits from B is like saying A is a type of B.

    For example : a Bird inherits from Animal because a Bird is a type of Animal - it can do the same thing, but a little bit more (or different).

    In Javascript, we must use a special object called 'prototype' which assigns properties to a type such as Animal. Only functions have a prototype, which is why we must create a function first.

    Source : https://stackoverflow.com/questions/5027045/what-is-inheritance-in-javascript
    
*/

function Animal(){}; // this is a Animal *Type*
Animal.prototype.eat = function() {
    alert("All animals can eat");
}

// Not to create a type that inherits from Animal, we must also use the 'prototype' object, but this time the one belonging to the other type, e.g Bird.

function Bird(){}; // Declaring a Bird *Type*
Bird.prototype = new Animal(); // Bird now inherits from Animal
Bird.prototype.fly = function() {
    alert("Birds can fly, while most others can't");
}

// The effect of this is that any Birds we create (called an instance of Bird) all have the properties of Animals, but they also have the addition fly()

var aBird = new Bird(); // create an instance of Bird
aBird.eat(); // will alert "All animals can eat"
aBird.fly(); // will alert "Birds can fly..."

var anAnimal = new Animal();
anAnimal.eat(); // will alert as normal
anAnimal.fly(); // will throw error, since only Birds have fly() in it's prototype.