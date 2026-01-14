import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Paridhi Talwar</title>
        <meta
          name="description"
          content="Get in touch with Paridhi Talwar for Product Management opportunities."
        />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-20">
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </>
  );
};

export default ContactPage;
