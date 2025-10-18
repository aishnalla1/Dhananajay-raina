import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Instagram } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can integrate backend/email service here
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background musical elements */}
      <div className="musical-icon top-10 right-20" style={{ animationDelay: "1s" }}>♪</div>
      <div className="musical-icon bottom-10 left-20" style={{ animationDelay: "3s" }}>♬</div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
            GET IN TOUCH
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-playfair">
            Let's connect! Whether it's for collaborations, bookings, or just to say hello
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="bg-gradient-card border-border/50 glow-card">
              <CardContent className="p-8">
                

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                  <div>
  <label className="text-lg font-bold text-primary mb-2 block">
    Name
  </label>
  <Input
    name="name"
    value={formData.name}
    onChange={handleInputChange}
    placeholder="Your name"
    className="bg-muted/50 border-border focus:border-primary font-playfair"
    required
  />
</div>


                    <div>
                      <label className="text-lg font-bold text-primary mb-2 block">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="bg-muted/50 border-border focus:border-primary font-playfair"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-lg font-bold text-primary mb-2 block">Subject</label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      className="bg-muted/50 border-border focus:border-primary font-playfair"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-lg font-bold text-primary mb-2 block">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me more..."
                      rows={5}
                      className="bg-muted/50 border-border focus:border-primary resize-none font-playfair"
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-music w-full group font-playfair">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="space-y-8">
              {/* Direct Email */}
       <Card className="bg-gradient-card border-border/50 glow-card">
  <CardContent className="p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-[#22C55E]/20 rounded-full">
        <Mail className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-primary">Email</h4>
        <p className="text-muted-foreground font-playfair">Dhananjaya.raina@gmail.com</p>
      </div>
    </div>
    <a href="mailto:Dhananjaya.raina@gmail.com">
      <Button
        variant="outline"
        className="btn-outline-music w-full hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit active:bg-transparent active:text-inherit"
      >
        <Mail className="mr-2 h-4 w-4 text-primary" />
        <span className="text-primary-500">
          Send Email Directly
        </span>
      </Button>
    </a>
  </CardContent>
</Card>

              {/* Instagram */}
              <Card className="bg-gradient-card border-border/50 glow-card">
  <CardContent className="p-6">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-[#22C55E]/20 rounded-full">
        <Instagram className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-primary">Instagram</h4>
        <p className="text-muted-foreground font-playfair">@dhanan.raina</p>
      </div>
    </div>
    <a
      href="https://instagram.com/dhanan.raina"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        className="btn-outline-music w-full hover:bg-transparent hover:text-inherit focus:bg-transparent focus:text-inherit active:bg-transparent active:text-inherit"
      >
        <Instagram className="mr-2 h-4 w-4 text-primary" />
        <span className="text-primary-500">
          Visit Instagram Profile
        </span>
      </Button>
   


                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
