type OpportunityGapsProps = {
  gaps: string[];
};

export default function OpportunityGapsList({ gaps }: OpportunityGapsProps) {
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">Opportunity Gaps</h3>
      <ul className="list-disc ml-6 space-y-1 text-gray-700">
        {gaps.length > 0 ? (
          gaps.map((gap, i) => <li key={i}>{gap}</li>)
        ) : (
          <li className="text-gray-400">No major gaps detected</li>
        )}
      </ul>
    </div>
  );
}