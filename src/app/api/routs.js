export default async function GetUserInfo({ ip }) {
  try {
    const data = await fetch(`https://ipapi.co/${ip}/json`);
    const response = await data.json();
    console.log(response);
  } catch (err) {
    console.log("Error:", err.message);
  }
}
