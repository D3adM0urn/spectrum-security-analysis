import Icon from "@/components/ui/icon";
import { AnimatedSection, useScrollAnimation } from "@/hooks/useScrollAnimation";

const TeamSection = () => {
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>();

  const teamCategories = [
    {
      icon: "Shield",
      title: "Эксперты безопасности",
      description: "Сертифицированные специалисты с опытом работы в государственных структурах",
      stats: "12+ специалистов",
    },
    {
      icon: "Brain",
      title: "Психологи",
      description: "Кандидаты наук, эксперты клинической психологии и профайлинга",
      stats: "8+ экспертов",
    },
    {
      icon: "Code",
      title: "IT-специалисты",
      description: "Разработчики систем безопасности и машинного обучения",
      stats: "15+ инженеров",
    },
  ];

  return (
    <section id="team" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <Icon name="Sparkles" className="w-4 h-4 text-accent" />
            <span className="text-sm font-mono text-primary">Команда</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Эксперты <span className="text-gradient">мирового класса</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Команда сертифицированных специалистов с многолетним опытом
          </p>
        </AnimatedSection>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {teamCategories.map((category, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                cardsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative p-8 rounded-3xl border-gradient bg-gradient-card h-full transition-transform duration-500 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-[1px] mb-6">
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <Icon name={category.icon as any} className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-sm font-mono text-primary">{category.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
