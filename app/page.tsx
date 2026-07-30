import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Products from "@/app/components/Products";
import Hours from "@/app/components/Hours";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="content-container">
      <Hero />
      <About />
      <Products />
      <Hours />
      <Footer />
    </main>
  );
}
