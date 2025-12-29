import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/50">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-[1px]">
                <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                  <Icon name="Shield" className="w-5 h-5 text-foreground" />
                </div>
              </div>
              <div>
                <div className="font-bold text-foreground">SPK-SPECTRUM</div>
                <div className="text-xs text-muted-foreground font-mono">Корпоративная безопасность</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Профессиональные решения в области безопасности для защиты вашего бизнеса
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:info@spc-spectrum.ru" 
                className="flex items-center text-muted-foreground hover:text-primary transition-colors group"
              >
                <Icon name="Mail" className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                info@spc-spectrum.ru
              </a>
              <div className="flex items-start text-muted-foreground">
                <Icon name="MapPin" className="h-4 w-4 mr-2 mt-0.5" />
                <span>Магнитогорск, Россия</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Информация</h3>
            <div className="space-y-3 text-sm">
              <Link 
                to="/privacy" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SPK-SPECTRUM. Все права защищены.{' '}
            <Link to="/privacy" className="text-primary hover:underline font-mono">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}