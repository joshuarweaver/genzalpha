export default function Page() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome to your SaaS Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-white p-6 rounded-lg shadow border">
          <h2 className="font-semibold text-lg mb-2">Usage Stats</h2>
          <p className="text-4xl font-bold text-blue-600 mb-2">1,204</p>
          <p className="text-gray-500">Active users this month</p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow border">
          <h2 className="font-semibold text-lg mb-2">Plan</h2>
          <p className="mb-2">Pro</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Manage Plan</button>
        </section>
      </div>
    </div>
  );
}