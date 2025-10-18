import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import Lottie from "lottie-react";
import concertAnimation from "@/assets/concert.json"; // your animation JSON
import concertBg from "/images/upcomingconcert.jpeg"; // your background image

const ConcertSection = () => {
  return (
    <section
      className="relative py-28 bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${concertBg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            LATEST CONCERT
          </h2>
          <p className="text-2xl text-white max-w-3xl mx-auto font-playfair">
            Experience an unforgettable night of live music, featuring hit songs and exclusive performances
          </p>
        </div>

        {/* Details + Animation Box */}
        <div className="max-w-6xl mx-auto bg-background/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 grid lg:grid-cols-2 gap-10 items-center animate-slide-up">
          {/* Left Side - Details */}
          <div className="space-y-8">
           <div className="flex items-center gap-5">
  <div className="p-4 bg-[#22C55E]/20 rounded-full">
    <Calendar className="h-8 w-8 text-[#22C55E]" />
  </div>
  <div>
    <p className="text-lg text-muted-foreground">Date</p>
    <p className="text-3xl font-extrabold">August 30, 2025</p>
  </div>
</div>


            <div className="flex items-center gap-5">
              <div className="p-4 bg-[#22C55E]/20 rounded-full">
                <Clock className="h-8 w-8 text-[#22C55E]" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground">Time</p>
                <p className="text-3xl font-extrabold">8:30pm PST</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="p-4 bg-[#22C55E]/20 rounded-full">
                <MapPin className="h-8 w-8 text-[#22C55E]" />
              </div>
              <div>
                <p className="text-lg text-muted-foreground">Venue</p>
                <p className="text-3xl font-extrabold">Courtyard by Marriott Sacramento Midtown</p>
                
              </div>
            </div>

            <div className="pt-4 font-playfair">
              <Button className="btn-music w-full lg:w-auto group text-lg px-8 py-6 rounded-xl">
                <Ticket className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
                Get Tickets Now
              </Button>
            </div>
          </div>

          {/* Right Side - Lottie Animation */}
          <div className="relative flex items-center justify-center">
            <Lottie
              animationData={concertAnimation}
              loop
              autoplay
              className="w-72 h-72 lg:w-96 lg:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConcertSection;
