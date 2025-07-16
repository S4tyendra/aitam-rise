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
import Services from "./pages/Services"; // New import
import Facilities from "./pages/Facilities"; // New import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/services" element={<Services />} /> {/* Corrected */}
          <Route path="/services/*" element={<Services />} /> {/* Corrected */}
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/*" element={<Programs />} />
          <Route path="/facilities" element={<Facilities />} /> {/* Corrected */}
          <Route path="/facilities/*" element={<Facilities />} /> {/* Corrected */}
          <Route path="/partners" element={<Ecosystem />} /> {/* Corrected */}
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