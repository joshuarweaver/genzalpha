type PathProps = {
  steps: string[];
};

export default function SuggestedBrandTransformationPath({ steps }: PathProps) {
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h3 className="text-base font-bold text-blue-700 mb-2">
        Suggested Brand Transformation Path
      </h3>
      <ol className="list-decimal ml-6 space-y-1 text-gray-700">
        {steps.length > 0 ? (
          steps.map((step, i) => <li key={i}>{step}</li>)
        ) : (
          <li className="text-gray-400">No transformation steps yet</li>
        )}
      </ol>
    </div>
  );
}