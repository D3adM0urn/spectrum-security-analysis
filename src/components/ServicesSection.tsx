import Icon from "@/components/ui/icon";
import { AnimatedSection, useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  const services = [
    {
      icon: "UserCheck",
      title: "Кадровый профайлинг",
      description: "Комплексная оценка персонала с использованием психологических методов и анализа цифровых следов",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: "Activity",
      title: "Полиграф",
      description: "Психофизиологические исследования для выявления скрытой информации и фактов обмана",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: "Search",
      title: "OSINT и мониторинг",
      description: "Репутационная безопасность через анализ открытых источников",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "Code",
      title: "Разработка ПО",
      description: "Профессиональная разработка программного обеспечения для технической безопасности",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: "Shield",
      title: "Корпоративная безопасность",
      description: "Комплексные решения для защиты от внутренних и внешних угроз",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: "PenTool",
      title: "Графологический анализ",
      description: "Профессиональный анализ почерка для оценки личностных качеств",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "Database",
      title: "DLP система",
      description: "Внедрение систем предотвращения утечек данных для защиты конфиденциальной информации",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <Icon name="Sparkles" className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-primary">Наши услуги</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Комплексные решения <span className="text-gradient">безопасности</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональная защита вашего бизнеса от внутренних и внешних угроз
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${service.color} p-[1px]`}>
                <div className="h-full bg-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-[1px] mb-6`}>
                    <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                      <Icon name={service.icon as any} className="w-7 h-7 text-foreground" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  <div className="flex items-center text-primary group-hover:gap-2 transition-all">
                    <span className="text-sm font-mono">Подробнее</span>
                    <Icon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
