export default function PortfolioPage() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="uppercase">My Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 px-4">
        <div className="bg-white shadow-md rounded p-6 hover:-translate-y-1 transition-transform">
          <h3 className="text-2xl font-bold mb-2">Personal Website</h3>
          <p className="text-gray-700 mb-4">A brief description of the project.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </div>
    </main>
  );
}