import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const reviews = [
  { id: 1, name: 'Алексей Петров', rating: 5, text: 'Невероятные ощущения! Сплав по Амуру - это что-то запредельное. Команда профессионалов.', tour: 'Сплав по Амуру' },
  { id: 2, name: 'Мария Сидорова', rating: 5, text: 'Восхождение на Пик Победы - мечта всей жизни! Спасибо за безопасность и поддержку.', tour: 'Покорение Пика Победы' },
  { id: 3, name: 'Дмитрий Ковалев', rating: 5, text: 'Кайтинг зимой - это космос! Скорость, ветер, свобода. Вернусь еще!', tour: 'Зимний кайтинг' }
];

export default function FooterSections() {
  return (
    <>
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
    </>
  );
}
