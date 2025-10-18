import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg from "/images/aboutus.jpg"; // main photo

const AboutSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background musical elements */}
      <div className="musical-icon top-20 left-10" style={{ animationDelay: "0s" }}>
        ♪
      </div>
      <div className="musical-icon bottom-20 right-10" style={{ animationDelay: "2s" }}>
        ♫
      </div>

      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            ABOUT
          </h2>
          <p className="text-2xl text-white font-playfair max-w-3xl mx-auto">
            Vocalist, performer, and storyteller carrying forward the rich legacy of Indian music
            while embracing contemporary sounds.
          </p>
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Photo */}
          <div
            className="animate-slide-up mt-8 lg:mt-16" // shifted photo a bit DOWN
            style={{ animationDelay: "0.2s" }}
          >
            <img
              src={aboutImg}
              alt="Dhananjay Raina performing"
              className="rounded-3xl shadow-xl w-full object-cover"
            />
          </div>

          {/* Right Side - About Text */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-3xl font-black mb-4 bg-primary bg-clip-text text-transparent">The Artist</h3>
            <div className="space-y-4 text-2xl text-left text-muted-foreground font-playfair">
              <p>
                Hailing from New Delhi, India, and rooted in the rich cultural heritage of the Kashmiri
                Pandit community, Dhananjay Raina is a vocalist whose journey blends rigorous classical
                training with modern musical expression.
              </p>
              <p>
                His performances reflect years of dedication to Hindustani classical music under the
                late Pt. Satish Prakash Qamar, while also exploring contemporary genres on international
                stages.
              </p>
              <p>
                Whether at intimate gatherings or large concert venues, Dhananjay’s voice carries a
                timeless essence that resonates deeply with audiences worldwide.
              </p>
            </div>

            <div className="mt-8 font-playfair">
              <Button asChild className="btn-music group">
                <Link to="/about">
                  Learn More About His Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Extra Photo Section (smaller) */}
        <div
          className="mt-16 flex justify-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          {/*<Card className="bg-gradient-card border-border/50 glow-card">
            <CardContent className="p-4 flex justify-center">
             
            </CardContent>
          </Card>*/}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
