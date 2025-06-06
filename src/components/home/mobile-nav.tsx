import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib";
import { EllipsisVertical } from "lucide-react";
import Link from "next/link";
import AuthButtons from "../auth-buttons";
import Logo from "../logo";
const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <EllipsisVertical />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="px-4">
          <AuthButtons direction="col" />
          <ul
            className="flex flex-col gap-y-6 mt-4
          "
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200 ml-4"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
