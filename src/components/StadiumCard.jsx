import { Link } from "react-router-dom";

function StadiumCard({ stadium }) {
  return (
    <Link
      to={`/${stadium.slug}`}
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
    >
      <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>

      <h3 className="text-xl font-bold">
        {stadium.name}
      </h3>

      <p className="text-gray-500">
        {stadium.city}
      </p>

      <p className="mt-3 text-sm text-gray-400">
        0 fotos disponibles
      </p>
    </Link>
  );
}

export default StadiumCard;