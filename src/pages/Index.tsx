import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import ContactDialog from "@/components/ContactDialog";
import Footer from "@/components/Footer";

export default function Index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-primary">SPK-SPECTRUM</div>
              <div className="text-xs text-muted-foreground">
                Корпоративная безопасность
              </div>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <a
              href="#services"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              О нас
            </a>
            <a
              href="#team"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Команда
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Контакты
            </a>
          </nav>
          <div className="flex items-center space-x-3">
            <span className="hidden md:block text-sm text-muted-foreground">info@spc-spectrum.ru</span>
            <Button 
              className="bg-primary hover:bg-secondary"
              onClick={() => setIsDialogOpen(true)}
            >
              Консультация
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMC0xOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLW9wYWNpdHk9Ii4wMyIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 animate-fade-in">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/20 bg-white/50 backdrop-blur-sm"
              >
                Профессиональные услуги безопасности
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-up">
              Корпоративная безопасность
              <br />
              <span className="gradient-text">Профайлинг и аналитика рисков</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{animationDelay: "0.2s"}}>Защитите свой бизнес от внутренних угроз с помощью комплексной оценки персонала, полиграфа и OSINT-разведки, комплексных IT-продуктов в сфере безопасности

</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up" style={{animationDelay: "0.4s"}}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => setIsDialogOpen(true)}
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 bg-white/50 backdrop-blur-sm"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/КП_SPK-SPECTRUM_15 сентября 2025.pdf';
                  link.download = 'КП_SPK-SPECTRUM_15 сентября 2025.pdf';
                  link.click();
                }}
              >
                <Icon name="FileText" className="mr-2 h-5 w-5" />
                Скачать презентацию
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-xl glass-effect animate-scale-in" style={{animationDelay: "0.6s"}}>
                <div className="text-3xl font-bold gradient-text mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта специалистов</div>
              </div>
              <div className="text-center p-6 rounded-xl glass-effect animate-scale-in" style={{animationDelay: "0.7s"}}>
                <div className="text-3xl font-bold gradient-text mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Проверенных методик</div>
              </div>
              <div className="text-center p-6 rounded-xl glass-effect animate-scale-in" style={{animationDelay: "0.8s"}}>
                <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Внимания каждому клиенту
