import Icon from "@/components/ui/icon";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <AnimatedSection animation="slide-right">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl border-gradient bg-gradient-card" />
              <div className="relative p-12 text-center">
                <div className="text-8xl lg:text-9xl font-bold text-gradient mb-4">SPK</div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground mb-6">SPECTRUM</div>
                <div className="space-y-3 text-muted-foreground">
                  <p className="text-lg">15+ лет опыта специалистов</p>
                  <div className="h-px bg-border w-24 mx-auto" />
                  <p className="text-lg">50+ проверенных методик</p>
                  <div className="h-px bg-border w-24 mx-auto" />
                  <p className="text-lg">Сотни довольных клиентов</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-left" delay={200}>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50">
                <Icon name="Sparkles" className="w-4 h-4 text-accent" />
                <span className="text-sm font-mono text-primary">О компании</span>
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-bold">
                Безопасность вашего <span className="text-gradient">бизнеса</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Мы предоставляем комплексные решения в области корпоративной безопасности 
                для защиты вашего бизнеса от внутренних и внешних угроз.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { icon: "CheckCircle2", text: "Передовые методы профайлинга и анализа" },
                  { icon: "CheckCircle2", text: "OSINT-разведка и мониторинг" },
                  { icon: "CheckCircle2", text: "Технологии детекции лжи" },
                  { icon: "CheckCircle2", text: "Комплексная оценка персонала" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary/20">
                      <Icon name={feature.icon as any} className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;