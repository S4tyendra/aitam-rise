import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Startups from "./pages/Startups";
import Ecosystem from "./pages/Ecosystem";
import NewsEvents from "./pages/NewsEvents";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Apply from "./pages/Apply";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services";
import Facilities from "./pages/Facilities";

// New Page Imports
import Vision from "./pages/about/Vision";
import Mission from "./pages/about/Mission";
import Governance from "./pages/about/Governance";
import Team from "./pages/about/Team";
import FocusAreas from "./pages/about/FocusAreas";

import PreIncubationSupport from "./pages/services/PreIncubationSupport";
import IncubationSupport from "./pages/services/IncubationSupport";
import Mentorship from "./pages/services/Mentorship";
import Networking from "./pages/services/Networking";
import FundingAssistance from "./pages/services/FundingAssistance";

import RiseCohort1 from "./pages/programs/RiseCohort1";
import Problemathon from "./pages/programs/Problemathon";
import Ideathon from "./pages/programs/Ideathon";

import Idealab from "./pages/facilities/Idealab";
import CoWorkingSpace from "./pages/facilities/CoWorkingSpace";
import Labs from "./pages/facilities/Labs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* About Us Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/vision" element={<Vision />} />
          <Route path="/about/mission" element={<Mission />} />
          <Route path="/about/governance" element={<Governance />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/focus-areas" element={<FocusAreas />} />

          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/pre-incubation" element={<PreIncubationSupport />} />
          <Route path="/services/incubation" element={<IncubationSupport />} />
          <Route path="/services/mentorship" element={<Mentorship />} />
          <Route path="/services/networking" element={<Networking />} />
          <Route path="/services/funding" element={<FundingAssistance />} />

          {/* Programs Routes */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/rise-cohort-1" element={<RiseCohort1 />} />
          <Route path="/programs/problemathon" element={<Problemathon />} />
          <Route path="/programs/ideathon" element={<Ideathon />} />

          {/* Facilities Routes */}
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/idealab" element={<Idealab />} />
          <Route path="/facilities/co-working" element={<CoWorkingSpace />} />
          <Route path="/facilities/labs" element={<Labs />} />

          {/* Other Top-level Routes */}
          <Route path="/partners" element={<Ecosystem />} />
          <Route path="/startups" element={<Startups />} />
          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;