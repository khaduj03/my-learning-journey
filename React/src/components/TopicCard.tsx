import { Link } from "react-router-dom";

type TopicCardProps = {
  title: string;
  description: string;
  to: string;
};

export default function TopicCard({
  title,
  description,
  to,
}: TopicCardProps) {
  return (
    <Link to={to} data-theme="black" className="block">
      <article className="rounded p-6 shadow-lg hover:shadow-2xl transition-shadow bg-secondary  truncate h-44">
        <h3 className="text-xl font-semibold mb-2 text-primary-content!">
          {title}
        </h3>
        <p className="text-sm text-primary-content truncate">{description}</p>
        <div className="mt-4">
          <button className="btn bg-white! text-primary!">Open</button>
        </div>
      </article>
    </Link>
  );
}
