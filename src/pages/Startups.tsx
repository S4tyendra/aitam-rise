import Layout from "@/components/Layout";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Cpu, 
  Printer, 
  GraduationCap, 
  CreditCard, 
  Heart,
  Filter,
  Search,
  ExternalLink,
  Users,
  TrendingUp,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const Startups = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [selectedStage, setSelectedStage] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const industries = [
    { id: "All", name: "All Industries", icon: null },
    { id: "ML", name: "Machine Learning", icon: Brain },
    { id: "IoT", name: "Internet of Things", icon: Cpu },
    { id: "3D", name: "3D Design & Prototyping", icon: Printer },
    { id: "EdTech", name: "EdTech", icon: GraduationCap },
    { id: "FinTech", name: "FinTech", icon: CreditCard },
    { id: "Social", name: "Social Impact", icon: Heart },
  ];

  const stages = [
    { id: "All", name: "All Stages" },
    { id: "Concept", name: "Concept Ideation" },
    { id: "MVP", name: "Minimum Viable Product" },
    { id: "PMF", name: "Product Market Fit" },
    { id: "Graduated", name: "Graduated" },
  ];

  const startups = [
    {
      id: 1,
      name: "EduConnect AI",
      tagline: "Personalizing education through artificial intelligence",
      description: "AI-powered platform that creates personalized learning paths for students based on their learning style, pace, and preferences.",
      industry: "EdTech",
      stage: "PMF",
      founded: "2024",
      team: "4 members",
      founders: "Priya Sharma, Rajesh Kumar",
      batch: "AITAM CS 2023",
      funding: "₹15L raised",
      metrics: "500+ active users, 3 schools onboarded"
    },
    {
      id: 2,
      name: "IoT Farm Solutions",
      tagline: "Smart farming for sustainable agriculture",
      description: "Comprehensive IoT-based farming solution that monitors soil conditions, weather patterns, and crop health to optimize yield.",
      industry: "IoT",
      stage: "MVP",
      founded: "2024",
      team: "3 members",
      founders: "Rahul Patel, Sneha Reddy",
      batch: "AITAM EE 2024",
      funding: "₹8L raised",
      metrics: "10 pilot farms, 25% yield improvement"
    },
    {
      id: 3,
      name: "HealthTech Pro",
      tagline: "Accessible healthcare through technology",
      description: "Telemedicine platform connecting rural patients with urban healthcare providers through mobile technology.",
      industry: "Social",
      stage: "Graduated",
      founded: "2023",
      team: "6 members",
      founders: "Anjali Patel, Dr. Suresh Babu",
      batch: "AITAM IT 2023",
      funding: "₹50L raised",
      metrics: "2000+ consultations, 15 partner clinics"
    },
    {
      id: 4,
      name: "FinLearn",
      tagline: "Financial literacy for the next generation",
      description: "Gamified mobile app teaching financial literacy to young adults through interactive modules and real-world simulations.",
      industry: "FinTech",
      stage: "PMF",
      founded: "2024",
      team: "5 members",
      founders: "Vikram Singh, Pooja Gupta",
      batch: "AITAM CSE 2022",
      funding: "₹12L raised",
      metrics: "1000+ downloads, 4.8★ rating"
    },
    {
      id: 5,
      name: "3D MedPrint",
      tagline: "Custom prosthetics through 3D printing",
      description: "Affordable, customized prosthetic limbs using 3D printing technology and AI-powered design optimization.",
      industry: "3D",
      stage: "MVP",
      founded: "2024",
      team: "4 members",
      founders: "Arjun Nair, Kavitha Rao",
      batch: "AITAM ME 2023",
      funding: "₹10L raised",
      metrics: "5 prototypes completed, 2 patients fitted"
    },
    {
      id: 6,
      name: "AI Tutor",
      tagline: "Personalized AI teaching assistant",
      description: "AI-powered tutoring system that adapts to individual student needs and provides 24/7 academic support.",
      industry: "ML",
      stage: "Concept",
      founded: "2025",
      team: "3 members",
      founders: "Deepak Sharma, Ritu Jain",
      batch: "AITAM CS 2024",
      funding: "Bootstrapped",
      metrics: "Prototype in development"
    }
  ];

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Concept": return "bg-yellow-100 text-yellow-800";
      case "MVP": return "bg-blue-100 text-blue-800";
      case "PMF": return "bg-green-100 text-green-800";
      case "Graduated": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getIndustryIcon = (industry: string) => {
    const industryData = industries.find(ind => ind.id === industry);
    return industryData?.icon || Heart;
  };

  const filteredStartups = startups.filter(startup => {
    const matchesIndustry = selectedIndustry === "All" || startup.industry === selectedIndustry;
    const matchesStage = selectedStage === "All" || startup.stage === selectedStage;
    const matchesSearch = startup.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         startup.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesIndustry && matchesStage && matchesSearch;
  });

  return (
    <Layout>
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Our <span className="text-accent">Startup Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Meet the innovative companies shaping tomorrow. From AI-powered education to sustainable agriculture, 
              our startups are creating real impact across industries.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-primary-foreground/80">Active Startups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">5</div>
                <div className="text-primary-foreground/80">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">₹1.5Cr+</div>
                <div className="text-primary-foreground/80">Funds Raised</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-primary-foreground/80">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            
            {/* Search */}
            <div className="mb-8">
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search startups..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                />
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="space-y-6">
              
              {/* Industry Filter */}
              <div>
                <h3 className="font-poppins font-semibold text-lg mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-accent" />
                  Filter by Industry
                </h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry) => (
                    <Button
                      key={industry.id}
                      variant={selectedIndustry === industry.id ? "default" : "outline"}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`${selectedIndustry === industry.id ? 'bg-accent hover:bg-accent/90' : ''}`}
                    >
                      {industry.icon && <industry.icon className="h-4 w-4 mr-2" />}
                      {industry.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Stage Filter */}
              <div>
                <h3 className="font-poppins font-semibold text-lg mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-accent" />
                  Filter by Stage
                </h3>
                <div className="flex flex-wrap gap-3">
                  {stages.map((stage) => (
                    <Button
                      key={stage.id}
                      variant={selectedStage === stage.id ? "default" : "outline"}
                      onClick={() => setSelectedStage(stage.id)}
                      className={`${selectedStage === stage.id ? 'bg-accent hover:bg-accent/90' : ''}`}
                    >
                      {stage.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Startups Grid */}
        <section className="section-padding">
          <div className="container-custom">
            
            {/* Results Header */}
            <div className="mb-8">
              <p className="text-muted-foreground">
                Showing {filteredStartups.length} of {startups.length} startups
              </p>
            </div>

            {/* Startups Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStartups.map((startup) => {
                const IconComponent = getIndustryIcon(startup.industry);
                return (
                  <Card key={startup.id} className="card-hover h-full">
                    <CardContent className="p-6 h-full flex flex-col">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-accent/20 rounded-lg">
                            <IconComponent className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-poppins font-bold text-xl">{startup.name}</h3>
                            <Badge className={getStageColor(startup.stage)} variant="secondary">
                              {startup.stage}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Tagline */}
                      <p className="text-accent font-medium mb-3">{startup.tagline}</p>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
                        {startup.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-2 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Founded:</span>
                          <span className="font-medium">{startup.founded}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Team:</span>
                          <span className="font-medium">{startup.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Batch:</span>
                          <span className="font-medium">{startup.batch}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Funding:</span>
                          <span className="font-medium text-accent">{startup.funding}</span>
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-medium text-muted-foreground mb-1">Key Metrics:</p>
                        <p className="text-sm">{startup.metrics}</p>
                      </div>

                      {/* Action Button */}
                      <Button variant="outline" className="w-full group">
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* No Results */}
            {filteredStartups.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-2">No startups found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search term to find what you're looking for.
                </p>
                <Button 
                  onClick={() => {
                    setSelectedIndustry("All");
                    setSelectedStage("All");
                    setSearchTerm("");
                  }}
                  variant="outline"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Transform your innovative idea into the next success story in our startup portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#apply">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-medium">
                  Apply to Incubator
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Startups;