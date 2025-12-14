export default async function GetUserInfo(ip) {
  // fetch data
  const response = await fetch(`https://ipapi.co/${ip}/json`);

  // convert the response into a json
  const data = await response.json();

  return data;
}
