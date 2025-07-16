import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building,
  Printer,
  Cpu,
  Users,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const Facilities = () => {
  const facilities = [
    {
      icon: Building,
      title: "Co-working Space",
      description: "A vibrant, open-plan workspace designed for collaboration and innovation. Features high-speed internet, meeting rooms, and all the amenities you need to be productive.",
      image: "/api/placeholder/400/250",
      details: ["24/7 Access", "Flexible Seating", "Private Meeting Booths", "Event Space"]
    },
    {
      icon: Sparkles,
      title: "Idealab",
      description: "Our central hub for creativity and rapid prototyping. Bring your ideas to life with access to cutting-edge tools and equipment for design and fabrication.",
      image: "/api/placeholder/400/250",
      details: ["3D Printers & Scanners", "Laser Cutters", "Electronics Workbenches", "Design Software Suite"]
    },
    {
      icon: Cpu,
      title: "Specialized Labs",
      description: "Dedicated labs for deep-tech development in our key focus areas, equipped with high-performance computing and specialized hardware.",
      image: "/api/placeholder/400/250",
      details: ["AI/ML Lab with GPUs", "IoT Lab with Sensor Kits", "Robotics & Automation Lab", "Secure Data Center"]
    }
  ];

  return (
    <Layout>
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Facilities</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              State-of-the-art infrastructure designed to foster creativity, collaboration, and cutting-edge technological development.
            </p>
          </div>
        </section>

        {/* Facilities Details */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-16">
              {facilities.map((facility, index) => (
                <Card key={index} className="overflow-hidden card-hover">
                  <div className="grid md:grid-cols-2 items-center">
                    <div className="p-8 md:p-12">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-accent/20 rounded-full mr-4">
                          <facility.icon className="h-8 w-8 text-accent" />
                        </div>
                        <h2 className="text-3xl font-poppins font-bold">{facility.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{facility.description}</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                        {facility.details.map((detail, i) => (
                           <li key={i} className="flex items-center text-sm">
                           <ArrowRight className="h-4 w-4 mr-2 text-accent" />
                           {detail}
                         </li>
                        ))}
                      </ul>
                      <Link to="/programs">
                        <Button variant="outline">
                            Explore Related Programs
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-secondary h-64 md:h-full">
                      {/* Placeholder for an image */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                          <facility.icon className="h-24 w-24 text-primary/20"/>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
};

export default Facilities;