// const video = {
//     title: "a",
//     play() {
//         console.log(this);
//     },
//     stop() {
//         console.log(this);
//     }
// }
// video.play()
// video.stop()

// this ------------------------------------------------------------------------------
// In functions, "this" refers to the global object (window in browsers, global in Node.js)

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// }
// function playVideo() {
//     console.log(this);
// }
// video.play()

// Using constructor function and "this"

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }
// const v = new Video("abc")

// Another constructor example

// function Name(nam) {
//     this.nam = nam;
// }
// const v = new Name("ahmad")
// console.log(v)

// Problem with "this" inside callback functions

// const video = {
//     title: 'a',
//     tags: ["a", "b", "c"],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log(this, tag);  // "this" here is not the video object
//         }, { ali: 1 });
//     }
// }
// video.showTags()
// console.log(video)

//----- Changing "this" inside callbacks ------------------------------------------------

// Using a variable to store "this" reference (old approach)

// const video = {
//     title: "a",
//     tags: ["a", "b", "c"],
//     showTags() {
//         const self = this;
//         this.tags.forEach(function(tag) {
//             console.log(self.title, tag);
//         })
//     }
// }
// video.showTags()

// Using arrow function to preserve "this"

// const video = {
//     title: "a",
//     tags: ["a", "b", "c"],
//     showTags() {
//         this.tags.forEach(tag => {
//             console.log(this.title, tag);
//         })
//     }
// }
// video.showTags()

// Using call(), apply(), and bind() to change "this"

// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: "b" });    // call() calls function immediately with given this
// playVideo.apply({ name: "x" });   // apply() same as call(), but accepts arguments as array
// const fn = playVideo.bind({ name: "z" });  // bind() returns new function with bound this
// fn();  // invoking the bound function

// Example showing bind() is strongest

// const person1 = {
//     name: 'John',
//     greet: function() {
//       return this.name;
//     }
// };

// const person2 = {
//     name: 'Jane'
// };

// const boundGreet = person1.greet.bind(person2);  // 1. bind() permanently binds this to person2
// console.log(boundGreet()); // 'Jane'

// console.log(person1.greet.call(person2));  // 2. call() temporarily sets this to person2

// console.log(person1.greet());  // 3. Normal call, this refers to person1

// function saySomething() {
//     return this;
// }

// console.log(saySomething());  // 4. In global context, this is the global object (window in browser)
