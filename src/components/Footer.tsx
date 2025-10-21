import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SPK-SPECTRUM</h3>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:info@spk-spectrum.ru" className="flex items-center hover:text-primary transition-colors">
                <Icon name="Mail" className="h-4 w-4 mr-2" />
                info@spk-spectrum.ru
              </a>
              <a href="tel:+79000000000" className="flex items-center hover:text-primary transition-colors">
                <Icon name="Phone" className="h-4 w-4 mr-2" />
                +7 (900) 000-00-00
              </a>
              <div className="flex items-start">
                <Icon name="MapPin" className="h-4 w-4 mr-2 mt-0.5" />
                <span>Россия</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <div className="space-y-2 text-sm">
              <Link 
                to="/privacy" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} SPK-SPECTRUM. Все права защищены.{' '}
            <Link to="/privacy" className="text-primary hover:underline">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}