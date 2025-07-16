
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Lightbulb, 
  Rocket, 
  TrendingUp, 
  Users, 
  Clock, 
  Target,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Briefcase,
  GraduationCap
} from "lucide-react";
import { Link } from "react-router-dom";
import useSeo from "@/hooks/useSeo";

const Programs = () => {
  useSeo(
    "Programs & Offerings | AITAM RISE Incubator",
    "Discover our structured programs for entrepreneurs at every stage, from ideation and validation to building, launching, and scaling your startup."
  );

  const programStages = [
    {
      id: "ideate",
      icon: Lightbulb,
      title: "Pre-Incubation",
      subtitle: "Ideate & Validate",
      description: "For students with nascent ideas or strong interest in entrepreneurship",
      duration: "2-4 months",
      commitment: "Part-time",
      features: [
        "Access to Design Challenges and Hackathons",
        "Idea validation workshops",
        "Initial mentor pool access",
        "Networking events with peers",
        "Market research support",
        "Basic business model training"
      ],
      outcomes: [
        "Validated business concept",
        "Initial team formation",
        "Basic pitch deck",
        "Market understanding"
      ]
    },
    {
      id: "build",
      icon: Rocket,
      title: "Incubation",
      subtitle: "Build & Launch",
      description: "For teams with validated ideas or MVP ready for development",
      duration: "6-12 months",
      commitment: "Full-time",
      features: [
        "Dedicated workspace in D-Block",
        "Access to specialized labs (ML, IoT, 3D)",
        "One-on-one mentorship",
        "Seed funding support",
        "Legal & IP guidance",
        "Business development coaching",
        "Technical infrastructure access",
        "Prototype development support"
      ],
      outcomes: [
        "Market-ready product/service",
        "Revenue generation",
        "Strong team foundation",
        "Investor-ready pitch"
      ]
    },
    {
      id: "scale",
      icon: TrendingUp,
      title: "Accelerator",
      subtitle: "Scale & Grow",
      description: "For graduated startups ready for market expansion and growth",
      duration: "3-6 months",
      commitment: "Intensive",
      features: [
        "Direct investor network access",
        "Series A funding preparation",
        "Strategic partnership facilitation",
        "Advanced business coaching",
        "Market expansion support",
        "Global mentor network",
        "Corporate partnership opportunities",
        "Exit strategy planning"
      ],
      outcomes: [
        "Significant funding raised",
        "Market expansion",
        "Strategic partnerships",
        "Sustainable growth model"
      ]
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Choose Your Program",
      description: "Select the program stage that aligns with your current entrepreneurial journey"
    },
    {
      step: 2,
      title: "Submit Application",
      description: "Complete our comprehensive online application with your idea, team, and vision"
    },
    {
      step: 3,
      title: "Pitch & Interview",
      description: "Present your concept to our expert selection committee and participate in interviews"
    }
  ];

  const eligibilityCriteria = [
    {
      program: "Pre-Incubation",
      criteria: [
        "Current AITAM students (all years)",
        "Recent AITAM alumni (within 2 years)",
        "Faculty members with innovative ideas",
        "Passion for innovation and entrepreneurship"
      ]
    },
    {
      program: "Incubation",
      criteria: [
        "Validated business idea or working prototype",
        "Committed founding team",
        "Market research completed",
        "Willingness to dedicate full-time effort"
      ]
    },
    {
      program: "Accelerator",
      criteria: [
        "Revenue-generating startup",
        "Proven market traction",
        "Scalable business model",
        "Ready for significant investment"
      ]
    }
  ];

  const faqs = [
    {
      question: "Who can apply to AITAM RISE programs?",
      answer: "Current AITAM students, recent alumni (within 2 years), and faculty members are eligible to apply. We welcome individuals at any stage of their entrepreneurial journey."
    },
    {
      question: "What are the primary selection criteria?",
      answer: "We evaluate applications based on innovation potential, team commitment, market opportunity, scalability, and alignment with our focus areas (ML, IoT, 3D Design, EdTech, FinTech, Social Impact)."
    },
    {
      question: "Is there a cost to join the program?",
      answer: "Our programs are free for accepted participants. We provide all resources, mentorship, and facilities at no cost to foster innovation within the AITAM community."
    },
    {
      question: "What equity does the incubator take?",
      answer: "AITAM RISE follows a non-equity model for most programs. We may consider small equity participation only in exceptional cases where significant funding is provided."
    },
    {
      question: "Can international students apply?",
      answer: "Yes, international students enrolled at AITAM are welcome to apply to all our programs."
    },
    {
      question: "What happens after program completion?",
      answer: "Graduates become part of our alumni network, receive continued mentorship opportunities, and can access our investor network for future funding needs."
    }
  ];

  return (
    
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Programs & <span className="text-accent">Offerings</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Comprehensive support for entrepreneurs at every stage of their journey, 
              from initial idea to successful scaling.
            </p>
          </div>
        </section>

        {/* Journey Overview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                The AITAM RISE <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Our structured pathway guides you from ideation to successful scaling through three comprehensive stages.
              </p>
              
              {/* Journey Flow */}
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <Lightbulb className="h-5 w-5" />
                  <span>Ideate</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <Target className="h-5 w-5" />
                  <span>Validate</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <Rocket className="h-5 w-5" />
                  <span>Build</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <Briefcase className="h-5 w-5" />
                  <span>Launch</span>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90 md:rotate-0" />
                <div className="flex items-center space-x-2 text-accent font-medium">
                  <TrendingUp className="h-5 w-5" />
                  <span>Scale</span>
                </div>
              </div>
            </div>

            {/* Program Details */}
            <Tabs defaultValue="ideate" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {programStages.map((stage) => (
                  <TabsTrigger key={stage.id} value={stage.id} className="flex items-center space-x-2">
                    <stage.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{stage.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {programStages.map((stage) => (
                <TabsContent key={stage.id} value={stage.id}>
                  <Card className="card-hover">
                    <CardContent className="p-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="p-3 bg-accent/20 rounded-full mr-4">
                              <stage.icon className="h-8 w-8 text-accent" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-poppins font-bold">{stage.title}</h3>
                              <p className="text-accent font-medium">{stage.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 text-lg">{stage.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="flex items-center space-x-2">
                              <Clock className="h-5 w-5 text-accent" />
                              <div>
                                <p className="font-medium">Duration</p>
                                <p className="text-sm text-muted-foreground">{stage.duration}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Users className="h-5 w-5 text-accent" />
                              <div>
                                <p className="font-medium">Commitment</p>
                                <p className="text-sm text-muted-foreground">{stage.commitment}</p>
                              </div>
                            </div>
                          </div>

                          <Link to="/contact#apply">
                            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                              Apply for {stage.title}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-poppins font-semibold text-lg mb-3">What You'll Get</h4>
                            <div className="space-y-2">
                              {stage.features.map((feature, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-poppins font-semibold text-lg mb-3">Expected Outcomes</h4>
                            <div className="space-y-2">
                              {stage.outcomes.map((outcome, index) => (
                                <div key={index} className="flex items-start space-x-2">
                                  <Target className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                                  <span className="text-muted-foreground">{outcome}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Application Process */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
                How to <span className="gradient-text">Apply</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our streamlined application process is designed to identify and support the most promising innovations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {applicationProcess.map((step, index) => (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-poppins font-semibold text-xl mb-4">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/contact#apply">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
                  Start Your Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Eligibility & FAQ */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Eligibility */}
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-8">
                  Eligibility <span className="gradient-text">Criteria</span>
                </h2>
                
                <div className="space-y-6">
                  {eligibilityCriteria.map((program, index) => (
                    <Card key={index} className="card-hover">
                      <CardContent className="p-6">
                        <h3 className="font-poppins font-semibold text-lg mb-4 text-accent">
                          {program.program}
                        </h3>
                        <div className="space-y-2">
                          {program.criteria.map((criterion, criterionIndex) => (
                            <div key={criterionIndex} className="flex items-start space-x-2">
                              <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{criterion}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-poppins font-bold mb-8">
                  Frequently Asked <span className="gradient-text">Questions</span>
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-poppins font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Join hundreds of student entrepreneurs who have chosen AITAM RISE to build their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#apply">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-medium">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4 text-lg font-medium">
                  Have Questions?
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    
  );
};

export default Programs;