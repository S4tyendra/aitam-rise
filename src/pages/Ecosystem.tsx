import Layout from "@/components/Layout";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Building, 
  Mail, 
  Linkedin, 
  ExternalLink,
  Filter,
  Search,
  Award,
  Target,
  ArrowRight,
  Handshake,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";

const Ecosystem = () => {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const expertiseAreas = [
    { id: "All", name: "All Expertise" },
    { id: "Technology", name: "Technology" },
    { id: "Marketing", name: "Marketing & Sales" },
    { id: "Finance", name: "Finance & Investment" },
    { id: "Legal", name: "Legal & Compliance" },
    { id: "Product", name: "Product Management" },
    { id: "Operations", name: "Operations & Strategy" },
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      title: "Chief Technology Officer",
      company: "TechCorp India",
      expertise: ["Technology", "Product"],
      experience: "15+ years",
      background: "Former Google engineer, built 3 successful startups",
      specialization: "AI/ML, Product Architecture",
      mentoringSince: "2023",
      startupsHelped: 8,
      linkedin: "https://linkedin.com/in/rajeshkumar",
      image: "/api/placeholder/120/120"
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "Marketing Director",
      company: "Digital Growth Partners",
      expertise: ["Marketing", "Operations"],
      experience: "12+ years",
      background: "Led marketing for 5 unicorn startups, expert in growth hacking",
      specialization: "Digital Marketing, Growth Strategy",
      mentoringSince: "2023",
      startupsHelped: 12,
      linkedin: "https://linkedin.com/in/priyasharma",
      image: "/api/placeholder/120/120"
    },
    {
      id: 3,
      name: "CA Suresh Reddy",
      title: "Investment Partner",
      company: "Venture Capital Fund",
      expertise: ["Finance", "Legal"],
      experience: "18+ years",
      background: "Former McKinsey consultant, invested in 50+ startups",
      specialization: "Funding Strategy, Financial Planning",
      mentoringSince: "2024",
      startupsHelped: 6,
      linkedin: "https://linkedin.com/in/sureshreddy",
      image: "/api/placeholder/120/120"
    },
    {
      id: 4,
      name: "Anjali Patel",
      title: "Product Manager",
      company: "Microsoft",
      expertise: ["Product", "Technology"],
      experience: "10+ years",
      background: "Led product teams at Microsoft and Amazon",
      specialization: "Product Strategy, UX Design",
      mentoringSince: "2024",
      startupsHelped: 5,
      linkedin: "https://linkedin.com/in/anjalipatel",
      image: "/api/placeholder/120/120"
    },
    {
      id: 5,
      name: "Vikram Singh",
      title: "Legal Advisor",
      company: "Corporate Law Associates",
      expertise: ["Legal", "Finance"],
      experience: "20+ years",
      background: "Top corporate lawyer specializing in startup legal matters",
      specialization: "IP Law, Corporate Compliance",
      mentoringSince: "2023",
      startupsHelped: 15,
      linkedin: "https://linkedin.com/in/vikramsingh",
      image: "/api/placeholder/120/120"
    },
    {
      id: 6,
      name: "Deepika Nair",
      title: "Operations Head",
      company: "Logistics Solutions Inc",
      expertise: ["Operations", "Marketing"],
      experience: "14+ years",
      background: "Scaled operations for multiple high-growth startups",
      specialization: "Operations Strategy, Supply Chain",
      mentoringSince: "2024",
      startupsHelped: 7,
      linkedin: "https://linkedin.com/in/deepikanair",
      image: "/api/placeholder/120/120"
    }
  ];

  const partners = [
    {
      category: "Technology Partners",
      companies: [
        { name: "Microsoft", logo: "/api/placeholder/150/60", partnership: "Cloud Credits & Technical Support" },
        { name: "Google Cloud", logo: "/api/placeholder/150/60", partnership: "Startup Program & AI Tools" },
        { name: "AWS", logo: "/api/placeholder/150/60", partnership: "Infrastructure Support" },
        { name: "GitHub", logo: "/api/placeholder/150/60", partnership: "Developer Tools & Education" },
      ]
    },
    {
      category: "Industry Partners",
      companies: [
        { name: "Infosys", logo: "/api/placeholder/150/60", partnership: "Mentorship & Internships" },
        { name: "TCS", logo: "/api/placeholder/150/60", partnership: "Innovation Labs Access" },
        { name: "Wipro", logo: "/api/placeholder/150/60", partnership: "Technology Consulting" },
        { name: "HCL", logo: "/api/placeholder/150/60", partnership: "Digital Transformation Support" },
      ]
    },
    {
      category: "Investment Partners",
      companies: [
        { name: "Sequoia Capital", logo: "/api/placeholder/150/60", partnership: "Seed Funding Access" },
        { name: "Accel Partners", logo: "/api/placeholder/150/60", partnership: "Early Stage Investment" },
        { name: "Kalaari Capital", logo: "/api/placeholder/150/60", partnership: "Series A Support" },
        { name: "Blume Ventures", logo: "/api/placeholder/150/60", partnership: "Startup Acceleration" },
      ]
    },
    {
      category: "Academic Partners",
      companies: [
        { name: "IIT Madras", logo: "/api/placeholder/150/60", partnership: "Research Collaboration" },
        { name: "IISC Bangalore", logo: "/api/placeholder/150/60", partnership: "Innovation Exchange" },
        { name: "ISB Hyderabad", logo: "/api/placeholder/150/60", partnership: "Business Mentorship" },
        { name: "BITS Pilani", logo: "/api/placeholder/150/60", partnership: "Student Exchange Program" },
      ]
    }
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesExpertise = selectedExpertise === "All" || mentor.expertise.includes(selectedExpertise);
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesExpertise && matchesSearch;
  });

  const getExpertiseColor = (expertise: string) => {
    const colors = {
      "Technology": "bg-blue-100 text-blue-800",
      "Marketing": "bg-green-100 text-green-800",
      "Finance": "bg-purple-100 text-purple-800",
      "Legal": "bg-red-100 text-red-800",
      "Product": "bg-orange-100 text-orange-800",
      "Operations": "bg-cyan-100 text-cyan-800",
    };
    return colors[expertise as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <Layout>
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Ecosystem</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A thriving community of mentors, industry partners, and innovators committed to 
              nurturing the next generation of entrepreneurs.
            </p>
            
            {/* Ecosystem Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-primary-foreground/80">Expert Mentors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-primary-foreground/80">Industry Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100+</div>
                <div className="text-primary-foreground/80">Startups Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">₹10Cr+</div>
                <div className="text-primary-foreground/80">Network Value</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Our <span className="gradient-text">Mentors</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Industry leaders and experts providing guidance, insights, and support to help startups succeed.
              </p>
            </div>

            {/* Mentor Filters */}
            <div className="mb-8 space-y-6">
              
              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search mentors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                </div>
              </div>

              {/* Expertise Filter */}
              <div className="text-center">
                <h3 className="font-poppins font-semibold text-lg mb-4 flex items-center justify-center">
                  <Filter className="h-5 w-5 mr-2 text-accent" />
                  Filter by Expertise
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {expertiseAreas.map((area) => (
                    <Button
                      key={area.id}
                      variant={selectedExpertise === area.id ? "default" : "outline"}
                      onClick={() => setSelectedExpertise(area.id)}
                      className={`${selectedExpertise === area.id ? 'bg-accent hover:bg-accent/90' : ''}`}
                    >
                      {area.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mentors Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="card-hover">
                  <CardContent className="p-6">
                    
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center">
                        <Users className="h-8 w-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-bold text-lg mb-1">{mentor.name}</h3>
                        <p className="text-accent font-medium">{mentor.title}</p>
                        <p className="text-sm text-muted-foreground">{mentor.company}</p>
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {mentor.expertise.map((skill) => (
                        <Badge key={skill} className={getExpertiseColor(skill)} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4 text-sm">
                      <p><span className="text-muted-foreground">Experience:</span> <span className="font-medium">{mentor.experience}</span></p>
                      <p><span className="text-muted-foreground">Specialization:</span> <span className="font-medium">{mentor.specialization}</span></p>
                      <p><span className="text-muted-foreground">Startups Helped:</span> <span className="font-medium text-accent">{mentor.startupsHelped}</span></p>
                    </div>

                    {/* Background */}
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {mentor.background}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Become a Mentor CTA */}
            <div className="text-center mt-16">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-4">Become a Mentor</h3>
                  <p className="text-muted-foreground mb-6">
                    Share your expertise and help shape the next generation of entrepreneurs. 
                    Join our community of industry leaders making a real impact.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Apply to Mentor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Our <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic alliances with leading companies and institutions that provide resources, 
                expertise, and opportunities for growth.
              </p>
            </div>

            <div className="space-y-12">
              {partners.map((category, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-poppins font-semibold mb-8 text-center text-accent">
                    {category.category}
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.companies.map((company, companyIndex) => (
                      <Card key={companyIndex} className="card-hover text-center">
                        <CardContent className="p-6">
                          <div className="h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-lg flex items-center justify-center mb-4">
                            <Building className="h-8 w-8 text-accent" />
                          </div>
                          <h4 className="font-poppins font-semibold text-lg mb-2">{company.name}</h4>
                          <p className="text-sm text-muted-foreground">{company.partnership}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Partner with Us CTA */}
            <div className="text-center mt-16">
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-poppins font-bold mb-4">Partner With Us</h3>
                  <p className="text-muted-foreground mb-6">
                    Join our ecosystem as a strategic partner. Provide resources, sponsor events, 
                    or co-host workshops to support the next generation of innovators.
                  </p>
                  <Link to="/contact">
                    <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      Become a Partner
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                Success <span className="gradient-text">Stories</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Hear from mentors and partners about their experience in our ecosystem.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Mentoring at AITAM RISE has been incredibly rewarding. The quality of ideas 
                    and dedication of students here is exceptional."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Dr. Rajesh Kumar</p>
                      <p className="text-sm text-muted-foreground">Mentor since 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "Our partnership with AITAM RISE has yielded fantastic results. We've recruited 
                    some of our best talent from their portfolio companies."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Priya Sharma</p>
                      <p className="text-sm text-muted-foreground">Industry Partner</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "The ecosystem here is truly collaborative. Everyone is invested in helping 
                    startups succeed, creating a supportive environment for innovation."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold">Vikram Singh</p>
                      <p className="text-sm text-muted-foreground">Legal Mentor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Ecosystem;