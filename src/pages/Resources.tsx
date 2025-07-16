import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText,
  Download,
  BookOpen,
  Link as LinkIcon,
  HardHat,
  Rocket
} from "lucide-react";
import useSeo from "@/hooks/useSeo";

const Resources = () => {
  useSeo(
    "Resources | AITAM RISE Incubator",
    "Access essential resources, including document templates, policy documents, learning materials, and useful tools for startups."
  );

  const documentTemplates = [
    { title: "Pitch Deck Template", description: "A professional template to help you craft a compelling pitch for investors.", type: "Template", link: "#" },
    { title: "Business Plan Outline", description: "A structured outline to guide you in developing a comprehensive business plan.", type: "Template", link: "#" },
    { title: "Financial Projection Model", description: "An Excel template to help you forecast your startup's financial performance.", type: "Template", link: "#" },
  ];

  const policyDocuments = [
    { title: "AITAM RISE Incubation Policy", description: "The official policy document outlining the terms and conditions of our incubation program.", type: "Policy", link: "#" },
    { title: "Intellectual Property (IP) Policy", description: "Guidelines on IP ownership and protection for innovations developed at AITAM RISE.", type: "Policy", link: "#" },
    { title: "Code of Conduct", description: "The expected code of conduct for all members of the AITAM RISE community.", type: "Policy", link: "#" },
  ];

  const usefulLinks = [
    { title: "Y Combinator Library", description: "A vast collection of essays, videos, and guides from one of the world's top accelerators.", category: "Startup Knowledge", link: "https://www.ycombinator.com/library" },
    { title: "Startup School", description: "A free online program and community for founders, providing curriculum and guidance.", category: "Learning", link: "https://www.startupschool.org/" },
    { title: "Pitch.com", description: "A collaborative presentation software to create beautiful and effective pitch decks.", category: "Tools", link: "https://pitch.com/" },
    { title: "Figma for Startups", description: "Access to Figma's professional tier for free to design and prototype your product.", category: "Design", link: "https://www.figma.com/startups/" },
  ];

  return (
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              Startup <span className="text-accent">Resources</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Essential documents, templates, and tools to support your entrepreneurial journey from idea to execution.
            </p>
          </div>
        </section>

        <section className="section-padding">
            <div className="container-custom">
                <Tabs defaultValue="documents" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-8">
                        <TabsTrigger value="documents"><FileText className="mr-2 h-4 w-4"/>Documents</TabsTrigger>
                        <TabsTrigger value="links"><LinkIcon className="mr-2 h-4 w-4"/>Useful Links</TabsTrigger>
                        <TabsTrigger value="contribute" className="md:col-auto col-span-2"><HardHat className="mr-2 h-4 w-4"/>Contribute</TabsTrigger>
                    </TabsList>

                    <TabsContent value="documents">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-poppins font-bold mb-4">Document Templates</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {documentTemplates.map((doc, i) => (
                                        <Card key={i} className="card-hover">
                                            <CardContent className="p-6">
                                                <h3 className="font-poppins font-semibold text-lg mb-2">{doc.title}</h3>
                                                <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                                                <Button asChild className="w-full">
                                                    <a href={doc.link} download><Download className="mr-2 h-4 w-4" /> Download</a>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                             <div>
                                <h2 className="text-2xl font-poppins font-bold mb-4">Policy Documents</h2>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {policyDocuments.map((doc, i) => (
                                        <Card key={i} className="card-hover">
                                            <CardContent className="p-6">
                                                <h3 className="font-poppins font-semibold text-lg mb-2">{doc.title}</h3>
                                                <p className="text-muted-foreground text-sm mb-4">{doc.description}</p>
                                                <Button asChild variant="outline" className="w-full">
                                                    <a href={doc.link}><BookOpen className="mr-2 h-4 w-4" /> Read Policy</a>
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="links">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {usefulLinks.map((link, i) => (
                                <Card key={i} className="card-hover">
                                    <CardContent className="p-6">
                                        <Badge variant="secondary" className="mb-3">{link.category}</Badge>
                                        <h3 className="font-poppins font-semibold text-lg mb-2">{link.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{link.description}</p>
                                        <Button asChild variant="outline" className="w-full">
                                            <a href={link.link} target="_blank" rel="noopener noreferrer"><LinkIcon className="mr-2 h-4 w-4" /> Visit Site</a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="contribute">
                        <Card className="max-w-3xl mx-auto bg-secondary/50">
                            <CardContent className="p-8 text-center">
                                <Rocket className="h-12 w-12 text-accent mx-auto mb-4"/>
                                <h2 className="text-2xl font-poppins font-bold mb-3">Help Grow Our Resource Hub</h2>
                                <p className="text-muted-foreground mb-6">Have a great template, tool, or article that helped you on your journey? Share it with the AITAM RISE community and help fellow entrepreneurs succeed.</p>
                                <Button asChild>
                                    <a href="mailto:iic@adityatekkali.edu.in?subject=Resource Contribution for AITAM RISE">
                                        Suggest a Resource
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
      </div>
  );
};

export default Resources;
