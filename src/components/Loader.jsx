export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">
      <div className="spinner mb-4"></div> {/* Custom spinner */}
      <p className="text-lg font-semibold text-[#ffd816] animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
