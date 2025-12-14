import Link from "next/link";

export default function Header() {
  return (
    <header className="pt-8">
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-blue-50">
          <Link href="/">IP Address Tracker</Link>
        </h3>
      </div>
    </header>
  );
}
