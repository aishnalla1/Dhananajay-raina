import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Rewind, FastForward } from "lucide-react";
import { useRef, useState } from "react";

const MusicSection = () => {
  const topTracks = [
  { name: "Raag Yaman", src: "https://media.githubusercontent.com/media/aishnalla1/Dhananajay-raina/refs/heads/main/public/audios/audio1.mp3", duration: "15:31" },
  { name: "Hua main Cover- Animal (Movie)", src: "https://media.githubusercontent.com/media/aishnalla1/Dhananajay-raina/refs/heads/main/public/audios/audio2.mp3", duration: "3:51" },
  { name: "Laal Ishq - Ramleela", src: "https://media.githubusercontent.com/media/aishnalla1/Dhananajay-raina/refs/heads/main/public/audios/audio3.mp3", duration: "6:17" },
  { name: "Lab Par Aaye- Bandish Bandits", src: "https://media.githubusercontent.com/media/aishnalla1/Dhananajay-raina/refs/heads/main/public/audios/audio4.mp3", duration: "3:02" },
  { name: "Yeli Janaan Ralem Cover", src: "https://media.githubusercontent.com/media/aishnalla1/Dhananajay-raina/refs/heads/main/public/audios/audio5.mp3", duration: "3:26" },
];


  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🎵 handle song selection / toggle play
  const handlePlay = (src: string) => {
    if (!audioRef.current) return;

    if (audioRef.current.src.includes(src)) {
      // same song → toggle play/pause
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    } else {
      // new song selected
      audioRef.current.src = src;
      audioRef.current.play();
      setCurrentTrack(src);
      setIsPlaying(true);
    }
  };

  const handleForward = () => {
    if (audioRef.current) audioRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    if (audioRef.current) audioRef.current.currentTime -= 10;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Floating background icons */}
      <div className="musical-icon top-10 left-20" style={{ animationDelay: "1s" }}>♫</div>
      <div className="musical-icon bottom-10 right-20" style={{ animationDelay: "3s" }}>♩</div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            MUSIC
          </h2>
          <p className="text-2xl text-white max-w-3xl mx-auto font-playfair">
            Explore the discography spanning multiple genres and instruments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Album Image */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-bold mb-8 text-primary">Album</h3>
            <div className="flex items-center justify-center">
              <img
                src="/images/firstalbum.jpg"
                alt="Album Cover"
                className="rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>

          {/* Top Tracks */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {/* Hidden audio element */}
            <audio ref={audioRef} controls hidden />

            <h3 className="text-3xl font-bold mb-8 text-primary">Top Tracks</h3>
            <Card className="bg-gradient-card border-border/50 glow-card">
              <CardContent className="p-6">
                <div className="space-y-4 font-playfair">
                 {topTracks.map((track, index) => (
  <div
    key={index}
    onClick={() => handlePlay(track.src)}
    className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
      currentTrack === track.src
        ? "bg-yellow-500/10 text-primary"
        : "hover:bg-muted/30"
    }`}
  >
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-sm font-bold text-primary">
        {index + 1}
      </div>
      <div>
        <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {track.name}
        </h5>
        <p className="text-xs text-muted-foreground">
          {track.duration ?? "0:00"}
        </p>
      </div>
    </div>

    <Button
      size="sm"
      variant="ghost"
      className="p-2 hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
      onClick={(e) => {
        e.stopPropagation();
        handlePlay(track.src);
      }}
    >
      {currentTrack === track.src && isPlaying ? (
        <Pause className="h-4 w-4 text-primary" />
      ) : (
        <Play className="h-4 w-4 text-primary" />
      )}
    </Button>
  </div>
))}

                </div>

                {/* Mini player - visible only when a song is selected */}
{currentTrack && (
  <div className="mt-6 pt-6 border-t border-border flex flex-col items-center">
    <h4 className="font-semibold mb-4 text-lg text-primary">
      {topTracks.find((t) => t.src === currentTrack)?.name}
    </h4>
    <div className="flex gap-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={handleBackward}
        className="hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
      >
        <Rewind className="h-5 w-5 text-primary" />
      </Button>

      <Button
        onClick={handlePlayPause}
        size="icon"
        className="bg-primary text-white rounded-full hover:bg-primary focus-visible:ring-0 focus-visible:outline-none"
      >
        {isPlaying ? (
          <Pause className="h-5 w-5" />
        ) : (
          <Play className="h-5 w-5" />
        )}
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={handleForward}
        className="hover:bg-transparent focus-visible:ring-0 focus-visible:outline-none"
      >
        <FastForward className="h-5 w-5 text-primary" />
      </Button>
    </div>
  </div>
)}

              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;
