import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  Rocket, 
  TrendingUp, 
  Brain, 
  Cpu, 
  Printer, 
  GraduationCap,
  CreditCard,
  Heart,
  Users,
  Calendar,
  ArrowRight,
  Star,
  Quote
} from "lucide-react";


// Counter component for animated numbers
const Counter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef} className="counter gradient-text">
      {count}{suffix}
    </span>
  );
};

const Homepage = () => {
  const impactStats = [
    { number: 25, suffix: "+", label: "Startups Incubated", icon: Rocket },
    { number: 150, suffix: "+", label: "Jobs Created", icon: Users },
    { number: 50, suffix: "L+", label: "Funds Raised", icon: CreditCard },
    { number: 30, suffix: "+", label: "Industry Partners", icon: Heart },
  ];

  const programPillars = [
    {
      icon: Lightbulb,
      title: "Ideate & Validate",
      description: "Transform your innovative ideas into validated business concepts with expert guidance and market research support.",
      link: "/programs#ideate"
    },
    {
      icon: Rocket,
      title: "Build & Launch",
      description: "Develop your MVP with access to cutting-edge labs, mentorship, and technical resources for successful market entry.",
      link: "/programs#build"
    },
    {
      icon: TrendingUp,
      title: "Scale & Grow",
      description: "Accelerate your startup growth with investor connections, strategic partnerships, and advanced business coaching.",
      link: "/programs#scale"
    }
  ];

  const thematicAreas = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "AI-powered solutions for the future",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      icon: Cpu,
      title: "Internet of Things",
      description: "Connected devices and smart systems",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: Printer,
      title: "3D Design & Prototyping",
      description: "Rapid prototyping and innovation",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: GraduationCap,
      title: "EdTech",
      description: "Educational technology solutions",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: CreditCard,
      title: "FinTech",
      description: "Financial technology innovations",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Social Impact",
      description: "Technology for social good",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const featuredStartups = [
    {
      name: "EduConnect AI",
      tagline: "Personalizing education through artificial intelligence",
      team: "Founded by AITAM CS students",
      image: "/api/placeholder/300/200"
    },
    {
      name: "IoT Farm Solutions",
      tagline: "Smart farming for sustainable agriculture",
      team: "Founded by AITAM EE students",
      image: "/api/placeholder/300/200"
    },
    {
      name: "HealthTech Pro",
      tagline: "Accessible healthcare through technology",
      team: "Founded by AITAM IT students",
      image: "/api/placeholder/300/200"
    }
  ];

  const upcomingEvents = [
    {
      title: "Web Development Hackathon",
      date: "March 15-17, 2025",
      type: "Hackathon"
    },
    {
      title: "AI/ML Workshop Series",
      date: "March 22, 2025",
      type: "Workshop"
    },
    {
      title: "Startup Pitch Competition",
      date: "April 5, 2025",
      type: "Competition"
    }
  ];

  const testimonials = [
    {
      quote: "AITAM RISE transformed my idea into a thriving startup. The mentorship and resources here are unmatched.",
      author: "Priya Sharma",
      role: "Founder, EduConnect AI",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "The incubator's focus areas align perfectly with industry needs. I found my co-founder and investor through this program.",
      author: "Rahul Kumar",
      role: "Co-founder, IoT Farm Solutions",
      avatar: "/api/placeholder/60/60"
    },
    {
      quote: "From concept to market launch in 8 months. The acceleration program here is world-class.",
      author: "Anjali Patel",
      role: "CEO, HealthTech Pro",
      avatar: "/api/placeholder/60/60"
    }
  ];

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/hero-incubator.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight mb-6 animate-fade-in">
              From Idea to Impact.
              <br />
              <span className="text-accent">Your Entrepreneurial Journey</span>
              <br />
              Starts at AITAM.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We provide the resources, mentorship, and community to help AITAM's brightest minds build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Link to="/programs">
                <Button className="btn-hero">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/startups">
                <Button className="btn-secondary-hero">
                  See Our Startups
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <Counter end={stat.number} suffix={stat.suffix} />
                <p className="text-muted-foreground font-medium mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Pillars Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Your Journey to <span className="gradient-text">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We support entrepreneurs at every stage of their journey, from initial idea to scaling success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programPillars.map((pillar, index) => (
              <Card key={index} className="card-hover group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                      <pillar.icon className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-poppins font-semibold mb-4">{pillar.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>
                  <Link to={pillar.link}>
                    <Button variant="outline" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Areas Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Our Focus <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized support for startups in high-impact technology sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {thematicAreas.map((area, index) => (
              <div key={index} className="focus-card">
                <div className="mb-4 flex justify-center">
                  <div className={`p-3 bg-gradient-to-br ${area.gradient} rounded-full`}>
                    <area.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-2">{area.title}</h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Startups Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Meet Our <span className="gradient-text">Innovators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the groundbreaking startups that are shaping tomorrow, today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStartups.map((startup, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20"></div>
                <CardContent className="p-6">
                  <h3 className="font-poppins font-semibold text-xl mb-2">{startup.name}</h3>
                  <p className="text-muted-foreground mb-3">{startup.tagline}</p>
                  <p className="text-sm text-accent font-medium">{startup.team}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/startups">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                View All Startups
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our vibrant community at workshops, hackathons, and networking events.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-5 w-5 text-accent mr-2" />
                    <span className="text-sm text-accent font-medium">{event.type}</span>
                  </div>
                  <h3 className="font-poppins font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.date}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              What Our <span className="gradient-text">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from the entrepreneurs who've transformed their ideas into successful ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-accent mb-4" />
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mr-4"></div>
                    <div>
                      <p className="font-poppins font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding bg-gradient-primary text-primary-foreground">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Join the next generation of innovators at AITAM RISE. Your idea could be the next big breakthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact#apply">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-medium">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;