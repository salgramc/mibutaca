import { stadiums } from "../data/stadiums";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>MiButaca</h1>
      <p>Fotos reales desde tu asiento.</p>

      <h2>Estadios Liga MX</h2>

      {stadiums.map((stadium) => (
        <Link
          key={stadium.id}
          to={`/${stadium.slug}`}
          style={{
            display: "block",
            marginBottom: "20px",
            textDecoration: "none",
            color: "black",
          }}
        >
          <h3>{stadium.name}</h3>
          <p>{stadium.city}</p>
        </Link>
      ))}
    </div>
  );
}

export default Home;