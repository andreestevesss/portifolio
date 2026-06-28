import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <footer style={{ background: "#222", color: "#aaa", textAlign: "center", padding: "1.25rem", fontSize: "12px" }}>
        © 2026 Andre Esteves · Oakland, CA · Open to IT & IAM roles
      </footer>
    </>
  );
}
