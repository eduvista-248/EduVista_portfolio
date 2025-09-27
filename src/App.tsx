import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Team } from "./components/Team";
import { BookDemo } from "./components/BookDemo";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Features />
        <WhyChooseUs />
        <Team />
        <BookDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}