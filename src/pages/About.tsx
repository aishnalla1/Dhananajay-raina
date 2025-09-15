import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Award,
  GraduationCap,
  Music,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const milestones = [
    {
      title: "Classical Training",
      description:
        "Began formal training in Hindustani classical music under the guidance of the late Pt. Satish Prakash Qamar, carrying forward the rich legacy of the Delhi Gharana.",
      icon: Music,
    },
    {
      title: "Early Recognition",
      description:
        "Performed at the Siri Fort Auditorium, New Delhi, as a finalist in the Sangam Kala Group National Competition, competing in both the Sub-Junior and Junior categories.",
      icon: Calendar,
    },
    {
      title: "National Achievements",
      description:
        "Secured top positions in multiple national-level solo vocal competitions, representing school at an early age.",
      icon: Award,
    },
    {
      title: "Global Education",
      description:
        "Selected to study at one of the world’s leading contemporary music schools, further expanding classical roots into global musical styles.",
      icon: GraduationCap,
    },
    {
      title: "Artistic Collaborations",
      description:
        "Released an original single in collaboration with a fellow musician, and contributed creatively to the development of several other musical projects.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-16">
        {/* Hero */}
        <section className="py-20 relative overflow-hidden music-bg">
          <div className="musical-icon top-20 left-10" style={{ animationDelay: '0s' }}>♪</div>
          <div className="musical-icon bottom-20 right-10" style={{ animationDelay: '2s' }}>♫</div>
          
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-accent bg-clip-text text-transparent animate-slide-up">
              THE JOURNEY
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
             Hailing from New Delhi, India, blending Kashmiri Pandit heritage with global music education.
            </p>
          </div>
        </section>

        {/* Biography */}
        <section className="py-16">
          <div className="container mx-auto px-6 space-y-10">
            <Card>
              <CardContent className="p-6 lg:p-10 flex flex-col lg:flex-row gap-6 items-start">
                <BookOpen className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Early Education
                  </h2>
                  <p>
                    Dhananjay began his academic journey at Delhi Public School,
                    Faridabad, where he completed his primary and middle school
                    education. His early years were marked by a growing
                    curiosity for the arts and a foundational exposure to music.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-10 flex flex-col lg:flex-row gap-6 items-start">
                <GraduationCap className="h-12 w-12 text-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-secondary">
                    Higher Education in Music
                  </h2>
                  <p>
                    At Berklee College of Music, Dhananjay studied Music
                    Marketing. This gave him a global perspective on the music
                    industry, with both artistic and strategic insights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-accent bg-clip-text text-transparent">
              MILESTONES
            </h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {milestones.map((milestone, i) => {
                const Icon = milestone.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col lg:flex-row gap-6 items-start"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-accent rounded-full flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>

                    <Card className="flex-1">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Ready to Connect?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're interested in collaborations, bookings, or just
              want to chat about music, I'd love to hear from you.
            </p>
            <Link to="/contact">
              <Button className="btn-music group">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
