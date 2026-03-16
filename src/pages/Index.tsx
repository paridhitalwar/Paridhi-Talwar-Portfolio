import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import CursorFollower from "@/components/CursorFollower";
import EasterEggGame from "@/components/EasterEggGame";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Paridhi Talwar | Product Manager & AI Engineer</title>
        <meta
          name="description"
          content="Product Manager and AI Engineer with expertise in building AI-powered products. MS in Computer Science from Boston University. Open to Product Management opportunities."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background noise">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
        </main>
        <Footer />
        <ChatBot />
        <CursorFollower />
        <ParticlePlayground />
      </div>
    </>
  );
};

export default Index;
