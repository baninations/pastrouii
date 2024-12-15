import Link from "next/link";
import { GiVacuumCleaner } from "react-icons/gi";

export default function NavBar() {
  return (
    <nav className="flex justify-between space-x-6 px-16 h-16 border-b items-center">
      <Link href="/">
        <GiVacuumCleaner size={28} />
      </Link>
      <div>Profile</div>
    </nav>
  );
}
