import { stadiums } from "../data/stadiums";
import StadiumCard from "../components/StadiumCard";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">
          MiButaca
        </h1>

        <p className="text-gray-600 mb-8 text-lg">
          Ve la vista antes de comprar.
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          Estadios Liga MX
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stadiums.map((stadium) => (
            <StadiumCard
              key={stadium.id}
              stadium={stadium}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;