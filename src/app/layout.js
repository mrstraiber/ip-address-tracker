import "./globals.css";

export const metadata = {
  title: "IP Address Tracker",
  description:
    "this app allows users to lookup the ip address and display their current position on map",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
