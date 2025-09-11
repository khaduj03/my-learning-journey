//---------------------------------------------------------------------------------------
// Modules in JS
// A module is another way (like classes) to group data + behavior together.
// Goal: organize code into logical, reusable units.
// Modules can also "use" or "include" other modules for cooperation.

//---------------------------------------------------------------------------------------
// Classic Modules (before ES6 modules)
// Key idea: A module is made with a function (factory function).
// - The function runs at least once.
// - It returns an object that exposes only what you want public.
// - Data that is not returned stays private (hidden).
// - This makes modules great for encapsulation (hiding details).

function Publication(title, author, pubDate) {
  var publicAPI = {
    print() {
      console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
      `);
    },
  };
  return publicAPI; // return only what we want public
}

function Book(bookDetails) {
  var pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );
  var publicAPI = {
    print() {
      pub.print();
      console.log(`
        Publisher: ${bookDetails.publisher}
        ISBN: ${bookDetails.ISBN}
      `);
    },
  };
  return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
  var pub = Publication(title, author, pubDate);
  var publicAPI = {
    print() {
      pub.print();
      console.log(URL);
    },
  };
  return publicAPI;
}

//---------------------------------------------------------------------------------------
// Comparing Classes vs Modules
// - Classes: methods + data are stored on an object instance, accessed with 'this'.
// - Modules: methods + data are just variables in scope (no 'this' needed).
// - Classes: all data is public by default.
// - Modules: you control what is public by returning only selected methods/data.
// - Both patterns give organization, but with different syntax styles.

//---------------------------------------------------------------------------------------
// Using Modules
// Unlike classes, we don’t use 'new'. We just call the factory function.

var YDKJS = Book({
  title: "You Don't Know JS",
  author: "Kyle Simpson",
  publishedOn: "June 2014",
  publisher: "O'Reilly",
  ISBN: "123456-789",
});
YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = BlogPost(
  "For and against let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);
forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let

//---------------------------------------------------------------------------------------
// Variations of Classic Modules
// Over time, developers made different styles of modules in JS:
// - AMD (Asynchronous Module Definition)
// - UMD (Universal Module Definition)
// - CommonJS (used in Node.js)
//
// They all follow the same principle: functions that create modules.
// Main differences: syntax and how they load code, but concept is the same.
//---------------------------------------------------------------------------------------
// ES Modules (ESM)
// ES Modules were added in ES6. They serve the same purpose as classic modules:
// grouping data and behavior, and letting modules use other modules.
// But the syntax and some rules are different.

// 1) File-based modules
// - An ES module is one file. One file = one module.
// - There is no wrapping function like the old factory-module pattern.

// 2) Exporting from a module
// - Use `export` to make a value (function, variable, class) public.
// - Anything not exported stays private to the file.

// publication.js
function printDetails(title, author, pubDate) {
  console.log(`
    Title: ${title}
    By: ${author}
    ${pubDate}
  `);
}

export function create(title, author, pubDate) {
  var publicAPI = {
    print() {
      printDetails(title, author, pubDate);
    },
  };
  return publicAPI;
}

// 3) Importing a module
// - Use `import { name } from "module"` to get exported pieces.
// - You can rename imports with `as` for readability.

// blogpost.js
import { create as createPub } from "publication.js";

function printDetails(pub, URL) {
  pub.print();
  console.log(URL);
}

export function create(title, author, pubDate, URL) {
  var pub = createPub(title, author, pubDate);
  var publicAPI = {
    print() {
      printDetails(pub, URL);
    },
  };
  return publicAPI;
}

// 4) Using the module
// main.js
import { create as newBlogPost } from "blogpost.js";

var forAgainstLet = newBlogPost(
  "For and against let",
  "Kyle Simpson",
  "October 27, 2014",
  "https://davidwalsh.name/for-and-against-let"
);
forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let

// Note: the "as newBlogPost" in the import is optional.
// If you omit `as newBlogPost`, you'd import the function as `create`.
// We rename it here for clarity: `newBlogPost(..)` reads better than `create(..)`.

// 5) ESM single-instance behavior (singleton)
// - ES modules are singletons: the module is evaluated once at its first import.
// - All later imports receive a reference to the same module instance.
// - If you need multiple independent instances, export a factory function (like create(..))
//   or export a class so callers can `new` their own instances.
// - In the example above, we used factory functions inside ESM to support multiple instances.

// 6) Alternatives and recommendation
// - You could export a class from an ES module instead of a factory; both work.
// - The example mixes ESM (file/module) with classic factory-style modules so you can
//   create multiple instances while still using modern imports/exports.
// - If you already use ESM, using classic factory functions inside modules is a fine pattern.

//---------------------------------------------------------------------------------------
// The Rabbit Hole Deepens (short note)
// - This chapter was a broad survey: many topics were introduced quickly.
// - It's normal if your head feels full — reread sections and practice examples.
// - The next chapter goes deeper into JS core behavior. Take time to digest this material first.
