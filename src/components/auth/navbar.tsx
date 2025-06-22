import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
      <Link href="/" className="text-xl font-bold">
        Obsidian
      </Link>

      <ul className="hidden md:flex space-x-4 list-none items-center">
        <li>
          <Link href="/login" className="hover:text-gray-400">
            Login
          </Link>
        </li>
        <li>
          <Link href="/register" className="hover:text-gray-400">
            Register
          </Link>
        </li>
        <li>
          <Link href="/private/dashboard" className="hover:text-gray-400">
            Dasboard
          </Link>
        </li>

        <form action="">
          <Button type="submit" variant={"ghost"}>
            Logout
          </Button>
        </form>
      </ul>
    </nav>
  );
};

export default Navbar;
