import React from 'react'
import { useState } from 'react'
// What is State?
// Definition: State is any piece of information that can change over time in a React component.
// Key idea: Every time state changes, React re-renders the component with the updated data.

// Examples:
// Loading spinner: Show while fetching data (loading = true/false)
// Data from API: Initially empty, then updated after fetching (data = [] -> fetchedData)
// Error messages: Track if an error occurred during an API request

// Remember: State = dynamic data that updates your UI

// Introducing useState
// useState is the React hook used to create and manage state in functional components.

// Syntax:
// const [stateVariable, setStateVariable] = useState(initialValue);
// Explanation:
// stateVariable → stores the current value of the state
// setStateVariable → function to update the state
// initialValue → optional default value for state


export default function  Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}