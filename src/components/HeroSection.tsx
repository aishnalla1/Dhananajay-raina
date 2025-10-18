import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import latestSingle from "/images/firstalbum.jpg";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${latestSingle})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Floating musical symbols */}
      <div className="musical-icon top-20 left-10" style={{ animationDelay: "0s" }}>
        ♪
      </div>
      <div className="musical-icon top-40 right-20" style={{ animationDelay: "2s" }}>
        ♫
      </div>
      <div className="musical-icon bottom-20 left-20" style={{ animationDelay: "4s" }}>
        ♬
      </div>
      <div className="musical-icon bottom-40 right-10" style={{ animationDelay: "6s" }}>
        ♩
      </div>

      {/* Content Overlay - bottom left */}
      <div className="container mx-auto px-6 relative z-10 flex items-end min-h-screen">
        <div className="text-left max-w-xl pb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            DHANANJAY
          </h1>
          <h2 className="text-4xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent ">
            RAINA
          </h2>

          <div className="mb-6">
            <h3 className="text-xl font-playfair text-white mb-2">LATEST SINGLE</h3>
            <h4
  className="text-3xl lg:text-5xl font-extrabold uppercase 
             text-primary tracking-tight 
             drop-shadow-[3px_3px_0px_#000] 
             lg:drop-shadow-[5px_5px_0px_#000]
             "
>
  I am on a ROLL
</h4>
            <p className="text-base lg:text-lg text-muted-foreground font-playfair">
              Now streaming on  all major platforms
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 font-playfair">
 <Button
  asChild
  className="bg-gradient-to-r from-[#4ADE80] to-[#16A34A] 
             text-black font-semibold rounded-full px-6 py-3 
             shadow-[0_0_10px_rgba(72,239,128,0.4)] 
             hover:shadow-[0_0_20px_rgba(72,239,128,0.6)] 
             transition-all duration-300 ease-in-out 
             flex items-center justify-center gap-2"
>
  <a
    href="https://distrokid.com/hyperfollow/alexanderpananddraina/im-on-a-roll-2"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Play className="h-5 w-5" />
    Listen Now!
  </a>
</Button>




</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
