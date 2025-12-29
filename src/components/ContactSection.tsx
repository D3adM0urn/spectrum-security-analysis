import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { AnimatedSection, useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ContactSectionProps {
  onConsultationClick: () => void;
}

const ContactSection = ({ onConsultationClick }: ContactSectionProps) => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  const handleDownloadPresentation = () => {
    const link = document.createElement('a');
    link.href = '/КП_SPK-SPECTRUM_15 сентября 2025.pdf';
    link.download = 'КП_SPK-SPECTRUM_15 сентября 2025.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <span className="text-sm font-mono text-primary">Контакты</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Готовы <span className="text-gradient">начать?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Получите профессиональную консультацию по безопасности вашего бизнеса
            </p>
          </AnimatedSection>

          <div ref={cardsRef} className="grid sm:grid-cols-2 gap-6 mb-12">
            <div 
              className={`group p-8 rounded-3xl border-gradient bg-gradient-card hover:scale-[1.02] transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent p-[1px] mb-6">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <Icon name="Mail" className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-2 font-mono">Email</div>
              <a href="mailto:info@spc-spectrum.ru" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                info@spc-spectrum.ru
              </a>
            </div>

            <div 
              className={`group p-8 rounded-3xl border-gradient bg-gradient-card hover:scale-[1.02] transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary p-[1px] mb-6">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <Icon name="MapPin" className="w-6 h-6 text-foreground" />
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-2 font-mono">Офис</div>
              <span className="text-xl font-bold text-foreground">Магнитогорск, Россия</span>
            </div>
          </div>

          <AnimatedSection className="flex flex-col sm:flex-row items-center justify-center gap-4" delay={200}>
            <Button 
              size="lg" 
              onClick={onConsultationClick}
              className="bg-gradient-to-r from-primary to-accent text-foreground hover:opacity-90 px-8 h-14 text-lg group w-full sm:w-auto"
            >
              <Icon name="Send" className="w-5 h-5 mr-2" />
              Заказать звонок
              <Icon name="ArrowRight" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleDownloadPresentation}
              className="border-border text-foreground hover:bg-secondary/50 px-8 h-14 text-lg w-full sm:w-auto"
            >
              Скачать презентацию
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
