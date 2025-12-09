import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Tour {
  id: number;
  title: string;
  description: string;
  difficulty: 'Экстремальный' | 'Высокий' | 'Средний';
  duration: string;
  price: number;
  image: string;
  category: string;
}

interface BookingData {
  tourId: number;
  tourTitle: string;
  date: string;
  people: number;
  totalPrice: number;
  name: string;
  phone: string;
  email: string;
}

const tours: Tour[] = [
  {
    id: 1,
    title: 'СПЛАВ ПО АМУРУ',
    description: 'Экстремальный рафтинг по бурным порогам реки Амур. Преодоление сложнейших участков.',
    difficulty: 'Экстремальный',
    duration: '3 дня',
    price: 25000,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    category: 'Водные'
  },
  {
    id: 2,
    title: 'ПОКОРЕНИЕ ПИКА ПОБЕДЫ',
    description: 'Восхождение на одну из высочайших вершин Дальнего Востока. Для опытных альпинистов.',
    difficulty: 'Экстремальный',
    duration: '7 дней',
    price: 45000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    category: 'Горные'
  },
  {
    id: 3,
    title: 'ЗИМНИЙ КАЙТИНГ',
    description: 'Скоростной кайтинг по замерзшим озерам Приамурья. Адреналин на максимум!',
    difficulty: 'Высокий',
    duration: '1 день',
    price: 8000,
    image: 'https://images.unsplash.com/photo-1483732608347-c44d31297194?w=800',
    category: 'Зимние'
  },
  {
    id: 4,
    title: 'ДЖИП-ТУР ПО ТАЙГЕ',
    description: 'Экстремальное бездорожье, переправы через реки, ночевка в дикой природе.',
    difficulty: 'Средний',
    duration: '2 дня',
    price: 18000,
    image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800',
    category: 'Авто'
  },
  {
    id: 5,
    title: 'ПАРАПЛАНЕРИЗМ НАД ЗЕЙСКИМ',
    description: 'Полеты на параплане над водохранищем с высоты птичьего полета.',
    difficulty: 'Высокий',
    duration: '4 часа',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    category: 'Воздушные'
  },
  {
    id: 6,
    title: 'ЛЕДОЛАЗАНИЕ',
    description: 'Восхождение по ледяным стенам замерзших водопадов. Максимальный риск.',
    difficulty: 'Экстремальный',
    duration: '1 день',
    price: 15000,
    image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800',
    category: 'Зимние'
  }
];

const reviews = [
  { id: 1, name: 'Алексей Петров', rating: 5, text: 'Невероятные ощущения! Сплав по Амуру - это что-то запредельное. Команда профессионалов.', tour: 'Сплав по Амуру' },
  { id: 2, name: 'Мария Сидорова', rating: 5, text: 'Восхождение на Пик Победы - мечта всей жизни! Спасибо за безопасность и поддержку.', tour: 'Покорение Пика Победы' },
  { id: 3, name: 'Дмитрий Ковалев', rating: 5, text: 'Кайтинг зимой - это космос! Скорость, ветер, свобода. Вернусь еще!', tour: 'Зимний кайтинг' }
];

function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [currentBooking, setCurrentBooking] = useState<BookingData | null>(null);
  const [bookingForm, setBookingForm] = useState({ date: '', people: 1, name: '', phone: '', email: '' });

  const categories = ['Все', 'Водные', 'Горные', 'Зимние', 'Авто', 'Воздушные'];

  const filteredTours = selectedCategory === 'Все' 
    ? tours 
    : tours.filter(tour => tour.category === selectedCategory);

  const handleBooking = (tour: Tour) => {
    const totalPrice = tour.price * bookingForm.people;
    setCurrentBooking({
      tourId: tour.id,
      tourTitle: tour.title,
      date: bookingForm.date,
      people: bookingForm.people,
      totalPrice,
      name: bookingForm.name,
      phone: bookingForm.phone,
      email: bookingForm.email
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Экстремальный': return 'bg-destructive text-destructive-foreground';
      case 'Высокий': return 'bg-primary text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
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

      <section id="tours" className="py-20 bg-gradient-extreme">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">НАШИ ТУРЫ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Выберите свое приключение
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat)}
                className="text-sm"
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour, index) => (
              <Card 
                key={tour.id} 
                className="overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover" />
                  <Badge className={`absolute top-4 right-4 ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="text-base">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Icon name="Clock" size={16} />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      {tour.price.toLocaleString()} ₽
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full" size="lg">
                        <Icon name="Calendar" size={18} className="mr-2" />
                        ЗАБРОНИРОВАТЬ
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{tour.title}</DialogTitle>
                        <DialogDescription>
                          Заполните форму для бронирования тура
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="date">Дата начала</Label>
                          <Input
                            id="date"
                            type="date"
                            value={bookingForm.date}
                            onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="people">Количество человек</Label>
                          <Input
                            id="people"
                            type="number"
                            min="1"
                            max="10"
                            value={bookingForm.people}
                            onChange={(e) => setBookingForm({...bookingForm, people: parseInt(e.target.value)})}
                          />
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-lg">Итого:</span>
                            <span className="text-3xl font-bold text-primary">
                              {(tour.price * bookingForm.people).toLocaleString()} ₽
                            </span>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input
                            id="name"
                            placeholder="Ваше имя"
                            value={bookingForm.name}
                            onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+7 (999) 999-99-99"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={bookingForm.email}
                            onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                          />
                        </div>
                        <Button 
                          className="w-full" 
                          size="lg"
                          onClick={() => handleBooking(tour)}
                        >
                          <Icon name="Check" size={18} className="mr-2" />
                          ПОДТВЕРДИТЬ БРОНИРОВАНИЕ
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl font-bold mb-6">О НАС</h2>
              <p className="text-lg mb-4">
                <span className="text-primary font-bold">АДРЕНАЛИН</span> — это команда профессионалов с многолетним опытом организации экстремальных туров по Амурской области.
              </p>
              <p className="text-lg mb-6">
                Мы специализируемся на турах высокой сложности для тех, кто ищет настоящие приключения и незабываемые эмоции.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm">Туров</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                  <div className="text-sm">Клиентов</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">8</div>
                  <div className="text-sm">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800" 
                alt="Team"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-gradient-extreme">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">ОТЗЫВЫ</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Что говорят наши клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{review.tour}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">ГАЛЕРЕЯ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
              'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
              'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400',
              'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
              'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400',
              'https://images.unsplash.com/photo-1483732608347-c44d31297194?w=400',
              'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400',
              'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400'
            ].map((img, i) => (
              <div 
                key={i} 
                className="relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-extreme">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12">КОНТАКТЫ</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">г. Благовещенск, ул. Ленина, 123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (924) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@adrenalin-amur.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>СВЯЖИТЕСЬ С НАМИ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="contact-name">Имя</Label>
                  <Input id="contact-name" placeholder="Ваше имя" />
                </div>
                <div>
                  <Label htmlFor="contact-phone">Телефон</Label>
                  <Input id="contact-phone" type="tel" placeholder="+7 (999) 999-99-99" />
                </div>
                <div>
                  <Label htmlFor="contact-message">Сообщение</Label>
                  <Textarea id="contact-message" placeholder="Ваш вопрос или пожелание" rows={4} />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  ОТПРАВИТЬ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Zap" size={28} className="text-primary" />
            <span className="text-2xl font-bold text-primary">АДРЕНАЛИН</span>
          </div>
          <p className="text-muted-foreground mb-4">
            ООО "АДРЕНАЛИН" • Экстремальные туры по Амурской области
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
