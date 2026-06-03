import { useState } from "react";
import { stadiums } from "../data/stadiums";
import { sections } from "../data/sections";
import { teams } from "../data/teams";
import { supabase } from "../lib/supabase";

function Upload() {
  const [selectedStadium, setSelectedStadium] =
    useState("");

  const [selectedSection, setSelectedSection] =
    useState("");

  const [row, setRow] = useState("");
  const [seat, setSeat] = useState("");
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [notes, setNotes] = useState("");

  const [photo, setPhoto] = useState(null);

  const [uploading, setUploading] =
    useState(false);

  async function handleUpload() {
    if (!photo) {
      alert("Selecciona una foto");
      return;
    }

    if (!selectedStadium || !selectedSection) {
      alert("Selecciona estadio y sección");
      return;
    }

    setUploading(true);

    try {
      const fileExt =
        photo.name.split(".").pop();

      const fileName =
        `${Date.now()}.${fileExt}`;

      const { error: uploadError } =
        await supabase.storage
          .from("seat-photos")
          .upload(fileName, photo);

      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage
        .from("seat-photos")
        .getPublicUrl(fileName);

      const publicUrl = data.publicUrl;

      const { error: insertError } =
        await supabase
          .from("photos")
          .insert([
            {
              stadium_slug: selectedStadium,
              section: selectedSection,
              row: row,
              seat: seat,
              home_team: homeTeam,
              away_team: awayTeam,
              notes: notes,
              image_url: publicUrl,
            },
          ]);

      if (insertError) {
        throw insertError;
      }

      alert("Foto subida correctamente");

      setSelectedStadium("");
      setSelectedSection("");
      setRow("");
      setSeat("");
      setHomeTeam("");
      setAwayTeam("");
      setNotes("");
      setPhoto(null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }

    setUploading(false);
  }

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
            value={selectedSection}
            onChange={(e) =>
              setSelectedSection(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
          >
            <option value="">
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
            value={row}
            onChange={(e) =>
              setRow(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
          />

          {/* Seat */}
          <input
            type="text"
            placeholder="Asiento"
            value={seat}
            onChange={(e) =>
              setSeat(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
          />

          {/* Home Team */}
          <select
            value={homeTeam}
            onChange={(e) =>
              setHomeTeam(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
          >
            <option value="">
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
            value={awayTeam}
            onChange={(e) =>
              setAwayTeam(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
          >
            <option value="">
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

          {/* Notes */}
          <textarea
            placeholder="Notas"
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            className="w-full p-3 border rounded-lg"
            rows="4"
          />

          {/* Photo */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setPhoto(e.target.files[0])
            }
            className="w-full"
          />

          {/* Submit */}
          <button
            onClick={handleUpload}
            disabled={uploading}
            className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
          >
            {uploading
              ? "Subiendo..."
              : "Publicar Foto"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Upload;