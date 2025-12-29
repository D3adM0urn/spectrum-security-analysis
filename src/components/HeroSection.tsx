import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

interface HeroSectionProps {
  onConsultationClick: () => void;
}

const HeroSection = ({ onConsultationClick }: HeroSectionProps) => {
  const handleDownloadPresentation = () => {
    const link = document.createElement('a');
    link.href = '/КП_SPK-SPECTRUM_15 сентября 2025.pdf';
    link.download = 'КП_SPK-SPECTRUM_15 сентября 2025.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <Badge variant="outline" className="mb-6 px-4 py-2 border-border bg-secondary/50 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-slow mr-2 inline-block" />
              Профессиональные услуги безопасности
            </Badge>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Корпоративная безопасность{" "}
              <span className="text-gradient">нового уровня</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Защитите свой бизнес от внутренних угроз с помощью комплексной оценки персонала, 
              полиграфа и OSINT-разведки
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              onClick={onConsultationClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 h-14 text-lg group"
            >
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Получить консультацию
              <Icon name="ArrowRight" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadPresentation}
              className="border-border bg-secondary/50 backdrop-blur-sm hover:bg-secondary px-8 h-14 text-lg"
            >
              <Icon name="FileText" className="mr-2 h-5 w-5" />
              Скачать презентацию
            </Button>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: "Shield", value: "15+", label: "лет опыта специалистов" },
                { icon: "Award", value: "50+", label: "проверенных методик" },
                { icon: "Users", value: "100%", label: "внимания каждому клиенту" },
                { icon: "Clock", value: "24/7", label: "поддержка" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-2xl border-gradient bg-gradient-card backdrop-blur-sm"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Icon name={stat.icon as any} className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
