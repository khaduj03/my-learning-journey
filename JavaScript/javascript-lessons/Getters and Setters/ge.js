// -------- Getters and Setters ---------------------------------------------------

// An object representing a person with first and last names
const person = {
  fname: "ali",
  lname: "mohamadi", // fixed typo: laname -> lname

  // Getter for fullName - allows reading fullName as a property
  get fullName() {
    return `${this.fname} ${this.lname}`;
  },

  // Setter for fullName - allows setting fullName as a property
  set fullName(value) {
    const parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1]; // fixed typo: laname-parts[1] -> lname = parts[1]
  },
};

// Getters: allow access to computed or derived properties like fullName
console.log(person.fullName); // Output: "ali mohamadi"

// Setters: allow updating multiple related properties by setting one property
person.fullName = "reza ahmadi";

console.log(person.fullName); // Output: "reza ahmadi"
console.log(person.fname); // Output: "reza"
console.log(person.lname); // Output: "ahmadi"
