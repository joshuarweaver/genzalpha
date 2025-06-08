import { useState } from "react";

export type Persona = {
  name: string;
  age: number;
  interests: string;
  platforms: string;
  rationale: string;
};

type PersonaCardProps = {
  persona: Persona;
  onChange: (persona: Persona) => void;
};

export default function PersonaCard({ persona, onChange }: PersonaCardProps) {
  const [editing, setEditing] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    onChange({ ...persona, [e.target.name]: e.target.value });
  }

  return (
    <div className="bg-white border rounded-xl shadow p-5 space-y-2 flex-1">
      <div className="flex items-center justify-between">
        <span className="font-bold text-blue-700 text-lg">{persona.name || "Persona"}</span>
        <button
          type="button"
          className="text-xs text-blue-400 underline"
          onClick={() => setEditing(e => !e)}
        >
          {editing ? "Done" : "Edit"}
        </button>
      </div>
      {editing ? (
        <div className="space-y-2">
          <input
            name="name"
            className="w-full border rounded px-2 py-1 text-base"
            value={persona.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="age"
            type="number"
            className="w-full border rounded px-2 py-1 text-base"
            value={persona.age}
            onChange={handleChange}
            min={13}
            max={27}
            placeholder="Age"
          />
          <input
            name="interests"
            className="w-full border rounded px-2 py-1 text-base"
            value={persona.interests}
            onChange={handleChange}
            placeholder="Interests"
          />
          <input
            name="platforms"
            className="w-full border rounded px-2 py-1 text-base"
            value={persona.platforms}
            onChange={handleChange}
            placeholder="Platform Usage"
          />
          <textarea
            name="rationale"
            className="w-full border rounded px-2 py-1 text-base"
            value={persona.rationale}
            onChange={handleChange}
            placeholder="AI-generated rationale"
            rows={2}
          />
        </div>
      ) : (
        <div className="space-y-1">
          <div>
            <span className="font-semibold">Age:</span> {persona.age}
          </div>
          <div>
            <span className="font-semibold">Interests:</span> {persona.interests}
          </div>
          <div>
            <span className="font-semibold">Platforms:</span> {persona.platforms}
          </div>
          <div className="text-gray-500 text-sm">
            <span className="font-semibold">Rationale:</span> {persona.rationale}
          </div>
        </div>
      )}
    </div>
  );
}