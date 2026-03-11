const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-extrabold text-gradient">
            PT.
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <p className="text-muted-foreground/50 text-sm">
            Built with passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
