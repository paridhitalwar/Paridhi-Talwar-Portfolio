const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-display text-2xl font-extrabold tracking-tight">
            PT<span className="text-primary">.</span>
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Paridhi Talwar. All rights reserved.
          </p>

          <p className="text-muted-foreground text-sm">
            Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
