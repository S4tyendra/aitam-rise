import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Calendar } from "lucide-react";

const About = () => {
  const timelineEvents = [
    {
      year: "2001",
      title: "AITAM Established",
      description: "Aditya Institute of Technology and Management founded with a vision for excellence in technical education."
    },
    {
      year: "2020",
      title: "Institution's Innovation Council Formed",
      description: "IIC established as part of Ministry of Education's national innovation initiative."
    },
    {
      year: "2025",
      title: "AITAM RISE Incubator Launched",
      description: "Dedicated incubation center launched to transform student ideas into market-ready ventures."
    },
    {
      year: "2025",
      title: "Inaugural Programs Begin",
      description: "First hackathons and startup programs commence with strong industry participation."
    }
  ];

  const leadership = [
    {
      name: "Dr. Sateesh Kumar Gudla",
      role: "President, Institution's Innovation Council",
      department: "IIC Leadership",
      image: "/api/placeholder/200/250"
    },
    {
      name: "Rish Kumar Devarasetti",
      role: "Incubator Program Director",
      department: "Program Management",
      image: "/api/placeholder/200/250"
    },
    {
      name: "Dr. [Name]",
      role: "Chief Innovation Officer",
      department: "Strategic Innovation",
      image: "/api/placeholder/200/250"
    },
    {
      name: "[Name]",
      role: "Operations Head",
      department: "Operations & Facilities",
      image: "/api/placeholder/200/250"
    }
  ];

  return (
    <Layout>
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              About <span className="text-accent">AITAM RISE</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Transforming innovative ideas into impactful ventures through world-class mentorship, 
              state-of-the-art facilities, and a thriving entrepreneurial ecosystem.
            </p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-4">
                    <Target className="h-8 w-8 text-accent mr-3" />
                    <h2 className="text-3xl font-poppins font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To build a leading innovation ecosystem that transforms AITAM into a hub for 
                    student-led entrepreneurship and technological breakthroughs that impact society.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Award className="h-8 w-8 text-accent mr-3" />
                    <h2 className="text-3xl font-poppins font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To systematically foster a culture of innovation by encouraging, inspiring, 
                    and nurturing young students; supporting them to work with new ideas and 
                    transform them into market-ready prototypes and scalable businesses.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-accent" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold mb-2">Community-Driven Innovation</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of collaborative innovation and peer learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundation Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
                Our Foundation: The <span className="gradient-text">AITAM IIC</span>
              </h2>
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  AITAM RISE is the operational heart of the <strong>Institution's Innovation Council (IIC)</strong>, 
                  an initiative by the Ministry of Education, Government of India. The IIC sets the strategic 
                  vision for innovation at AITAM, and RISE brings that vision to life through hands-on programs, 
                  mentorship, and state-of-the-art facilities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This partnership with the national innovation framework positions AITAM RISE as a strategic 
                  asset of the university, backed by government support and aligned with India's vision for 
                  entrepreneurship and innovation in higher education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Our <span className="gradient-text">Leadership Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experienced leaders and innovators guiding the next generation of entrepreneurs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-6">
                    <div className="w-32 h-40 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mx-auto mb-4"></div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">{leader.name}</h3>
                    <p className="text-accent font-medium mb-1">{leader.role}</p>
                    <p className="text-sm text-muted-foreground">{leader.department}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A journey of innovation, growth, and impact spanning over two decades.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-24 text-right mr-8">
                      <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {event.year}
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-4 mr-8 mt-2">
                      <div className="w-4 h-4 bg-accent rounded-full"></div>
                      {index < timelineEvents.length - 1 && (
                        <div className="w-0.5 h-20 bg-accent/30 mx-auto mt-2"></div>
                      )}
                    </div>
                    <Card className="flex-1 card-hover">
                      <CardContent className="p-6">
                        <h3 className="font-poppins font-semibold text-lg mb-2">{event.title}</h3>
                        <p className="text-muted-foreground">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Excellence</h3>
                  <p className="text-muted-foreground">
                    We strive for excellence in everything we do, from mentorship to facilities to outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Community</h3>
                  <p className="text-muted-foreground">
                    We believe in the power of community and collaborative innovation to solve complex problems.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Impact</h3>
                  <p className="text-muted-foreground">
                    We focus on creating solutions that have real-world impact and benefit society.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;