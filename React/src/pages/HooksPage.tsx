// src/pages/HooksPage.jsx
import { Link } from "react-router-dom";
import { hooksData } from "../lib/hooks";
export default function HooksPage() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-4 text-primary-content">Hooks</h2>
      <p className="mb-4 text-secondary-content">
        This section will contain pages and interactive demos for:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        {hooksData.map((hook) => (
          <li key={hook.name}>
            <Link
              to={`/hooks/${hook.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-primary-content hover:underline"
            >
              <strong>{hook.name}</strong>
            </Link>
            — {hook.description}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <Link to="/" className="text-accent-content hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
