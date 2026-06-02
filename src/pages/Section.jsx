import { useParams, Link } from "react-router-dom";

function Section() {
  const { stadiumSlug, sectionId } = useParams();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Link
        to={`/${stadiumSlug}`}
        className="text-blue-600"
      >
        ← Volver
      </Link>

      <h1 className="text-4xl font-bold mt-4">
        Sección {sectionId}
      </h1>

      <p className="text-gray-500">
        Fotos reales desde esta sección.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow p-4">
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>

          <h3 className="font-bold">
            Fila B · Asiento 7
          </h3>

          <p className="text-gray-500">
            Monterrey vs América
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section;