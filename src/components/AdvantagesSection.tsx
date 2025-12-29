import Icon from "@/components/ui/icon";
import { AnimatedSection, useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdvantagesSection = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  const advantages = [
    {
      icon: "CheckCircle",
      title: "Комплексный подход",
      description: "Полный спектр услуг безопасности от одного поставщика",
    },
    {
      icon: "Award",
      title: "Экспертный опыт",
      description: "15+ лет опыта в области корпоративной безопасности",
    },
    {
      icon: "Lock",
      title: "Конфиденциальность",
      description: "Строгое соблюдение требований безопасности данных",
    },
    {
      icon: "Zap",
      title: "Современные технологии",
      description: "Использование новейших методов анализа и ИИ",
    },
    {
      icon: "Clock",
      title: "Оперативность",
      description: "Быстрое реагирование на угрозы и запросы клиентов",
    },
    {
      icon: "FileCheck",
      title: "Детальная отчетность",
      description: "Подробные аналитические отчеты по всем исследованиям",
    },
  ];

  return (
    <section id="advantages" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <Icon name="Sparkles" className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-primary">Наши преимущества</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Почему выбирают <span className="text-gradient">нас</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход к решению задач в области корпоративной безопасности
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="group p-8 rounded-3xl border-gradient bg-gradient-card hover:-translate-y-2 transition-transform duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={advantage.icon as any} className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
