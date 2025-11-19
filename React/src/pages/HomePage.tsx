import TopicCard from "../components/TopicCard";

export default function HomePage() {
const topics = [
  {
    title: "Hooks",
    to: "/hooks",
    description:
      "useState, useEffect, useMemo, useCallback, useRef, useReducer, and custom hooks — examples & notes",
  },
  {
    title: "Rendering & Commit in React",
    to: "/render",
    description: "How rendering and commit phases happen in React",
  },
  {
    title: "Choosing the State Structure",
    to: "/state-structure",
    description:
      "Best practices for structuring state in React: grouping, flattening, avoiding redundancy & duplication",
  },
];

  return (
    <main data-theme="black" className="bg-linear-to-br from-black py-10">
      <section className="container mx-auto px-6 pt-12">
        <div className="flex  items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-primary-content">
              Welcome to <span className="text-white">my React Journey</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-xl">
              This is My personal React study playground — notes, examples, and
              small projects to learn React deeply.
            </p>
          </div>
        </div>

        {/* All Topics Section */}
        <section id="topics" className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-primary-content">
            All Topics
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => (
              <TopicCard
                key={t.to}
                title={t.title}
                description={t.description}
                to={t.to}
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
