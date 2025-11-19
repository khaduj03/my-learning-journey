// src/pages/StateStructure.tsx

import React from "react";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";

type Principle = {
  title: string;
  description: React.ReactNode;
  example?: React.ReactNode;
  code?:string
};


const principles: Principle[] = [
  {
    title: "Group Related State",
    description:
      "If two or more state variables always change together, merge them into a single state variable to avoid forgetting to sync them.",
    example: (
      <>
        <p>// Bad:</p>
        <pre className="bg-black p-2 rounded">{`const [x, setX] = useState(0);
const [y, setY] = useState(0);`}</pre>
        <p>// Good:</p>
        <pre className="bg-black p-2 rounded">{`const [position, setPosition] = useState({ x: 0, y: 0 });`}</pre>
      </>
    ),
    code: `function MovingDot() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  return (
    <div
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "200px",
        border: "1px solid black",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: "translate(" + position.x + "px, " + position.y + "px)",
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
        }}
      />
    </div>
  );
}

render(<MovingDot />);
`,
  },
  {
    title: "Avoid Contradictions in State",
    description:
      "State should not have impossible or conflicting values. For example, don’t use multiple booleans when one variable can represent all valid states.",
    example: (
      <>
        <p>// Bad:</p>
        <pre className="bg-black p-2 rounded">{`const [isSending, setIsSending] = useState(false);
const [isSent, setIsSent] = useState(false);`}</pre>
        <p>// Good:</p>
        <pre className="bg-black p-2 rounded">{`const [status, setStatus] = useState<'typing' | 'sending' | 'sent'>('typing');`}</pre>
      </>
    ),
  },
  {
    title: "Avoid Redundant State",
    description:
      "Do not store data that can be calculated from existing state or props.",
    example: (
      <>
        <p>// Bad:</p>
        <pre className="bg-black p-2 rounded">{`const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [fullName, setFullName] = useState('');`}</pre>
        <p>// Good:</p>
        <pre className="bg-black p-2 rounded">{`const fullName = firstName + ' ' + lastName;`}</pre>
      </>
    ),
  },
  {
    title: "Avoid Duplication in State",
    description:
      "Don’t store the same data in multiple state variables. Keep essential state and derive the rest during render.",
    example: (
      <>
        <p>// Bad:</p>
        <pre className="bg-black p-2 rounded">{`const [items, setItems] = useState(initialItems);
const [selectedItem, setSelectedItem] = useState(items[0]);`}</pre>
        <p>// Good:</p>
        <pre className="bg-black p-2 rounded">{`const [items, setItems] = useState(initialItems);
const [selectedId, setSelectedId] = useState(0);
const selectedItem = items.find(item => item.id === selectedId);`}</pre>
      </>
    ),
  },
  {
    title: "Avoid Deeply Nested State",
    description:
      "Deeply nested state is hard to update. Flatten your state for easier updates and less duplication.",
    example: (
      <>
        <p>// Bad: Nested objects</p>
        <pre className="bg-black p-2 rounded">{`const [plan, setPlan] = useState({
  id: 0,
  childPlaces: [
    { id: 1, childPlaces: [ ... ] }
  ]
});`}</pre>
        <p>// Good: Flattened state</p>
        <pre className="bg-black p-2 rounded">{`const [plan, setPlan] = useState({
  0: { id: 0, childIds: [1,2,3] },
  1: { id: 1, childIds: [] }
});`}</pre>
      </>
    ),
  },
];

const StateStructurePage: React.FC = () => {
  const scope = { React }; 

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">
        Choosing the State Structure
      </h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">
          Principles for structuring state
        </h2>
        <div className="mt-6 p-4 border-l-4 border-primary bg-primary/10 rounded mb-6">
          <p>
            When you write a component that holds some state, you’ll have to
            make choices about how many state variables to use and what the
            shape of their data should be.
          </p>
        </div>

        {principles.map((p, index) => (
          <div
            key={index}
            className="mb-6 p-4 border rounded-lg shadow-md bg-primary/10"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

            <p className="mb-2">{p.description}</p>

            {p.example && (
              <pre className="bg-primary/20 p-2 rounded whitespace-pre-wrap">
                {p.example}
              </pre>
            )}

            {/* React Live Section */}
            {p.code && (
              <LiveProvider code={p.code} scope={scope} noInline={true}>
                <div className="mt-3">
                  <LiveEditor className="bg-black text-white p-3 rounded" />
                  <LiveError className="text-red-500 mt-2" />
                  <div className="border rounded p-2 mt-2">
                    <LivePreview />
                  </div>
                </div>
              </LiveProvider>
            )}
          </div>
        ))}
        <div className="mt-6 p-4 border-l-4 border-primary bg-primary/10 rounded">
          <strong>Tip:</strong> Always try to make your state as simple as
          possible, remove duplication and redundant data, similar to how
          databases are normalized.
        </div>
      </section>
    </div>
  );
};

export default StateStructurePage;
