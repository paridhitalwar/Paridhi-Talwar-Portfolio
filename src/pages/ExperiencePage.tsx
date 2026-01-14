import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import CursorFollower from "@/components/CursorFollower";

const ExperiencePage = () => {
  return (
    <>
      <Helmet>
        <title>Experience | Paridhi Talwar</title>
        <meta
          name="description"
          content="Professional experience and research publications of Paridhi Talwar - Product Manager and AI Engineer."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Experience />
          <Publications />
        </main>
        <Footer />
        <ChatBot />
        <CursorFollower />
      </div>
    </>
  );
};

export default ExperiencePage;
