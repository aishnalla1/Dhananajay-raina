import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      title: "Live at Central Park",
      date: "July 2024",
      description: "Acoustic guitar performance for 5,000+ audience"
    },
    {
      id: 2,
      title: "Studio Recording Session",
      date: "June 2024",
      description: "Behind the scenes of 'Song A Frontlee'"
    },
    {
      id: 3,
      title: "Mumbai Music Festival",
      date: "March 2024",
      description: "Piano and vocal performance"
    },
    {
      id: 4,
      title: "University Concert Hall",
      date: "February 2024",
      description: "Multi-instrument showcase"
    },
    {
      id: 5,
      title: "Intimate Café Performance",
      date: "January 2024",
      description: "Acoustic evening with guitar and piano"
    },
    {
      id: 6,
      title: "Music Video Shoot",
      date: "December 2023",
      description: "Official video for latest single"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background musical elements */}
      <div className="musical-icon top-20 right-10" style={{ animationDelay: '2s' }}>♪</div>
      <div className="musical-icon bottom-20 left-10" style={{ animationDelay: '4s' }}>♬</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            GALLERY
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Moments from recent performances and behind-the-scenes glimpses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="bg-gradient-card border-border/50 hover:scale-105 transition-all duration-300 glow-card group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-glow rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-4">📸</div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{image.title}</h3>
                    <p className="text-sm text-primary font-semibold">{image.date}</p>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="outline" size="sm" className="btn-outline-music">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-muted-foreground">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="outline" className="btn-outline-music">
            View Full Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;