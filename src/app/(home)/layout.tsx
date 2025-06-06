import Footer from "@/components/home/footer";
import Navbar from "@/components/home/navbar";

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="flex-1">{children}</section>
      <Footer />
    </main>
  );
};
export default HomeLayout;
