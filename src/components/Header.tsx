import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" size={32} className="text-primary" />
            <h1 className="text-2xl font-bold text-primary">АДРЕНАЛИН</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#tours" className="hover:text-primary transition-colors">ТУРЫ</a>
            <a href="#about" className="hover:text-primary transition-colors">О НАС</a>
            <a href="#reviews" className="hover:text-primary transition-colors">ОТЗЫВЫ</a>
            <a href="#gallery" className="hover:text-primary transition-colors">ГАЛЕРЕЯ</a>
            <a href="#contacts" className="hover:text-primary transition-colors">КОНТАКТЫ</a>
          </div>
          <Button className="animate-pulse-glow">
            <Icon name="Phone" size={18} className="mr-2" />
            ПОЗВОНИТЬ
          </Button>
        </nav>
      </div>
    </header>
  );
}
