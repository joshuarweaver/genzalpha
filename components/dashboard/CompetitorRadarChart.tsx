type Competitor = {
  name: string;
  axes: { [axis: string]: number };
};

type RadarChartProps = {
  competitors: Competitor[];
  axes: string[];
};

// This is a mocked chart with placeholder SVG
export default function CompetitorRadarChart({
  competitors,
  axes,
}: RadarChartProps) {
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">Competitor Radar</h3>
      <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <svg viewBox="0 0 200 200" width={220} height={220} className="mx-auto">
            <circle cx="100" cy="100" r="90" fill="#eff6ff" />
            <polygon points="100,30 170,100 100,170 30,100" fill="#93c5fd88" />
            {/* Just a placeholder, not actual radar logic */}
            <text x="100" y="20" textAnchor="middle" className="fill-blue-700 font-bold" fontSize={12}>{axes[0]}</text>
            <text x="185" y="105" textAnchor="start" className="fill-blue-700 font-bold" fontSize={12}>{axes[1]}</text>
            <text x="100" y="190" textAnchor="middle" className="fill-blue-700 font-bold" fontSize={12}>{axes[2]}</text>
            <text x="12" y="105" textAnchor="end" className="fill-blue-700 font-bold" fontSize={12}>{axes[3]}</text>
          </svg>
        </div>
        <div className="flex-1 space-y-2">
          {competitors.map((c, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className={`h-3 w-3 rounded-full ${i === 0 ? "bg-blue-600" : "bg-gray-400"}`}></span>
              <span className="font-medium text-gray-700">{c.name}</span>
            </div>
          ))}
          <div className="text-xs text-gray-400 mt-2">*Mocked chart — for demo only</div>
        </div>
      </div>
    </div>
  );
}