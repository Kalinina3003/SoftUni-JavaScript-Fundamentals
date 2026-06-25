// Task: Cats.
// Description: Receive an array of strings in the format "{catName} {age}".
// Create a Cat class with name and age properties.
// Add a meow() method that prints: "{catName}, age {age} says Meow".
// Create a Cat object for each input string and call its meow() method.

function cats(catsArr) {
      class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`
        }
    }

    for (let catData of catsArr) {
        let parsedData = catData.split(' ');

        let catName = parsedData[0];
        let catAge = parsedData[1];

        let cat = new Cat(catName, catAge);

        console.log(cat.meow());
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);