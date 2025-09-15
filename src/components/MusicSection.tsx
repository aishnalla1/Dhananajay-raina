import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Share2 } from "lucide-react";

const MusicSection = () => {
  const albums = [
    {
      id: 1,
      title: "Song A Frontlee",
      type: "Single",
      year: "2024",
      streams: "50K+",
      description: "Latest single featuring acoustic guitar and piano arrangements"
    },
    {
      id: 2,
      title: "Melodies of Tomorrow",
      type: "EP",
      year: "2023",
      streams: "120K+",
      description: "5-track EP showcasing versatile instrumental skills"
    },
    {
      id: 3,
      title: "Acoustic Sessions",
      type: "Album",
      year: "2023",
      streams: "80K+",
      description: "Live acoustic recordings from intimate performances"
    },
    {
      id: 4,
      title: "Digital Dreams",
      type: "Single",
      year: "2022",
      streams: "200K+",
      description: "Electronic fusion with traditional instruments"
    }
  ];

  const topTracks = [
    { name: "Song A Frontlee", duration: "3:45", plays: "50K" },
    { name: "Midnight Melody", duration: "4:12", plays: "120K" },
    { name: "Guitar Whispers", duration: "3:28", plays: "80K" },
    { name: "Piano Dreams", duration: "5:01", plays: "95K" },
    { name: "Digital Harmony", duration: "3:55", plays: "200K" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background musical elements */}
      <div className="musical-icon top-10 left-20" style={{ animationDelay: '1s' }}>♫</div>
      <div className="musical-icon bottom-10 right-20" style={{ animationDelay: '3s' }}>♩</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            MUSIC
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore the discography spanning multiple genres and instruments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Albums Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold mb-8 text-primary">Albums & EPs</h3>
            <div className="space-y-6">
              {albums.map((album, index) => (
                <Card 
                  key={album.id} 
                  className="bg-gradient-card border-border/50 hover:scale-105 transition-all duration-300 glow-card group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center">
                        <div className="text-2xl">🎵</div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-lg font-bold text-foreground">{album.title}</h4>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {album.type}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{album.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{album.year}</span>
                          <span>•</span>
                          <span>{album.streams} streams</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-primary/20">
                          <Play className="h-4 w-4 text-primary" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-secondary/20">
                          <Heart className="h-4 w-4 text-secondary" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2 hover:bg-accent/20">
                          <Share2 className="h-4 w-4 text-accent" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Top Tracks Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold mb-8 text-secondary">Top Tracks</h3>
            <Card className="bg-gradient-card border-border/50 glow-card">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {topTracks.map((track, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors group cursor-pointer"
                    >
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                        {index + 1}
                      </div>
                      
                      <div className="flex-1">
                        <h5 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {track.name}
                        </h5>
                        <p className="text-xs text-muted-foreground">{track.plays} plays</p>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {track.duration}
                      </div>

                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity p-2"
                      >
                        <Play className="h-4 w-4 text-primary" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Button className="btn-music w-full">
                    <Play className="mr-2 h-4 w-4" />
                    Listen on Spotify
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;