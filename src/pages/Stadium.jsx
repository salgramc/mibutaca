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

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Volver</Link>

      <h1>{stadiumSlug.replaceAll("-", " ")}</h1>

      <input
        type="text"
        placeholder="Buscar sección..."
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        style={{
          padding: "12px 20px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Agregar Foto
      </button>

      <h2>Secciones</h2>

      {sections.map((section) => (
        <div
          key={section}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>Sección {section}</h3>
          <p>0 fotos disponibles</p>
        </div>
      ))}
    </div>
  );
}

export default Stadium;