import React, { useMemo } from "react";
// What is useMemo?
// useMemo is a React Hook that helps you avoid unnecessary recalculations of expensive operations in your component.
// It memorizes (stores) the result of a function and reuses it until something in its dependency array changes.

import { useState } from "react";

// Why It’s Important
// If you don’t use useMemo when you should → your app can become slow because it keeps recalculating expensive values every render.
// If you use it unnecessarily or wrongly → it can cause bugs or even reduce performance.

// Example Problem

// A count state
// A list of 29 million items
// A selected item found with:

// const selectedItem = items.find(item => item.isSelected)

// Every time the count changes, React re-renders the component, and this find() runs again —
// which is very slow because it loops over 29 million items each time.

// Why It Happens
// React re-renders the entire component whenever a state changes (like count).
// During each render, all code inside the component runs again — even expensive calculations —
// unless you prevent that using tools like useMemo.

// Solution: useMemo
// We can fix it like this:
// const selectedItem = useMemo(() => {
//   return items.find(item => item.isSelected)
// }, [items])

// Explanation:

// React runs this function once.
// It stores the result (selectedItem).
// It only recalculates it when items changes.
// If count changes but items stays the same → React just reuses the previous value.

// Result:  No lag, no skipped numbers, smooth performance!

// Common Mistake
// If you forget to include all dependencies, it can cause wrong results.

// For example:

// const selectedItem = useMemo(() => {
//   return items.find(item => item.id === count)
// }, [items]) // Missing count

// Here, selectedItem won’t update when count changes,
// because React only watches items.

// Fix:
// const selectedItem = useMemo(() => {
//   return items.find(item => item.id === count)
// }, [items, count])
const initialItems = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_999,
  };
});
export default function CounterMemo() {
  const [count, setCount] = useState(0);
  const [item] = useState(initialItems);

  const selectedItem=useMemo(()=>{
   return item.find((item) => item.isSelected);
  },[item])
   const selected = useMemo(() => {
     return item.find((item) => item.id === count);
   }, [count, item]);

  return (
    <div>
    <p>count:{count}</p>
      <p>Is Selected: {selectedItem?.isSelected ? "true" : "false"}</p>
      <p>select: {selected?.id}</p>

      <div className="flex flex-col gap-5">
        <button
          className="bg-blue-400 px-4 py-2 "
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-blue-400 px-4 py-2 "
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

//  When to Use useMemo
// Use it when:
// You have expensive calculations (like .find, .filter, .map on big arrays).
// The calculation doesn’t need to run every render.

// Don’t use it when:
// The value is cheap to compute.
// It’s only used once and won’t slow down your app.
// Because useMemo itself also uses memory and comparison checks.

// Always analyze where your code is slow before adding useMemo.
// Include all dependencies it uses.
// Don’t overuse it — only when necessary.
// Practice using it in real apps to feel how it behaves.
