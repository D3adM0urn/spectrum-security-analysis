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
            <div className="flex items-center gap-3">
              <span className="text-xl text-foreground" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                SPK
              </span>
              <span className="w-2 h-2 bg-gradient-to-br from-primary to-accent" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} />
              <span className="text-xl text-foreground" style={{ fontFamily: '"Press Start 2P", monospace' }}>
                SPECTRUM
              </span>
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