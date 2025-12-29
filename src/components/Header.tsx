import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface HeaderProps {
  onConsultationClick: () => void;
}

const Header = ({ onConsultationClick }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent p-[1px]">
              <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                <Icon name="Shield" className="w-6 h-6 text-foreground" />
              </div>
            </div>
            <div>
              <div className="text-xl font-bold text-foreground">SPK-SPECTRUM</div>
              <div className="text-xs text-muted-foreground font-mono">
                Корпоративная безопасность
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#services"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              О нас
            </a>
            <a
              href="#team"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Команда
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-mono"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden md:block text-sm text-muted-foreground font-mono">
              info@spc-spectrum.ru
            </span>
            <Button
              onClick={onConsultationClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Консультация
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
