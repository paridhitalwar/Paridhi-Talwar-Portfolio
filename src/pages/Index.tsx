import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

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
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Publications />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default Index;
