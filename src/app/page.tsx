import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl text-center flex flex-col items-center gap-4">
        <Badge variant="outline" className="text-primary ">
          Coming soon
        </Badge>
        <h1 className="text-4xl">
          Welcome to <span className="text-primary">Changia</span>
        </h1>
        <p>
          {" "}
          Connect with donors, raise funds for your cause, and make a real
          impact with Changia&apos;s powerful and intuitive crowdfunding
          platform.
        </p>
      </div>
    </div>
  );
};
export default Home;
