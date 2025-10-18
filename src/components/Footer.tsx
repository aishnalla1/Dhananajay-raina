import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/dhanan.raina",
      color: "text-white"
    },
  ];

  return (
    <footer className="relative py-20 mt-20 overflow-hidden bg-black">
  {/* Musical background pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="text-9xl font-black text-primary absolute top-10 left-10 rotate-12">♪</div>
    <div className="text-9xl font-black text-secondary absolute top-20 right-20 -rotate-12">♫</div>
    <div className="text-9xl font-black text-accent absolute bottom-20 left-1/4 rotate-45">♬</div>
    <div className="text-9xl font-black text-primary absolute bottom-10 right-1/3 -rotate-45">♩</div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    {/* Main Footer Content */}
    <div className="text-center mb-16">
      <h2 className="text-6xl lg:text-8xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
        DHANANJAY
      </h2>
      <h3 className="text-6xl lg:text-8xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
        RAINA
      </h3>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-playfair">
        Composer • Performer
      </p>
      
      {/* Social Links */}
<div className="flex justify-center gap-4 mb-12">
  {socialLinks.map((social) => (
    <Button
      key={social.name}
      variant="outline"
      size="lg"
      className="btn-outline-music group p-4 hover:bg-transparent hover:text-inherit font-playfair"
      asChild
    >
      <a href={social.url} target="_blank" rel="noopener noreferrer">
        <social.icon className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
        <span className="ml-2">{social.name}</span>
      </a>
    </Button>
  ))}
</div>

    </div>

    {/* Footer Bottom */}
    <div className="border-t border-border pt-8">
      
        
        <div className="flex justify-end gap-6 text-sm font-playfair text-right">
  <a href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
    Privacy Policy
  </a>
  <a href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
    Terms of Service
  </a>
</div>


    </div>
  </div>
</footer>

  );
};

export default Footer;
