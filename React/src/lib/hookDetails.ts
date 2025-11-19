import type { HookInfo } from "../types/hookdeatils";

export const hookDetails: Record<string, HookInfo> = {
  usestate: {
    title: "useState",
    sections: [
      {
        title: "What is State?",
        content:
          "State is the component’s memory. It helps a component remember things between renders, like the current image, the text you typed, or items in a shopping cart.",
        example:
          "Typing in an input → state remembers the text. Clicking 'Next' → state remembers the new image number.",
      },

      {
        title: "Why normal variables don't work",
        content:
          "Normal variables reset every time the component renders. It's like writing on a whiteboard that gets erased every time React updates the UI. Variables also do NOT trigger a re-render, so the screen won't update.",
      },

      {
        title: "What do we need instead?",
        list: [
          "1) A value that STAYS between renders.",
          "2) A way to tell React: 'Hey, update the screen!'",
          "useState gives both of these.",
        ],
      },
      {
        title: "What is Hooks ?",
        content:
          "Hooks are special functions that can only be used inside functional components. We use Hooks to remember data (state), update data, or perform side effects like running code after a render (for example, using useEffect). Hooks must always be called at the top level of a component, never inside loops, conditions, or nested functions.",
      },

      {
        title: "What is useState?",
        content:
          "useState is a Hook that lets a component remember something. It gives you a value and a function to change that value.",
        code: `const [value, setValue] = useState(initialValue);`,
        list: [
          "value → the current state",
          "setValue → updates the state and re-renders the component",
          "initialValue → starting value (e.g., 0, '', false)",
        ],
      },
      {
        title: "useState use from array destructuring sayntax",
        content:
          "Arrays allow us to gather data items into an ordered list. Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient.",
        code: `// we have an array with a name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith`,
      },

      {
        title: "Fixing the 'Next' button example",
        content:
          "A normal variable (let index = 0) doesn't work because it resets. Replacing it with state makes the UI update correctly.",
        code: `const [index, setIndex] = useState(0)
function handleClick() {
  setIndex(index + 1);
}`,
      },

      {
        title: "How useState works (simple model)",
        list: [
          "On first render → React uses your initial value.",
          "When you call setState → React remembers the new value.",
          "React re-renders → useState returns the latest value.",
        ],
        example:
          "First render: [0, setIndex]. Click → setIndex(1). Next render: [1, setIndex].",
      },

      {
        title: "Why hooks must be at the top",
        content:
          "React uses the ORDER of hook calls to match state values. If you put hooks inside if, loops, or nested functions, the order changes and React breaks.",
        list: [
          "Always call hooks at the top of the component.",
          "Never call hooks inside conditions, loops, or nested functions.",
        ],
      },

      {
        title: "Multiple state variables",
        content:
          "A component can have many separate pieces of state. Use multiple useState calls when the states are unrelated.",
        code: `const [index, setIndex] = useState(0);
const [showMore, setShowMore] = useState(false);`,
        list: [
          "Good: index (number) + showMore (boolean)",
          "If many fields change together → store them in one object instead",
        ],
      },

      {
        title: "How React stores state internally",
        content:
          "React keeps an internal array of state values for each component using a system called Fiber. Hooks rely on calling order, not names.",
        list: [
          "Fiber = internal memory for one component instance",
          "React stores state in the order hooks appear",
          "useState returns the next item from this list",
        ],
      },

      {
        title: "State is private",
        content:
          "Each component instance has its own state. If you render the same component twice, they do NOT share state.",
        example:
          "<Gallery /> and another <Gallery /> have completely separate memories.",
      },

      {
        title: "Sharing state between components",
        content:
          "If two components need the same state, you lift the state up to their closest parent. The parent holds the state and passes it down as props.",
      },

      {
        title: "Recap",
        list: [
          "State = component memory.",
          "useState creates a state variable and a setter.",
          "State persists between renders.",
          "Updating state re-renders the component.",
          "Hooks must be used at the top level.",
          "You can have many state variables.",
          "State is private to each component instance.",
        ],
      },
    ],

    example: `
          () => {
            const [count, setCount] = useState(0);

            return (
              <div style={{ textAlign: "center" }}>
                <h2>Count: {count}</h2>
                <button
                  onClick={() => setCount(count + 1)}
                  style={{ marginRight: "8px", padding: "6px 12px" }}
                >
                  Increment
                </button>
                <button
                  onClick={() => setCount(count - 1)}
                  style={{ padding: "6px 12px" }}
                >
                  Decrement
                </button>
              </div>
            );
          }
  `,
  },
};
