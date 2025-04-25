export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <div className="spinner mb-4"></div>{" "}
      {/* Using the custom spinner class */}
      <p className="text-lg font-semibold text-[#ffd816] animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
}
