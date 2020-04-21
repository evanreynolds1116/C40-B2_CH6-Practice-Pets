/* Practice: Represent your Pet
Create an object that represents your pet.

Name property with a string value.
Species property with a string value.
Nicknames property with an array value. Array contains strings.
Age property with an integer value */

/* Practice: Pet Sounds
Now that you have an object that represents your pet, it's time to add some behavior. Pick three behaviors that your pet has and add three kys to your pet object. Each key's value should be a function that logs to the console or displays a window alert. Your choice.

For example, if your pet is a dog, you could add a bark property, and the function would window.alert("WOOF!").

Once you have define the properties, invoke each behavior. For example:

angus.bark()
angus.whine()
angus.pant() */

/* Practice: My Pet "This"
Give your pet a new key named favoriteToys whose value is an empty array.
Now define another new key named play whose value is a function with a single parameter named toy.
The function should determine if your pet liked the toy, and if s/he does, then it should be added to the favoriteToys array using the this keyword (see example above).
Here's an example. If your pet is a cat, then he likely only likes furry toys, so you could put an if..then condition in the play() method that checks if the word "fuzzy" is in the argument value. If it is, it gets added to the array. */

const myPet = {
  name: "Kopitar",
  species: "Dog",
  nicknames: ["Kopi", "KopiDopey"],
  age: 5,
  bark: function () {
    console.log("WOOF!")
  },
  yawn: function () {
    console.log("Kopi is sleepy")
  },
  pant: function () {
    console.log("Kopi is out of breath")
  },
  favoriteToys: [],
  play: function (toy) {
    if (toy.includes("ball")) {
      this.favoriteToys.push(toy)
    }
  }
}

myPet.bark()
myPet.yawn()
myPet.pant()

myPet.play("basketball")
console.log(myPet.favoriteToys)

