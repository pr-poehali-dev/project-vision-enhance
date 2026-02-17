import Icon from "@/components/ui/icon";

export default function Featured() {
  return (
    <div id="advantages" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/56ae7473-e71c-4bfb-80d6-cecfa0eafd8b/files/9c1362d5-d626-4e61-b254-ac913a4e5ee4.jpg"
          alt="Погрузка автомобиля на эвакуатор"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <div className="flex flex-col gap-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-2 mt-1">
              <Icon name="Clock" size={20} className="text-black" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-1">Подача от 15 минут</h4>
              <p className="text-neutral-600">Оперативная подача эвакуатора в любую точку города и области</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-2 mt-1">
              <Icon name="Shield" size={20} className="text-black" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-1">Безопасная перевозка</h4>
              <p className="text-neutral-600">Современные платформы с надёжной фиксацией — ваш автомобиль в полной сохранности</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-amber-500 p-2 mt-1">
              <Icon name="Banknote" size={20} className="text-black" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-neutral-900 mb-1">Честные цены</h4>
              <p className="text-neutral-600">Фиксированная стоимость без скрытых доплат. Цена озвучивается сразу при заказе</p>
            </div>
          </div>
        </div>
        <a
          href="tel:+79001234567"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer w-fit uppercase tracking-wide font-bold"
        >
          Узнать стоимость
        </a>
      </div>
    </div>
  );
}
