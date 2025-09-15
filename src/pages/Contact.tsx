import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import contactAnimation from "@/assets/contactus.json";
import Lottie from "lottie-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Best for detailed inquiries and collaborations",
      contact: "Dhananjaya.raina@gmail.com",
      action: "Send Email",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Instagram DM",
      description: "Fastest response for quick questions",
      contact: "@dhanan.raina",
      action: "Send DM",
      color: "text-accent"
    }
  ];

  const inquiryTypes = [
    "General Inquiry",
    "Concert Booking",
    "Collaboration",
    "Media/Press",
    "Fan Message",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden music-bg">
          <div className="musical-icon top-20 left-10" style={{ animationDelay: '0s' }}>♪</div>
          <div className="musical-icon bottom-20 right-10" style={{ animationDelay: '2s' }}>♫</div>
          
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-accent bg-clip-text text-transparent animate-slide-up">
              LET'S CONNECT
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Ready to create something amazing together? Drop me a line and let's make music happen!
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {contactMethods.map((method, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-border/50 hover:scale-105 transition-all duration-300 glow-card animate-slide-up text-center"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-accent rounded-full flex items-center justify-center`}>
                      <method.icon className={`h-8 w-8 text-primary-foreground`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{method.description}</p>
                    <p className={`font-semibold ${method.color} mb-4`}>{method.contact}</p>

                    {/* Redirect Buttons */}
                    {method.title === "Instagram DM" ? (
                      <a
                        href="https://instagram.com/dhanan.raina"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button variant="outline" className="btn-outline-music w-full">
                          {method.action}
                        </Button>
                      </a>
                    ) : method.title === "Email" ? (
                      <a href="mailto:Dhananjaya.raina@gmail.com" className="w-full">
                        <Button variant="outline" className="btn-outline-music w-full">
                          {method.action}
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" className="btn-outline-music w-full">
                        {method.action}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
              {/* Right: JSON Animation */}
          <div className="flex justify-center">
            <Lottie animationData={contactAnimation} loop={true} className="w-80 h-80" />
          </div>
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-slide-up">
                <h2 className="text-4xl font-black mb-4 bg-gradient-accent bg-clip-text text-transparent">
                  Send a Message
                </h2>
                <p className="text-xl text-muted-foreground">
                  Fill out the form below and I'll get back to you within 24 hours
                </p>
              </div>

              <Card className="bg-gradient-card border-border/50 glow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-8 lg:p-12">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-3 block">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="bg-muted/50 border-border focus:border-primary h-12"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-foreground mb-3 block">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="bg-muted/50 border-border focus:border-primary h-12"
                          required
                        />
                      </div>
                    </div>

                    {/* Inquiry Type */}
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Type of Inquiry
                      </label>
                      <select
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full h-12 px-4 bg-muted/50 border border-border rounded-lg text-foreground focus:border-primary focus:outline-none"
                      >
                        <option value="">Select inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Subject *
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        className="bg-muted/50 border-border focus:border-primary h-12"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-sm font-semibold text-foreground mb-3 block">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me more..."
                        rows={6}
                        className="bg-muted/50 border-border focus:border-primary resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button type="submit" className="btn-music px-8 py-4 text-lg group">
                        <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                      <p className="text-sm text-muted-foreground mt-4">
                        I typically respond within 24 hours. For urgent matters, please use Instagram DM.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Response Times */}
              <Card className="bg-gradient-card border-border/50 glow-card animate-slide-up">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Response Times</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Email: Within 24 hours</p>
                    <p>Instagram DM: Within 2 hours</p>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="bg-gradient-card border-border/50 glow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4 text-secondary" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Based In</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>New York City, USA</p>
                    <p>Mumbai, India</p>
                    <p>Available for travel worldwide</p>
                  </div>
                </CardContent>
              </Card>

              {/* Collaboration */}
              <Card className="bg-gradient-card border-border/50 glow-card animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Open To</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Music collaborations</p>
                    <p>Live performances</p>
                    <p>Studio sessions</p>
                    <p>Music production</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
