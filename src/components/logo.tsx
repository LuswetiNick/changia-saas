import { Coins } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-1.5">
      <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-muted-foreground">
        Changia
      </span>
      <Coins className="h-5 w-5" />
    </Link>
  );
};
export default Logo;
