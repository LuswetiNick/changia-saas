import Link from "next/link";
import { Button } from "./ui/button";

const AuthButtons = ({
  width,
  direction,
}: {
  width?: string;
  direction?: string;
}) => {
  return (
    <div className={`flex flex-${direction} gap-4`}>
      <Button variant="outline" asChild className={`${width}`}>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild className={`${width}`}>
        <Link href="/signup">Sign Up</Link>
      </Button>
    </div>
  );
};
export default AuthButtons;
