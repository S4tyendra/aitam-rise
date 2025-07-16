
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Trophy, 
  Rocket, 
  Lightbulb,
  ArrowRight,
  ExternalLink,
  Filter,
  Tag,
  Star,
  Award,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import useSeo from "@/hooks/useSeo";

const NewsEvents = () => {
  useSeo(
    "News & Events | AITAM RISE Incubator",
    "Stay updated with the latest news, announcements, and upcoming events from the AITAM RISE community. Join our hackathons, workshops, and competitions."
  );

  const [selectedEventType, setSelectedEventType] = useState("All");
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("All");

  const eventTypes = [
    { id: "All", name: "All Events" },
    { id: "Hackathon", name: "Hackathons" },
    { id: "Workshop", name: "Workshops" },
    { id: "Competition", name: "Competitions" },
    { id: "Networking", name: "Networking" },
    { id: "Mentorship", name: "Mentorship" },
  ];

  const newsCategories = [
    { id: "All", name: "All News" },
    { id: "Success", name: "Success Stories" },
    { id: "Announcement", name: "Announcements" },
    { id: "Partnership", name: "Partnerships" },
    { id: "Funding", name: "Funding News" },
    { id: "Awards", name: "Awards & Recognition" },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Web Development Hackathon 2025",
      type: "Hackathon",
      date: "March 15-17, 2025",
      time: "9:00 AM - 6:00 PM",
      venue: "AITAM Campus, D-Block Incubation Center",
      description: "48-hour intensive hackathon focusing on innovative web solutions. Build the next big web application with cutting-edge technologies.",
      prizes: "₹1,00,000 total prize pool",
      registrations: "150+ participants",
      deadline: "March 10, 2025",
      featured: true,
      tags: ["Web Development", "Innovation", "Competition"]
    },
    {
      id: 2,
      title: "AI/ML Workshop Series",
      type: "Workshop",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "ML Lab, AITAM Campus",
      description: "Comprehensive workshop on machine learning fundamentals and practical applications. Perfect for beginners and intermediate learners.",
      prizes: "Certificates of completion",
      registrations: "80+ participants",
      deadline: "March 20, 2025",
      featured: false,
      tags: ["Machine Learning", "AI", "Education"]
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      type: "Competition",
      date: "April 5, 2025",
      time: "10:00 AM - 4:00 PM",
      venue: "AITAM Auditorium",
      description: "Present your startup idea to industry experts and investors. Get feedback and potential funding opportunities.",
      prizes: "₹2,00,000 funding opportunity",
      registrations: "25 startups",
      deadline: "March 30, 2025",
      featured: true,
      tags: ["Startups", "Pitching", "Investment"]
    },
    {
      id: 4,
      title: "IoT Innovation Workshop",
      type: "Workshop",
      date: "April 12, 2025",
      time: "1:00 PM - 6:00 PM",
      venue: "IoT Lab, AITAM Campus",
      description: "Hands-on workshop on Internet of Things development. Learn to build connected devices and smart systems.",
      prizes: "IoT development kits",
      registrations: "60+ participants",
      deadline: "April 8, 2025",
      featured: false,
      tags: ["IoT", "Hardware", "Innovation"]
    },
    {
      id: 5,
      title: "Entrepreneur Networking Night",
      type: "Networking",
      date: "April 18, 2025",
      time: "6:00 PM - 9:00 PM",
      venue: "AITAM Conference Hall",
      description: "Connect with fellow entrepreneurs, mentors, and industry leaders. Build valuable relationships in a relaxed setting.",
      prizes: "Networking opportunities",
      registrations: "100+ attendees",
      deadline: "April 15, 2025",
      featured: false,
      tags: ["Networking", "Entrepreneurs", "Community"]
    }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "EduConnect AI Secures ₹50L Series A Funding",
      category: "Funding",
      date: "February 28, 2025",
      excerpt: "AITAM RISE portfolio company EduConnect AI raises significant funding to expand their AI-powered education platform across India.",
      content: "In a major milestone for AITAM RISE Incubator, EduConnect AI has successfully raised ₹50 lakhs in Series A funding...",
      featured: true,
      readTime: "3 min read",
      author: "AITAM RISE Team",
      tags: ["Funding", "EdTech", "AI", "Success"]
    },
    {
      id: 2,
      title: "AITAM RISE Partners with Microsoft for Cloud Credits Program",
      category: "Partnership",
      date: "February 25, 2025",
      excerpt: "New partnership provides startups with up to ₹10L worth of Microsoft Azure credits and technical support.",
      content: "AITAM RISE Incubator is excited to announce a strategic partnership with Microsoft...",
      featured: true,
      readTime: "4 min read",
      author: "Partnership Team",
      tags: ["Microsoft", "Cloud", "Partnership", "Resources"]
    },
    {
      id: 3,
      title: "IoT Farm Solutions Wins National Innovation Award",
      category: "Awards",
      date: "February 20, 2025",
      excerpt: "Our portfolio startup recognized at the National Innovation Summit for their groundbreaking agricultural IoT solutions.",
      content: "IoT Farm Solutions, incubated at AITAM RISE, has been awarded the prestigious National Innovation Award...",
      featured: false,
      readTime: "2 min read",
      author: "AITAM RISE Team",
      tags: ["Awards", "IoT", "Agriculture", "Innovation"]
    },
    {
      id: 4,
      title: "New Mentor Onboarding: Dr. Rajesh Kumar Joins as CTO Advisor",
      category: "Announcement",
      date: "February 18, 2025",
      excerpt: "Former Google engineer and successful entrepreneur joins our mentor network to guide technology startups.",
      content: "We are thrilled to welcome Dr. Rajesh Kumar to our growing network of mentors...",
      featured: false,
      readTime: "2 min read",
      author: "Mentor Relations",
      tags: ["Mentors", "Technology", "Leadership", "Community"]
    },
    {
      id: 5,
      title: "HealthTech Pro Successfully Graduates from Accelerator Program",
      category: "Success",
      date: "February 15, 2025",
      excerpt: "Telemedicine startup completes our accelerator program with 300% user growth and expansion to 5 new cities.",
      content: "HealthTech Pro has successfully graduated from the AITAM RISE accelerator program...",
      featured: false,
      readTime: "3 min read",
      author: "Program Management",
      tags: ["Graduation", "HealthTech", "Growth", "Telemedicine"]
    },
    {
      id: 6,
      title: "AITAM RISE Expands Lab Facilities with New 3D Printing Equipment",
      category: "Announcement",
      date: "February 12, 2025",
      excerpt: "Investment in advanced 3D printing technology enhances prototyping capabilities for hardware startups.",
      content: "AITAM RISE continues to invest in world-class infrastructure with the addition of cutting-edge 3D printing equipment...",
      featured: false,
      readTime: "3 min read",
      author: "Facilities Team",
      tags: ["Facilities", "3D Printing", "Hardware", "Infrastructure"]
    }
  ];

  const pastEvents = [
    {
      title: "Design Thinking Workshop",
      date: "January 15, 2025",
      participants: 75,
      outcome: "15 new startup ideas generated"
    },
    {
      title: "Blockchain Hackathon",
      date: "December 10-12, 2024",
      participants: 120,
      outcome: "₹75,000 prizes awarded to top 3 teams"
    },
    {
      title: "Women in Tech Summit",
      date: "November 25, 2024",
      participants: 200,
      outcome: "5 new women-led startups launched"
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      "Hackathon": "bg-red-100 text-red-800",
      "Workshop": "bg-blue-100 text-blue-800",
      "Competition": "bg-purple-100 text-purple-800",
      "Networking": "bg-green-100 text-green-800",
      "Mentorship": "bg-orange-100 text-orange-800",
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Success": "bg-green-100 text-green-800",
      "Announcement": "bg-blue-100 text-blue-800",
      "Partnership": "bg-purple-100 text-purple-800",
      "Funding": "bg-yellow-100 text-yellow-800",
      "Awards": "bg-red-100 text-red-800",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  const filteredEvents = upcomingEvents.filter(event => 
    selectedEventType === "All" || event.type === selectedEventType
  );

  const filteredNews = newsArticles.filter(article => 
    selectedNewsCategory === "All" || article.category === selectedNewsCategory
  );

  return (
    
      <div className="overflow-hidden">
        
        {/* Hero Section */}
        <section className="section-padding bg-gradient-primary text-primary-foreground">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6 animate-fade-in">
              News & <span className="text-accent">Events</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-primary-foreground/90 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Stay connected with the latest happenings in our innovation ecosystem. 
              Join events, celebrate successes, and be part of our growing community.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <Tabs defaultValue="events" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="events" className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Upcoming Events</span>
                </TabsTrigger>
                <TabsTrigger value="news" className="flex items-center space-x-2">
                  <Zap className="h-4 w-4" />
                  <span>Latest News</span>
                </TabsTrigger>
              </TabsList>

              {/* Events Tab */}
              <TabsContent value="events">
                
                {/* Event Filters */}
                <div className="mb-8">
                  <h3 className="font-poppins font-semibold text-lg mb-4 flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-accent" />
                    Filter by Event Type
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {eventTypes.map((type) => (
                      <Button
                        key={type.id}
                        variant={selectedEventType === type.id ? "default" : "outline"}
                        onClick={() => setSelectedEventType(type.id)}
                        className={`${selectedEventType === type.id ? 'bg-accent hover:bg-accent/90' : ''}`}
                      >
                        {type.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Featured Events */}
                <div className="mb-12">
                  <h3 className="text-2xl font-poppins font-bold mb-6 flex items-center">
                    <Star className="h-6 w-6 mr-2 text-accent" />
                    Featured Events
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {filteredEvents.filter(event => event.featured).map((event) => (
                      <Card key={event.id} className="card-hover border-accent/20">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge className={getEventTypeColor(event.type)} variant="secondary">
                              {event.type}
                            </Badge>
                            <Badge variant="outline" className="text-accent border-accent">
                              Featured
                            </Badge>
                          </div>
                          
                          <h4 className="text-xl font-poppins font-bold mb-3">{event.title}</h4>
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                          
                          <div className="space-y-2 mb-4 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2 text-accent" />
                              {event.date}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="h-4 w-4 mr-2 text-accent" />
                              {event.time}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2 text-accent" />
                              {event.venue}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Trophy className="h-4 w-4 mr-2 text-accent" />
                              {event.prizes}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {event.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">
                              {event.registrations} registered
                            </span>
                            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                              Register Now
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* All Events */}
                <div className="mb-8">
                  <h3 className="text-2xl font-poppins font-bold mb-6">All Upcoming Events</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredEvents.map((event) => (
                      <Card key={event.id} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <Badge className={getEventTypeColor(event.type)} variant="secondary">
                              {event.type}
                            </Badge>
                            {event.featured && (
                              <Star className="h-4 w-4 text-accent fill-current" />
                            )}
                          </div>
                          
                          <h4 className="font-poppins font-semibold text-lg mb-2">{event.title}</h4>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
                          
                          <div className="space-y-1 mb-4 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="h-3 w-3 mr-2" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <Users className="h-3 w-3 mr-2" />
                              {event.registrations}
                            </div>
                          </div>

                          <Button variant="outline" size="sm" className="w-full">
                            Learn More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Past Events */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold mb-6">Recent Past Events</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {pastEvents.map((event, index) => (
                      <Card key={index} className="card-hover">
                        <CardContent className="p-6">
                          <h4 className="font-poppins font-semibold mb-2">{event.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{event.date}</p>
                          <div className="space-y-1 text-sm">
                            <p><span className="font-medium">{event.participants}</span> participants</p>
                            <p className="text-muted-foreground">{event.outcome}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* News Tab */}
              <TabsContent value="news">
                
                {/* News Filters */}
                <div className="mb-8">
                  <h3 className="font-poppins font-semibold text-lg mb-4 flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-accent" />
                    Filter by Category
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {newsCategories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedNewsCategory === category.id ? "default" : "outline"}
                        onClick={() => setSelectedNewsCategory(category.id)}
                        className={`${selectedNewsCategory === category.id ? 'bg-accent hover:bg-accent/90' : ''}`}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Featured News */}
                <div className="mb-12">
                  <h3 className="text-2xl font-poppins font-bold mb-6 flex items-center">
                    <Star className="h-6 w-6 mr-2 text-accent" />
                    Featured Stories
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {filteredNews.filter(article => article.featured).map((article) => (
                      <Card key={article.id} className="card-hover border-accent/20">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <Badge className={getCategoryColor(article.category)} variant="secondary">
                              {article.category}
                            </Badge>
                            <Badge variant="outline" className="text-accent border-accent">
                              Featured
                            </Badge>
                          </div>
                          
                          <h4 className="text-xl font-poppins font-bold mb-3">{article.title}</h4>
                          <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <Button variant="outline" className="w-full group">
                            Read Full Story
                            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* All News */}
                <div>
                  <h3 className="text-2xl font-poppins font-bold mb-6">Latest Updates</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.map((article) => (
                      <Card key={article.id} className="card-hover">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <Badge className={getCategoryColor(article.category)} variant="secondary">
                              {article.category}
                            </Badge>
                            {article.featured && (
                              <Star className="h-4 w-4 text-accent fill-current" />
                            )}
                          </div>
                          
                          <h4 className="font-poppins font-semibold text-lg mb-2">{article.title}</h4>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                            <span>{article.date}</span>
                            <span>{article.readTime}</span>
                          </div>

                          <Button variant="outline" size="sm" className="w-full">
                            Read More
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-secondary/50">
          <div className="container-custom">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Subscribe to our newsletter to get the latest news, event updates, 
                  and success stories delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
                  />
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    
  );
};

export default NewsEvents;