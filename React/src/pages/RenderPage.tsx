import React from "react";

const renderSteps = [
  {
    title: "Trigger",
    description:
      "Something happens → initial load or state/prop change. React receives a render request.",
  },
  {
    title: "Render",
    description:
      "Component functions run → React calculates what should be displayed. (Chefs prepare the dish).",
  },
  {
    title: "Commit",
    description:
      "React updates the real DOM with only the changes → screen updates. (Waiter serves the dish).",
  },
];

const tips = [
  "Rendering must be pure: same input → same output.",
  "Do not change variables outside the component or cause side effects.",
  "React Strict Mode calls render functions twice to help find mistakes.",
];

const RenderNotes: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">React Rendering & Commit</h1>

        <p className="mb-4">
          React updates the screen in three steps: trigger, render, and commit.
          Rendering must be pure so the output depends only on inputs, and React
          updates only what changed.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {renderSteps.map((step) => (
            <div key={step.title} className="card bg-base-100 shadow-lg p-4">
              <h2 className="card-title text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-base-content">{step.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-2">Tips</h2>
        <ul className="list-disc list-inside space-y-1">
          {tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RenderNotes;
