/* Create a `name` variable and assign it a String value */
var name = "Jackie";

/* Create a `person` variable and give it 2 properties,
 * `name`, assign it the same name as before,
 * as well as an `age` (number);
 */
var person = {
  name: name,
  age: 24
}

/* Create a function called `greet`,
 * it should take a 1 parameter, `name`
 * and it should print "Hello, my name is {name}"
 */
var greet = function (name) {
  console.log("Hello, my name is " + name);
}

/* Create a variable called `canDrive`,
 * if it should be true if your person object is at least 16 years old
 */
 var canDrive = false;
 if (person.age > 16) {
  canDrive = true;
 }

/* Create an array called `dataTypes` with atleast 1 of every data type;
 * (there are 6 different data types);
 */
 var dataTypes = [ 1, "two", true, null, "DevLeague"/2, undefined, person];

/* Create a Dog object using the `new` constructor.
 * it should have a `bark` function that makes your dog bark!
 * It should also have a name attribute.
 */
var Dog = new Object();
Dog.bark = function() {
  console.log("Bark. Bark.");
}
Dog.name = "Chiru";