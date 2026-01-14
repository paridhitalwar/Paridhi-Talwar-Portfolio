import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Paridhi Talwar</title>
        <meta
          name="description"
          content="Software, Data, and Product Management projects by Paridhi Talwar."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Projects />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default ProjectsPage;
