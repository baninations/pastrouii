import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-between space-x-6 px-16 h-16 border-b items-center">
      <Link href="/">Logo</Link>
      <div>Profile</div>
    </nav>
  );
}
