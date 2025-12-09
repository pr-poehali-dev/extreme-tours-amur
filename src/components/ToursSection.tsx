import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
    title: 'ПОКОРЕНИЕ ВЕРШИНЫ СТАНОВОГО ХРЕБТА',
    description: 'Экстремальный подъём по вершине. Преодоление сложных участков.',
    difficulty: 'Экстремальный',
    duration: '3 дня',
    price: 85000,
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800',
    category: 'Водные'
  },
  {
    id: 2,
    title: 'ШАМБАЛА ПИНЕЖЬЕ',
    description: 'Восхождение на одну из высочайших вершин Дальнего Востока. Для опытных альпинистов.',
    difficulty: 'Экстремальный',
    duration: '1 день',
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

export default function ToursSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
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
  );
}