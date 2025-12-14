export default function Details({ data }) {
  const {
    ip,
    region,
    region_code,
    postal,
    country_name,
    utc_offset,
    currency,
    currency_name,
  } = data;

  // add ':' in time zone, but first check if the utc_offset property exist in data object
  const timeZone = data?.utc_offset
    ? "UTC" + utc_offset.slice(0, 3) + ":" + utc_offset.slice(3)
    : "---";

  const yourIp = data?.region ? ip : "---";

  const location = data?.region
    ? `${region}, ${region_code} ${postal}, ${country_name}`
    : "---";
  const yourCurrency = data?.currency
    ? `${currency}, (${currency_name})`
    : "---";
  return (
    <div className="relative z-10 mx-4 mt-5 rounded-xl bg-white px-6 py-6 text-center shadow-md">
      <div className="grid h-fit grid-cols-1 md:grid-cols-4 md:divide-x md:text-left">
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">
            IP ADDRESS
          </span>
          <h3 className="text-2xl font-semibold">{yourIp}</h3>
        </div>
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">LOCATION</span>
          <h3 className="text-2xl font-semibold">{location}</h3>
        </div>
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">TIMEZONE</span>
          <h3 className="text-2xl font-semibold">{timeZone}</h3>
        </div>
        <div className="px-4">
          <span className="text-xs font-semibold text-gray-500">Currency</span>
          <h3 className="text-2xl font-semibold">{yourCurrency}</h3>
        </div>
      </div>
    </div>
  );
}
