// Donald Knuth: computer science is essentially the study of algorithms.
// To find a solution to a problem, we can consider three important points:
// 1- Understanding the problem deeply
// 2- Creating a plan (or map) for how to solve the problem
// 3- Analyzing the problem and its solution

// 1- Understanding the problem:
// 1.1 Data: the given information or inputs we have, and the results we can get from them.
// 1.2 Unknown (Majhol): the value or result the problem is asking us to find.
// 1.3 Connection between data and unknowns: the logical relationship that helps us use the data to find the unknowns.

// For example: we want to find a number between 10 and 20.
// Data: the two numbers (10, 20)
// Unknown: the number between them
// Connection: the formula or rule that defines how to get a number between 10 and 20.

// Finding the approach: after understanding the problem, the second step is to find a solution.
// We can find two types of solutions:
// 1. With an algorithm
// 2. Without an algorithm (theoretical or direct way)

// Example 2: Suppose there are 20 chess players in a tournament. Each match eliminates one player.
// Determine how many matches are played in total.

// Data: 20 players
// Unknown: total number of matches played

// Non-algorithmic approach: in every chess match, there is one winner and one loser.
// Since there are 20 participants and only one winner remains at the end,
// that means 19 players must have been eliminated.
// Therefore, 19 matches were played in total.

// Algorithmic approach: the total number of matches equals the number of players minus one.
// So, total matches = 20 - 1 = 19.

// So what is an algorithm?
// Abu Musa al-Khwarizmi: the way he solved problems was called “al-Khwarizmi,”
// and later, this word became “algorithm.”
// An algorithm is a set of ordered and well-defined steps that solve a problem.

// Advantages of an algorithm:
// 1. The number of steps is finite and known.
// 2. It has a clear starting point and ending point.
// 3. Each step is unambiguous (no confusion or vagueness).
// 4. Each step is understandable and executable.
// 5. Every step has a specific purpose.

// Algorithm from the machine’s point of view:
// 1. Receiving some data (input)
// 2. Producing one or more results (output)
// 3. Performing comparison operations between data
// 4. Storing data and information in memory
// 5. Performing mathematical or logical operations

// Note:
// For two data values, we always have these cases:
// a < b   a > b   a = b

// For one data value, we have these cases:
// a = 0   a < 0   a > 0
