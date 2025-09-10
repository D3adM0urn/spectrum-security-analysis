import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm fixed w-full z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Shield" className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold">SPK-SPECTRUM</span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-secondary transition-colors">Услуги</a>
            <a href="#team" className="hover:text-secondary transition-colors">Команда</a>
            <a href="#advantages" className="hover:text-secondary transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-secondary">
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/img/0c489ad6-b774-4ac0-9781-72fa49302b86.jpg" 
            alt="Security background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-primary/60"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Корпоративная<br />
            <span className="text-secondary">Безопасность</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Профессиональные услуги кадрового профайлинга, психофизиологических исследований и защиты репутации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-primary text-lg px-8 py-4">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black">
              Подробнее
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши Услуги</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Комплексные решения для обеспечения безопасности вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-black/40 border-primary/20 hover:border-secondary/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Icon name="UserCheck" className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-white">Кадровый профайлинг</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Оценка персонала, прогнозирование поведения, выявление антикорпоративных рисков
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Психологическая оценка</li>
                  <li>• Анализ цифровых следов</li>
                  <li>• Soft skills оценка</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-primary/20 hover:border-secondary/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Icon name="Activity" className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-white">Полиграф</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Психофизиологические исследования с использованием контактного полиграфа
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Проверка на шпионаж</li>
                  <li>• Выявление коррупции</li>
                  <li>• Защита коммерческой тайны</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-primary/20 hover:border-secondary/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Icon name="Shield" className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-white">Репутационная безопасность</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  OSINT-анализ и мониторинг интернет-пространства
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Мониторинг упоминаний</li>
                  <li>• Предотвращение кризисов</li>
                  <li>• Анализ конкурентов</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-primary/20 hover:border-secondary/50 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/20 rounded-full w-fit">
                  <Icon name="Code" className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-white">Разработка ПО</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  Профессиональная разработка программного обеспечения на заказ
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Тестирование безопасности</li>
                  <li>• Full-Stack разработка</li>
                  <li>• Облачные решения</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наша Команда</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Опытные специалисты с уникальным профессиональным опытом
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-b from-primary/20 to-black/40 border-secondary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-secondary/20 rounded-full w-fit">
                  <Icon name="UserCheck" className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-white">Эксперты безопасности</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Специалисты с опытом работы в подразделениях по борьбе с организованной преступностью
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-primary/20 to-black/40 border-secondary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-secondary/20 rounded-full w-fit">
                  <Icon name="Brain" className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-white">Психологи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Эксперты в клинической психологии, нейролингвистике и криминалистике
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-b from-primary/20 to-black/40 border-secondary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-secondary/20 rounded-full w-fit">
                  <Icon name="Laptop" className="h-10 w-10 text-secondary" />
                </div>
                <CardTitle className="text-white">IT-разработчики</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center">
                  Дипломированные специалисты с опытом создания продуктов в области безопасности и ML
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Преимущества</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Почему выбирают SPK-Spectrum для решения задач корпоративной безопасности
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-4 p-6 bg-black/20 rounded-lg border border-primary/20">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Icon name="CheckCircle" className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Комплексный подход</h3>
                <p className="text-gray-400">Полный спектр услуг безопасности от одного поставщика</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-black/20 rounded-lg border border-primary/20">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Icon name="Award" className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Экспертный опыт</h3>
                <p className="text-gray-400">15+ лет опыта в области корпоративной безопасности</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-black/20 rounded-lg border border-primary/20">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Icon name="Lock" className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Конфиденциальность</h3>
                <p className="text-gray-400">Строгое соблюдение требований безопасности данных</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-black/20 rounded-lg border border-primary/20">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Icon name="Zap" className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Современные технологии</h3>
                <p className="text-gray-400">Использование новейших методов анализа и ИИ</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-black/20 rounded-lg border border-primary/20">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Icon name="Clock" className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Оперативность</h3>
                <p className="text-gray-400">Быстрое реагирование на угрозы и запросы клиентов</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-black/20 rounded-lg border border-primary/20">
              <div className="p-2 bg-secondary/20 rounded-lg">
                <Icon name="FileCheck" className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-white">Детальная отчетность</h3>
                <p className="text-gray-400">Подробные аналитические отчеты по всем исследованиям</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/60">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-gray-400 text-lg mb-12">
              Получите профессиональную консультацию по вопросам корпоративной безопасности
            </p>
            
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-secondary/30">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary/20 rounded-full">
                        <Icon name="Phone" className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Телефон</p>
                        <p className="text-gray-300">+7 (800) 123-45-67</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary/20 rounded-full">
                        <Icon name="Mail" className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Email</p>
                        <p className="text-gray-300">info@spk-spectrum.ru</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary/20 rounded-full">
                        <Icon name="MapPin" className="h-6 w-6 text-secondary" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Офис</p>
                        <p className="text-gray-300">Москва, Россия</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <Button size="lg" className="mb-4 bg-secondary hover:bg-primary">
                      <Icon name="Phone" className="mr-2 h-5 w-5" />
                      Заказать звонок
                    </Button>
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
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

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Shield" className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">SPK-SPECTRUM</span>
            </div>
            <div className="flex space-x-6">
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                Лицензия ФСБ
              </Badge>
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                ISO 27001
              </Badge>
              <Badge variant="outline" className="text-gray-400 border-gray-600">
                Конфиденциальность
              </Badge>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 SPK-Spectrum. Все права защищены. Профессиональные услуги корпоративной безопасности.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}