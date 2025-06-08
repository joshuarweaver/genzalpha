export default function BillingPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Billing</h1>
      <div className="bg-white p-6 rounded-lg shadow border max-w-lg">
        <p className="mb-2">Your current plan: <span className="font-semibold">Pro</span></p>
        <p className="mb-4">Next payment: <span className="font-semibold">$29.00</span> on <span className="font-semibold">2024-07-01</span></p>
        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Cancel Subscription</button>
      </div>
    </div>
  );
}