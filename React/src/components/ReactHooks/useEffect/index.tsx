import React from "react";
import { useState, useEffect } from "react";

// 1. What is useEffect?
// useEffect is a React hook used to perform side effects in functional components.

// Side effects: Anything that happens as a result of something else,  logging, fetching data, updating the DOM, setting timeouts.

// Controlled side effects: Unlike real-world side effects, in React, you have full control over what triggers the effect and when it runs.

// Example: Logging a counter value whenever it changes, or fetching API data after component renders.

// 2. Basic Syntax
// useEffect(() => {
//   // Code to run (side effect)
// }, [dependencies]); // Dependency array

// First part: The function containing the code to run (side effect)
// Dependency array: Tells React what state or props to listen to for running the effect
// Optional return function: Cleanup function (runs before effect re-runs or when component unmounts)

// 3. Key Points
// Runs on Mount: useEffect always runs at least once when the component mounts.

// Dependency Array:
// Empty [] → Runs only once on mount.
// With variables [count] → Runs every time the specified variable changes.
// Cleanup Function: Optional. Runs:

// Before the effect re-runs (if dependencies changed)
// Before component unmounts
// Useful for:
// Clearing timeouts or intervals
// Removing event listeners
// Canceling subscriptions

// 4. Example – Logging Count

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count is:", count); // Side effect

    return () => {
      console.log("Cleaning up!"); // Cleanup function
    };
  }, [count]); // Runs whenever count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

// Behavior:
// Logs count on mount
// Logs count every time count changes
// Cleanup runs before re-running effect and before unmount

// 5. Understanding the Lifecycle
// Functional equivalent of class component lifecycle:
// Mount: Runs effect initially → componentDidMount
// Update (dependencies change): Cleanup + re-run effect → componentDidUpdate
// Unmount: Cleanup runs → componentWillUnmount

// 6. Practical Tips
// Always include dependencies in the array if your effect relies on them.
// Use cleanup functions to prevent memory leaks or unwanted behavior.
// useEffect is crucial for:
// Fetching data
// Subscribing/unsubscribing events
// Timers, intervals, animations
// Combined with useState, it's fundamental for most React apps.
