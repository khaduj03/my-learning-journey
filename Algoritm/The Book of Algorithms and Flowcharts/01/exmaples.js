// 1)------------------------------------------------------------------------------
// Write an algorithm that stores three numbers (2, 3, 5) in A, B, and C,
// then calculates the average of them.

let [a, b, c] = [1, 2, 3];
function average(list) {
  let totalSume = 0;
  for (const num of list) {
    totalSume += num;
  }
  const middle = list.length;
  const result = totalSume / middle;
  return result;
}
// console.log(average([a,b,c]));

// 2)------------------------------------------------------------------------------
// The salary of an employee is A riyals.
// Every month, 10% of the salary is deducted for insurance (bema)
// and 5% is deducted for the cost of the place where he lives or daily expenses.
// Write an algorithm that receives the salary (A) and calculates the exact salary after deductions.

// 1 - Start
// 2 - Input A(salary)
// 3 - B < -- 10 * A / 100   (insurance)
// 4 - M < -- 5 * A / 100    (living/daily cost)
// 5 - S < -- B + M(total deductions)
// 6 - H < -- A - S(final salary)
// 7 - Write H
// 8 - End

function exactSalary(salary) {
  let insurance = (10 * salary) / 100;
  let cost = (5 * salary) / 100;
  let s = insurance + cost;
  // print(s)
  let exactS = salary - s;
  return exactS;
}

const final = exactSalary(10000);
console.log("exact salary", final);
