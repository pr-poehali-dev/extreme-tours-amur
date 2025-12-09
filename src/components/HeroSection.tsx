import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600)',
          filter: 'brightness(0.4)'
        }}
      />
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h2 className="text-6xl md:text-8xl font-bold mb-6 text-shadow-strong">
          ПОЧУВСТВУЙ<br />
          <span className="text-primary">АДРЕНАЛИН</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-shadow-strong">
          Экстремальные туры по Амурской области для тех, кто не боится рисковать
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            <Icon name="Compass" size={24} className="mr-2" />
            ВЫБРАТЬ ТУР
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
            <Icon name="Play" size={24} className="mr-2" />
            СМОТРЕТЬ ВИДЕО
          </Button>
        </div>
      </div>
    </section>
  );
}
