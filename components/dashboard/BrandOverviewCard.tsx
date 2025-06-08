type BrandOverviewProps = {
  brandName: string;
  industry: string;
  productDescription: string;
  brandVoiceSample: string;
};

export default function BrandOverviewCard({
  brandName,
  industry,
  productDescription,
  brandVoiceSample,
}: BrandOverviewProps) {
  return (
    <div className="bg-white rounded-xl border shadow p-6 mb-4">
      <h2 className="text-lg font-bold text-blue-700 mb-2">Brand Overview</h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
        <div>
          <dt className="text-sm font-semibold text-gray-500">Brand Name</dt>
          <dd className="text-base font-medium text-gray-900">{brandName}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-gray-500">Industry</dt>
          <dd className="text-base font-medium text-gray-900">{industry}</dd>
        </div>
        <div className="md:col-span-2">
          <dt className="text-sm font-semibold text-gray-500">Product Description</dt>
          <dd className="text-base text-gray-900">{productDescription}</dd>
        </div>
        <div className="md:col-span-2">
          <dt className="text-sm font-semibold text-gray-500">Brand Voice Sample</dt>
          <dd className="text-base text-gray-900 italic">“{brandVoiceSample}”</dd>
        </div>
      </dl>
    </div>
  );
}