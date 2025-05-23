//  JavaScript Lesson: switch-case Statement

// 
// ------ 1. Basic switch-case example with role variable
let role = "guest";

switch (role) {
  case "guest":
    console.log("It is guest");
    break; // exit switch after match
  case "admin":
    console.log("Admin user");
    break;
  default:
    console.log("Unknown user"); // runs if no cases match
}

// 
// ------ 2. Using switch-case with Date object to get current weekday
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(day);
    break;
  case 1:
    day = "Monday";
    console.log(day);
    break;
  case 2:
    day = "Tuesday";
    console.log(day);
    break;
  case 3:
    day = "Wednesday";
    console.log(day);
    break;
  case 4:
    day = "Thursday";
    console.log(day);
    break;
  case 5:
    day = "Friday";
    console.log(day);
    break;
  case 6:
    day = "Saturday";
    console.log(day);
    break;
  default:
    console.log("Invalid day");
}
