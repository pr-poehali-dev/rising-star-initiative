import { Hero } from "@/components/Hero";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Wrench",
    title: "Слесарный ремонт",
    desc: "Двигатель, ходовая, трансмиссия, тормоза — любая сложность",
  },
  {
    icon: "Paintbrush",
    title: "Кузовной ремонт",
    desc: "Рихтовка, сварка, покраска — восстановим кузов до заводского вида",
  },
  {
    icon: "CircleGauge",
    title: "Диагностика",
    desc: "Компьютерная диагностика любых иномарок — найдём причину быстро",
  },
  {
    icon: "Zap",
    title: "Электрика",
    desc: "Ремонт проводки, датчиков, блоков управления и автоэлектрики",
  },
  {
    icon: "RotateCcw",
    title: "Шиномонтаж",
    desc: "Замена, балансировка, хранение шин — сезонный шиномонтаж",
  },
  {
    icon: "Droplets",
    title: "ТО и замена масла",
    desc: "Регламентное обслуживание, фильтры, жидкости по нормам завода",
  },
];

const advantages = [
  { icon: "ShieldCheck", title: "Гарантия на работы", desc: "Даём письменную гарантию на все виды ремонта" },
  { icon: "Clock", title: "Работаем без выходных", desc: "Принимаем автомобили ежедневно с 8:00 до 21:00" },
  { icon: "BadgeRussianRuble", title: "Честные цены", desc: "Называем стоимость до начала ремонта — без скрытых доплат" },
  { icon: "Car", title: "Любые иномарки", desc: "Opel, Toyota, BMW, Mercedes, Hyundai, Kia и другие марки" },
];

const prices = [
  { service: "Диагностика двигателя", price: "от 500 ₽" },
  { service: "Замена масла и фильтра", price: "от 800 ₽" },
  { service: "Замена тормозных колодок", price: "от 1 200 ₽" },
  { service: "Ремонт ходовой (1 стойка)", price: "от 1 500 ₽" },
  { service: "Компьютерная диагностика", price: "от 700 ₽" },
  { service: "Шиномонтаж (1 колесо)", price: "от 300 ₽" },
];

export default function Index() {
  return (
    <div className="bg-background text-foreground">
      <Hero />

      {/* Услуги */}
      <section id="services" className="container py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">Что мы делаем</p>
        <h2 className="font-sentient text-4xl sm:text-5xl mb-16">
          Все виды <i className="font-light">ремонта</i>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-foreground/10 rounded-2xl p-8 hover:border-foreground/30 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center mb-6">
                <Icon name={s.icon} size={22} className="text-primary" fallback="Wrench" />
              </div>
              <h3 className="font-sentient text-xl mb-3">{s.title}</h3>
              <p className="font-mono text-sm text-foreground/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Преимущества */}
      <section id="why" className="border-t border-foreground/10">
        <div className="container py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">Почему мы</p>
          <h2 className="font-sentient text-4xl sm:text-5xl mb-16">
            Иномаркин — это <i className="font-light">надёжно</i>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {advantages.map((a) => (
              <div key={a.title} className="flex gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-foreground/5 flex items-center justify-center">
                  <Icon name={a.icon} size={22} className="text-primary" fallback="Check" />
                </div>
                <div>
                  <h3 className="font-sentient text-lg mb-1">{a.title}</h3>
                  <p className="font-mono text-sm text-foreground/50">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Цены */}
      <section id="prices" className="border-t border-foreground/10">
        <div className="container py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">Стоимость</p>
          <h2 className="font-sentient text-4xl sm:text-5xl mb-16">
            Прозрачные <i className="font-light">цены</i>
          </h2>
          <div className="max-w-2xl">
            {prices.map((p, i) => (
              <div
                key={p.service}
                className={`flex items-center justify-between py-5 ${i < prices.length - 1 ? "border-b border-foreground/10" : ""}`}
              >
                <span className="font-mono text-sm text-foreground/70">{p.service}</span>
                <span className="font-sentient text-lg text-primary">{p.price}</span>
              </div>
            ))}
          </div>
          <p className="font-mono text-xs text-foreground/30 mt-8">* Точная стоимость определяется после диагностики. Звоните — уточним цену бесплатно.</p>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="border-t border-foreground/10">
        <div className="container py-24">
          <p className="font-mono text-xs uppercase tracking-widest text-foreground/40 mb-4">Записаться</p>
          <h2 className="font-sentient text-4xl sm:text-5xl mb-4">
            Приезжайте в <i className="font-light">Красноярск</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mb-16 max-w-md">
            Запишитесь на удобное время — мастер примет вас без очереди
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Phone" size={18} className="text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Телефон</span>
              </div>
              <a href="tel:+73912000000" className="font-sentient text-2xl hover:text-primary transition-colors">
                +7 (391) 200-00-00
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="MapPin" size={18} className="text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Адрес</span>
              </div>
              <p className="font-sentient text-xl text-foreground/80">
                Красноярск, ул. Ваша улица, д. 1
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 mb-2">
                <Icon name="Clock" size={18} className="text-primary" />
                <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">Режим работы</span>
              </div>
              <p className="font-sentient text-xl text-foreground/80">
                Ежедневно 8:00 — 21:00
              </p>
            </div>
          </div>
          <a
            href="tel:+73912000000"
            className="inline-flex items-center gap-3 border border-foreground/20 hover:border-foreground/60 transition-colors duration-300 font-mono text-sm uppercase tracking-widest px-8 py-4 rounded-full"
          >
            <Icon name="Phone" size={16} />
            Позвонить сейчас
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10">
        <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-foreground/30">© 2024 Иномаркин. Автосервис в Красноярске.</p>
          <p className="font-mono text-xs text-foreground/20">Любые иномарки · Гарантия на работы</p>
        </div>
      </footer>
    </div>
  );
}
