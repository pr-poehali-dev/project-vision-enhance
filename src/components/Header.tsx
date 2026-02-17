import Icon from "@/components/ui/icon";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide flex items-center gap-2">
          <Icon name="Truck" size={20} />
          <span className="font-bold">Эвакуатор</span>
        </div>
        <nav className="flex gap-8">
          <a
            href="#advantages"
            className="text-white hover:text-amber-400 transition-colors duration-300 uppercase text-sm"
          >
            Преимущества
          </a>
          <a
            href="tel:+79001234567"
            className="text-white hover:text-amber-400 transition-colors duration-300 uppercase text-sm"
          >
            Позвонить
          </a>
        </nav>
      </div>
    </header>
  );
}
