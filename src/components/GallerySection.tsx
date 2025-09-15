import React from "react";
import Lottie from "lottie-react";
import heartAnimation from "@/assets/hearts.json"; // your animation JSON

const DhahanPerformanceSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Musical background pattern (same as footer) */}
      <div className="absolute inset-0 opacity-5">
        <div className="text-9xl font-black text-primary absolute top-10 left-10 rotate-12">♪</div>
        <div className="text-9xl font-black text-secondary absolute top-20 right-20 -rotate-12">♫</div>
        <div className="text-9xl font-black text-accent absolute bottom-20 left-1/4 rotate-45">♬</div>
        <div className="text-9xl font-black text-primary absolute bottom-10 right-1/3 -rotate-45">♩</div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex gap-8">
        {/* Left 60%: Grid containing Video + Lyrics */}
        <div className="w-3/5 bg-white/5 rounded-lg p-6 grid grid-cols-2 gap-6 shadow-lg">
          {/* Video */}
          <div className="flex items-center justify-center">
            <video
              src="/videos/sing.mp4"
              controls
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Lyrics */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl lg:text-3xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">Would Your Heart Love the Same? The Answer is Here.</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              She: If it wasn't me, would your heart still love the same?<br/>

I replied.<br/>

(I wish I could) grab the moon,<br/>

Oh, (I wish I could) hold this dark night.<br/>

(I wish I could) grab this cold moon.<br/>

I can't stop turning away from the enemies of day and night.<br/>

I have formed such a bond with you,<br/>

That I am no longer myself.<br/>

Oh, I am no longer myself.
            </p>
            </div>
          
        </div>

        {/* Right 40%: Header + Text + SVG + Performance Grid */}
        <div className="w-2/5 flex flex-col justify-center gap-6 text-white">
          <div className="space-y-4">
                <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            DHANANJAY PERFORMANCE
          </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                 Close your eyes and let the sound be your only guide. The world around you will fade, and you can simply focus on the rhythm and melody. Allow yourself to get completely lost, letting the music carry you somewhere else entirely
                </p>
              </div>

          {/* SVG Placeholder */}
          <div className="relative flex items-center justify-center">
            <Lottie
              animationData={heartAnimation}
              loop
              autoplay
              className="w-72 h-72 lg:w-96 lg:h-96"
            />
          </div>

 {/* Performance Details */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Performance Details</h3>
                <h2 className="text-gray-300 text-lg leading-relaxed">The event took place on August 30th at the Courtyard by Marriott Sacramento Midtown, located at 4422 Y Street, Sacramento, California, USA, 95817.</h2>
                  
                 
                
              </div>

        </div>
      </div>
    </section>
  );
};

export default DhahanPerformanceSection;
