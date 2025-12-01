import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarBackground from "./components/ui/StarBackground";

function App() {
  return (
    <div className="min-h-screen text-zinc-100 selection:bg-white/20">
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
