//befor going to explain about recursion we need to solve some problems to understand it better!
//for example we have an array of numbers and we write a function that sums numbers in the array! like we return the total sum of those numbers!

function sumNumber(array) {
  let total = 0;
  for (const item of array) {
    total += item;
  }
  return total;
}

const array = [1, 2, 3, 4, 5];
// console.log(sumNumber(array));

//this was the simple array! and the simple solution
//----------------------------------------------------------------------------------
//if our array is a bit complex like arrays inside arrays
const complexArray = [1, [2, 3], 4, [5]];
//so now we have arrays and numbers in array and the previous solution doesn't work for this array because now we have array of numbers inside another array!
//like if we apply it for that array what will it give us?

// console.log(sumNumber(complexArray));

//it gave us (12,345) that is absolutely wrong lol!
//so to find a correct approach we need to see what is going on in this array

function sumComplexNumber(array) {
  let total = 0;
  for (const item of array) {
    // console.log(item)
    //we get :
    // 1
    // [2, 3];
    // 4
    // [5];
    //so for solution we can do a check that if the item is array or number.
    //if it was an array, do something; if it wasn’t, count it!
    //and so by getting numbers from those arrays and adding them to total we finally get the correct answer!
    if (Array.isArray(item)) {
      for (const item2 of item) {
        total += item2;
      }
    } else {
      total += item;
    }
  }
  return total;
}

const result = sumComplexNumber(complexArray);
// console.log(result)
//--------------------------------------------------------------------
// if we make our array more complex!
//that contains arrays of arrays of arrays of numbers!
const moreArrayComplex = [1, [2, [3]], 4, [[[[[[[[5]]]]]]]]];
function moreComplexSumNumber(array) {
  let total = 0;
  for (const item of array) {
    if (Array.isArray(item)) {
      //here instead of creating many if else for checks we just call the function itself again!
      //what it does is it again goes through that inner array and the final result will be added to the total!
      total += moreComplexSumNumber(item);
    } else {
      total += item;
    }
  }
  return total;
}

const theResult = moreComplexSumNumber(moreArrayComplex);
// console.log(theResult);

//----------------------------------------------------
// now we want to know what is recursion?
// recursion is a technique where a function calls itself to solve a problem
// usually breaking the problem into smaller pieces and having a base case to stop
