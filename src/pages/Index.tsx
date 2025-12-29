import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactDialog from "@/components/ContactDialog";

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onConsultationClick={() => setIsDialogOpen(true)} />
      
      <main>
        <HeroSection onConsultationClick={() => setIsDialogOpen(true)} />
        <AboutSection />
        <ServicesSection />
        <AdvantagesSection />
        <TeamSection />
        <ContactSection onConsultationClick={() => setIsDialogOpen(true)} />
      </main>

      <Footer />

      <ContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
}
