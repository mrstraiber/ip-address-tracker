export default function Details() {
  return (
    <div className="relative z-10 mx-4 mt-10 rounded-xl bg-white px-6 py-6 text-center shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-4 md:divide-x md:text-left">
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">
            IP ADDRESS
          </span>
          <h3 className="text-2xl font-semibold">192.212.174.101</h3>
        </div>
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">LOCATION</span>
          <h3 className="text-2xl font-semibold">Toronto, Canada 23015</h3>
        </div>
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">TIMEZONE</span>
          <h3 className="text-2xl font-semibold">UTC-05:00</h3>
        </div>
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">ISP</span>
          <h3 className="text-2xl font-semibold">Bell</h3>
        </div>
      </div>
    </div>
  );
}
