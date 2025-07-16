import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, 
  Rocket, 
  Users, 
  Handshake,
  DollarSign,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import useSeo from "@/hooks/useSeo";

const Services = () => {
  useSeo(
    "Our Services | AITAM RISE Incubator",
    "Explore our comprehensive services for startups, including pre-incubation, incubation support, mentorship, networking, and funding assistance."
  );

  const services = [
    {
      icon: Lightbulb,
      title: "Pre-incubation Support",
      description: "For aspiring entrepreneurs with early-stage ideas. We help you validate your concept and build a foundational business plan.",
      link: "/services/pre-incubation"
    },
    {
      icon: Rocket,
      title: "Incubation Support",
      description: "For startups with a validated idea or MVP. We provide the resources to build, launch, and grow your product in the market.",
      link: "/services/incubation"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "Connect with our network of experienced industry veterans for personalized guidance.",
      link: "/services/mentorship"
    },
    {
      icon: Handshake,
      title: "Networking",
      description: "Gain access to a vibrant ecosystem of innovators, investors, and industry partners.",
      link: "/services/networking"
    },
    {
      icon: DollarSign,
      title: "Funding Assistance",
      description: "We help you navigate the complex funding landscape, from preparing your pitch to connecting with investors.",
      link: "/services/funding"
    }
  ];

  return (
    <Layout>
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive support to nurture your startup from a nascent idea to a market-leading enterprise.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="card-hover h-full flex flex-col">
                  <CardContent className="p-8 flex-1 flex flex-col">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full">
                        <service.icon className="h-10 w-10 text-accent" />
                      </div>
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-4 text-center">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-center flex-grow">{service.description}</p>
                    <div className="mt-auto">
                      <Link to={service.link}>
                        <Button variant="outline" className="w-full">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Let's build the future together. Apply for our programs and get access to all our world-class services.
            </p>
            <Link to="/apply">
              <Button className="btn-hero">
                Apply to a Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;