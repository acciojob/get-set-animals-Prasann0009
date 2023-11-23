//complete this code
class Animal {
	constructor(species)
    {
       this._species=species;
    }

    get species()
    {
        return this._species;
    }

	makeSound()
	{
		console.log("Animal Sound");
	}
}

class Dog extends Animal {
	purr() {
    console.log("purr");
  }

  // Overriding the makeSound method for Cat
  makeSound() {
    console.log("Meow");
  }
}

class Cat extends Animal {
	 bark() {
    console.log("woof");
  }

  // Overriding the makeSound method for Dog
  makeSound() {
    console.log("Woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
