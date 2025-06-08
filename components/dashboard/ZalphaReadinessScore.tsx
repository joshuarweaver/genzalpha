type ReadinessScoreProps = {
  score: number;
};

export default function ZalphaReadinessScore({ score }: ReadinessScoreProps) {
  let color = "text-yellow-500";
  if (score >= 80) color = "text-green-600";
  else if (score <= 50) color = "text-red-500";

  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4 flex items-center space-x-4">
      <div className={`text-5xl font-extrabold ${color}`}>{score}</div>
      <div>
        <div className="font-semibold text-gray-700">Zalpha Readiness Score</div>
        <div className="text-sm text-gray-500">How well your brand vibes with Gen Zalpha (0–100)</div>
      </div>
    </div>
  );
}