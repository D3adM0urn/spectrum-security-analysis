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
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge
                variant="outline"
                className="mb-4 text-primary border-primary/20"
              >
                Профессиональные услуги безопасности
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Корпоративная безопасность
              <br />
              <span className="text-primary">Профайлинг и аналитика рисков</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">Защитите свой бизнес от внутренних угроз с помощью комплексной оценки персонала, полиграфа и OSINT-разведки, комплексных IT-продуктов в сфере безопасности

</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-lg px-8 py-4"
                onClick={() => setIsDialogOpen(true)}
              >
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Получить консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-white"
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
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта специалистов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Проверенных методик</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Внимания каждому клиенту
</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">поддержка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              О компании SPK-SPECTRUM
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Мы предоставляем комплексные решения в области корпоративной безопасности для защиты вашего бизнеса от внутренних и внешних угроз. 
              Наша команда экспертов использует передовые методы профайлинга, OSINT-анализа и технологии детекции лжи для обеспечения безопасности вашей компании.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">15+ лет опыта работы специалистов, более 50 проверенных методик и сотни довольных клиентов — это результат нашей профессиональной работы в сфере корпоративной безопасности.</p>
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
            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="UserCheck" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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

            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="Activity" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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

            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="Search" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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

            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="Code" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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

            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="Shield" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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

            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="PenTool" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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

            <Card className="border border-border hover:shadow-md transition-all duration-300 bg-white md:col-span-2 md:max-w-2xl md:mx-auto">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="p-3 bg-slate-100 rounded-lg">
                    <Icon name="ShieldCheck" className="h-8 w-8 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">
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
      <section id="team" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 text-muted-foreground border-border"
            >
              Наша команда
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Профессиональная экспертиза
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Команда сертифицированных специалистов с многолетним опытом в
              сфере безопасности
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center border border-border">
                  <Icon name="Shield" className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Эксперты безопасности
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Сертифицированные специалисты с опытом работы в
                  государственных структурах и коммерческой безопасности
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center border border-border">
                  <Icon name="Brain" className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Психологи
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Кандидаты психологических наук, эксперты в области клинической
                  психологии и профайлинга
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <div className="mx-auto mb-4 w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center border border-border">
                  <Icon name="Code" className="h-8 w-8 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
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
            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg border border-border">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Icon name="CheckCircle" className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Комплексный подход
                </h3>
                <p className="text-muted-foreground">
                  Полный спектр услуг безопасности от одного поставщика
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg border border-border">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Icon name="Award" className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Экспертный опыт
                </h3>
                <p className="text-muted-foreground">
                  15+ лет опыта в области корпоративной безопасности
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg border border-border">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Icon name="Lock" className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Конфиденциальность
                </h3>
                <p className="text-muted-foreground">
                  Строгое соблюдение требований безопасности данных
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg border border-border">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Icon name="Zap" className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Современные технологии
                </h3>
                <p className="text-muted-foreground">
                  Использование новейших методов анализа и ИИ
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg border border-border">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Icon name="Clock" className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  Оперативность
                </h3>
                <p className="text-muted-foreground">
                  Быстрое реагирование на угрозы и запросы клиентов
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg border border-border">
              <div className="p-2 bg-slate-100 rounded-lg">
                <Icon name="FileCheck" className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
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
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 text-muted-foreground border-border"
            >
              Контакты
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Свяжитесь с нами
            </h2>
            <p className="text-muted-foreground text-lg mb-12">
              Получите профессиональную консультацию по вопросам корпоративной
              безопасности
            </p>

            <Card className="bg-white border border-border shadow-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <Icon name="Mail" className="h-6 w-6 text-slate-600" />
                      </div>
                      <div className="text-left">
                        <p className="text-foreground font-semibold">Email</p>
                        <p className="text-muted-foreground">info@spc-spectrum.ru</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-slate-100 rounded-lg">
                        <Icon
                          name="MapPin"
                          className="h-6 w-6 text-slate-600"
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
                      className="bg-primary hover:bg-secondary"
                      onClick={() => setIsDialogOpen(true)}
                    >
                      <Icon name="Phone" className="mr-2 h-5 w-5" />
                      Заказать звонок
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
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