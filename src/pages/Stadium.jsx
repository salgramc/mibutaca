import { useParams, Link } from "react-router-dom";

function Stadium() {
  const { stadiumSlug } = useParams();

  const sections = [
    "101",
    "102",
    "103",
    "104",
    "105",
    "201",
    "202",
    "203",
  ];

  const stadiumName = stadiumSlug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Image */}
      <div className="h-64 bg-gray-300"></div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          to="/"
          className="text-blue-600 hover:underline"
        >
          ← Volver
        </Link>

        <h1 className="text-4xl font-bold mt-4">
          {stadiumName}
        </h1>

        <p className="text-gray-500 mt-2">
          Explora fotos reales por sección.
        </p>

        {/* Search + Upload */}
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <input
            type="text"
            placeholder="Buscar sección..."
            className="flex-1 p-4 rounded-xl border bg-white"
          />

          <button className="bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700">
            Agregar Foto
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-6 mt-8 text-gray-600">
          <div>
            <span className="font-bold text-black">
              0
            </span>{" "}
            fotos
          </div>

          <div>
            <span className="font-bold text-black">
              {sections.length}
            </span>{" "}
            secciones
          </div>
        </div>

        {/* Sections */}
        <h2 className="text-2xl font-bold mt-10 mb-6">
          Secciones
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((section) => (
            <Link
              key={section}
              to={`/${stadiumSlug}/${section}`}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold">
                Sección {section}
              </h3>

              <p className="text-gray-500 mt-2">
                0 fotos disponibles
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stadium;