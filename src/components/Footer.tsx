import React from 'react';
import { Github, Linkedin, Package, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent tracking-tight">
            Mukarram Mahmoud
          </h3>
          <p className="text-muted-foreground text-sm">
            Building digital experiences with code and creativity.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/mukarrammahmoud" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/mukarram-mahmoud-95a82b280" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.npmjs.com/~mukarrammahmoud" className="text-muted-foreground hover:text-primary transition-colors">
            <Package className="w-5 h-5" />
          </a>
          <a href="mailto:mukarrammahmoud@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