</div>
              </div>
              <div className="text-center p-6 rounded-xl glass-effect animate-scale-in" style={{animationDelay: "0.9s"}}>
                <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">
              О компании <span className="text-blue-400">SPK-SPECTRUM</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6 animate-fade-up" style={{animationDelay: "0.2s"}}>
              Мы предоставляем комплексные решения в области корпоративной безопасности для защиты вашего бизнеса от внутренних и внешних угроз. 
              Наша команда экспертов использует передовые методы профайлинга, OSINT-анализа и технологии детекции лжи для обеспечения безопасности вашей компании.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed animate-fade-up" style={{animationDelay: "0.4s"}}>15+ лет опыта работы специалистов, более 50 проверенных методик и сотни довольных клиентов — это результат нашей профессиональной работы в сфере корпоративной безопасности.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-muted-foreground border-border"
            >
              Наши услуги
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Комплексные решения безопасности
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессиональная защита вашего бизнеса от внутренних и внешних
              угроз
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 bg-gradient-to-br from-white to-blue-50/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="UserCheck" className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      Кадровый профайлинг
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Комплексная оценка персонала с использованием
                      психологических методов, анализа цифровых следов и
                      выявления рисков нелояльности
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Психологическая оценка кандидатов</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Анализ социальных сетей и цифровых следов</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Выявление антикорпоративных намерений</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 bg-gradient-to-br from-white to-blue-50/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Activity" className="h-8 w-8 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      Полиграф
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Психофизиологические исследования с использованием
                      контактного полиграфа для выявления скрытой информации и
                      фактов обмана
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Проверка на факты шпионажа</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Выявление коррупционных намерений</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Защита коммерческой тайны</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 bg-gradient-to-br from-white to-purple-50/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Search" className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      OSINT и мониторинг
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Репутационная безопасность через мониторинг открытых
                      источников и анализ цифровых следов в
                      интернет-пространстве
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Мониторинг упоминаний о компании</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Предотвращение репутационных кризисов</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Анализ конкурентов и контрагентов</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 bg-gradient-to-br from-white to-green-50/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Code" className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      Разработка ПО
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Профессиональная разработка программного обеспечения для
                      обеспечения технической безопасности и автоматизации
                      процессов
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Тестирование на проникновение</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Full-Stack веб-разработка</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Облачные решения и DevSecOps</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 bg-gradient-to-br from-white to-amber-50/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="Shield" className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      Корпоративная безопасность
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Комплексные решения для защиты организации от внутренних и
                      внешних угроз
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Расследования: внутренние проверки</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>
                          Разработка и внедрение архитектуры безопасности
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>
                          Проверки контрагентов с составлением отчёта по рискам
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Мониторинг информационной среды</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>
                          Аудит системы технической защищенности объектов
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 bg-gradient-to-br from-white to-pink-50/30 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Icon name="PenTool" className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                      Графологический анализ почерка
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Профессиональный анализ почерка для оценки личностных
                      качеств и психологических особенностей
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Кадровый менеджмент</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Составление психологического портрета</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>
                          Детекция лжи на основе графологических следов
                        </span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Оценка благонадежности и личностных качеств</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/50 hover-lift transition-all duration-500 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 md:col-span-2 md:max-w-2xl md:mx-auto shadow-lg group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-gradient-to-br from-indigo-100 to-indigo-300 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Icon name="ShieldCheck" className="h-8 w-8 text-indigo-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 gradient-text group-hover:scale-105 transition-transform">
                      DLP система
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Внедрение и настройка систем предотвращения утечек данных (Data Loss Prevention) для защиты конфиденциальной информации компании
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Развертывание и настройка DLP-системы</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Контроль передачи данных по всем каналам</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Мониторинг и предотвращение утечек информации</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Обучение персонала работе с системой</span>
                      </li>
                      <li className="flex items-center">
                        <Icon
                          name="Check"
                          className="h-4 w-4 text-green-600 mr-3 flex-shrink-0"
                        />
                        <span>Разработка политик безопасности данных</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/20 bg-white/50 backdrop-blur-sm"
            >
              Наша команда
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Профессиональная <span className="gradient-text">экспертиза</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Команда сертифицированных специалистов с многолетним опытом в
              сфере безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="mb-6 p-6 rounded-2xl glass-effect hover-lift transition-all duration-500">
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Shield" className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Эксперты безопасности
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Сертифицированные специалисты с опытом работы в
                  государственных структурах и коммерческой безопасности
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-6 p-6 rounded-2xl glass-effect hover-lift transition-all duration-500">
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Brain" className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  Психологи
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Кандидаты психологических наук, эксперты в области клинической
                  психологии и профайлинга
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="mb-6 p-6 rounded-2xl glass-effect hover-lift transition-all duration-500">
                <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Code" className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  IT-специалисты
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Разработчики с опытом создания систем безопасности, анализа
                  данных и машинного обучения
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-muted-foreground border-border"
            >
              Наши преимущества
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Почему выбирают нас
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Профессиональный подход к решению задач в области корпоративной безопасности</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-6 glass-effect rounded-xl border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 group">
              <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon name="CheckCircle" className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Комплексный подход
                </h3>
                <p className="text-muted-foreground">
                  Полный спектр услуг безопасности от одного поставщика
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 glass-effect rounded-xl border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 group">
              <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon name="Award" className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Экспертный опыт
                </h3>
                <p className="text-muted-foreground">
                  15+ лет опыта в области корпоративной безопасности
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 glass-effect rounded-xl border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 group">
              <div className="p-3 bg-gradient-to-br from-red-100 to-red-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon name="Lock" className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Конфиденциальность
                </h3>
                <p className="text-muted-foreground">
                  Строгое соблюдение требований безопасности данных
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 glass-effect rounded-xl border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 group">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon name="Zap" className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Современные технологии
                </h3>
                <p className="text-muted-foreground">
                  Использование новейших методов анализа и ИИ
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 glass-effect rounded-xl border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 group">
              <div className="p-3 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon name="Clock" className="h-6 w-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Оперативность
                </h3>
                <p className="text-muted-foreground">
                  Быстрое реагирование на угрозы и запросы клиентов
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 glass-effect rounded-xl border-2 border-border hover:border-primary/30 hover-lift transition-all duration-500 group">
              <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <Icon name="FileCheck" className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Детальная отчетность
                </h3>
                <p className="text-muted-foreground">
                  Подробные аналитические отчеты по всем исследованиям
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 text-primary border-primary/20 bg-white/50 backdrop-blur-sm"
            >
              Контакты
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Свяжитесь <span className="gradient-text">с нами</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Получите профессиональную консультацию по вопросам корпоративной
              безопасности
            </p>

            <Card className="bg-gradient-to-br from-white to-blue-50/20 border-2 border-border hover:border-primary/30 shadow-xl hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 rounded-xl glass-effect hover-lift transition-all duration-300">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl">
                        <Icon name="Mail" className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="text-left">
                        <p className="text-foreground font-semibold">Email</p>
                        <p className="text-muted-foreground">info@spc-spectrum.ru</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 p-4 rounded-xl glass-effect hover-lift transition-all duration-300">
                      <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl">
                        <Icon
                          name="MapPin"
                          className="h-6 w-6 text-purple-600"
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-foreground font-semibold">Офис</p>
                        <p className="text-muted-foreground">Магнитогорск, Россия</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-4">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      <Icon name="Phone" className="mr-2 h-5 w-5" />
                      Заказать звонок
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 bg-white/50 backdrop-blur-sm"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/КП_SPK-SPECTRUM_15 сентября 2025.pdf';
                        link.download = 'КП_SPK-SPECTRUM_15 сентября 2025.pdf';
                        link.click();
                      }}
                    >
                      <Icon name="FileText" className="mr-2 h-5 w-5" />
                      Скачать презентацию
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />

      <ContactDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  );
}