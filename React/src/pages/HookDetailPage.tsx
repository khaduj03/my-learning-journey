import { useParams, Link } from "react-router-dom";
import { hookDetails } from "../lib/hookDetails";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import React from "react";

export default function HookDetailPage() {
  const { hookName } = useParams();

  if (!hookName) return <p>Invalid hook name.</p>;

  const hook = hookDetails[hookName];

  if (!hook) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6">
        <h2 className="text-3xl font-bold mb-3">Hook not found 😢</h2>
        <Link
          to="/hooks"
          className="text-primary-content transition-all"
        >
          ← Back to Hooks
        </Link>
      </div>
    );
  }

  const scope = { React, useState: React.useState, useEffect: React.useEffect };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-black to-gray-900 text-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-8 text-primary-content tracking-tight">
          {hook.title}
        </h2>

        {/* Render Sections */}
        <div className="space-y-4 mb-10">
          {hook.sections.map((section, index) => (
            <div key={index} className="bg-primary p-6 rounded  shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-secondary-content">
                {section.title}
              </h3>

              {/* content */}
              {section.content && (
                <p className="text-gray-200 leading-relaxed mb-4">
                  {section.content}
                </p>
              )}
              {/* content */}
              {section.example && (
                <p className="text-gray-200 leading-relaxed mb-4 italic rounded p-4 bg-black">
                 example: {section.example}
                </p>
              )}

              {/* list */}
              {section.list && (
                <ul className="list-disc ml-6 text-shadow-primary-content space-y-2 mb-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* code block */}
              {section.code && (
                <pre className="bg-gray-900 p-4 rounded-lg border border-gray-700 overflow-x-auto text-sm text-purple-300 shadow-inner">
                  {section.code}
                </pre>
              )}
            </div>
          ))}
        </div>

        {/* Live Example Box */}
        <div className="bg-gray-900 p-5 rounded-xl shadow-xl border border-gray-700">
          <LiveProvider code={hook.example} scope={scope} noInline={false}>
            <div className="mb-4 p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-inner">
              <LivePreview />
            </div>

            <LiveEditor className="font-mono text-sm bg-gray-800 p-4 rounded-lg border border-gray-700 text-green-300 shadow-inner" />

            <LiveError className="text-red-400 mt-3 font-semibold" />
          </LiveProvider>
        </div>

        <div className="mt-10">
          <Link
            to="/hooks"
            className="text-primary-content hover:underline transition-all"
          >
            ← Back to Hooks
          </Link>
        </div>
      </div>
    </div>
  );
}
