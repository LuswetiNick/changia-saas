import { navLinks } from "@/lib";
import Logo from "../logo";
import Link from "next/link";
import AuthButtons from "../auth-buttons";
import MobileNav from "./mobile-nav";

const Navbar = () => {
  return (
    <header className="sticky top-0 w-full bg-transparent backdrop-blur-md border-b z-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          {/* Navigation links */}
          <nav>
            <ul className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
              <span className="hidden w-px h-6 bg-gray-300 md:block"></span>
              <AuthButtons />
            </ul>
            <div className="md:hidden">
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
