import { useState } from "react";
import { stadiums } from "../data/stadiums";
import { sections } from "../data/sections";
import { teams } from "../data/teams";

function Upload() {
  const [selectedStadium, setSelectedStadium] =
    useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6">
          Agregar Foto
        </h1>

        <div className="space-y-4">
          {/* Stadium */}
          <select
            value={selectedStadium}
            onChange={(e) =>
              setSelectedStadium(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
          >
            <option value="">
              Selecciona un estadio
            </option>

            {stadiums.map((stadium) => (
              <option
                key={stadium.slug}
                value={stadium.slug}
              >
                {stadium.name}
              </option>
            ))}
          </select>

          {/* Section */}
          <select
            className="w-full p-3 border rounded-lg"
          >
            <option>
              Selecciona una sección
            </option>

            {(sections[selectedStadium] || []).map(
              (section) => (
                <option
                  key={section}
                  value={section}
                >
                  {section}
                </option>
              )
            )}
          </select>

          {/* Row */}
          <input
            type="text"
            placeholder="Fila"
            className="w-full p-3 border rounded-lg"
          />

          {/* Seat */}
          <input
            type="text"
            placeholder="Asiento"
            className="w-full p-3 border rounded-lg"
          />

          {/* Home Team */}
          <select
            className="w-full p-3 border rounded-lg"
          >
            <option>
              Equipo Local
            </option>

            {teams.map((team) => (
              <option
                key={team}
                value={team}
              >
                {team}
              </option>
            ))}
          </select>

          {/* Away Team */}
          <select
            className="w-full p-3 border rounded-lg"
          >
            <option>
              Equipo Visitante
            </option>

            {teams.map((team) => (
              <option
                key={team}
                value={team}
              >
                {team}
              </option>
            ))}
          </select>

          {/* Seat Details */}
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-3">
              Detalles del asiento
            </h3>

            <div className="space-y-2">
              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Puede estar en sombra
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Vista obstruida
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Espacio extra para piernas
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Cerca del túnel local
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Cerca del túnel visitante
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                En pasillo
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Bajo techo
              </label>

              <label className="block">
                <input
                  type="checkbox"
                  className="mr-2"
                />
                Asiento Club
              </label>
            </div>
          </div>

          {/* Notes */}
          <textarea
            placeholder="Notas"
            className="w-full p-3 border rounded-lg"
            rows="4"
          />

          {/* Photo */}
          <input
            type="file"
            className="w-full"
          />

          {/* Submit */}
          <button
            className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700"
          >
            Publicar Foto
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;