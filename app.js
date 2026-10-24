// ============================================================
// КАТАЛОГ СНАРЯЖЕНИЯ CORIOLIS
// ============================================================

// ---------- КАТЕГОРИИ И ДАННЫЕ ----------

const CATEGORIES = [
  {
    id: "weapons",
    label: "Оружие",
    columns: [
      { key: "sub",      label: "Тип" },
      { key: "name",     label: "Название" },
      { key: "bonus",    label: "Бонус" },
      { key: "init",     label: "Иниц." },
      { key: "dmg",      label: "Урон" },
      { key: "crit",     label: "Крит" },
      { key: "range",    label: "Дист." },
      { key: "features", label: "Особенности" },
      { key: "tech",     label: "Тех." },
      { key: "price",    label: "Цена" }
    ],
    items: [
      // Пистолеты
      { sub: "Пистолеты", name: "Вулкан-сверчок",             bonus: "+1", init: "+2", dmg: "2", crit: "2", range: "Короткая",  features: "Лёгкий",                                    tech: "Обычный",     price: "700" },
      { sub: "Пистолеты", name: "Вулкан-пистолет",            bonus: "+1", init: "+1", dmg: "2", crit: "2", range: "Короткая",  features: "Надёжный",                                  tech: "Обычный",     price: "500" },
      { sub: "Пистолеты", name: "Вулкан-пистолет Аракс Омир", bonus: "0",  init: "0",  dmg: "3", crit: "2", range: "Короткая",  features: "+2 к Манипуляции при угрозе",                tech: "Обычный",     price: "1200" },
      { sub: "Пистолеты", name: "Вулкан-Скорпион",            bonus: "-1", init: "+1", dmg: "2", crit: "2", range: "Короткая",  features: "Автоматический огонь",                       tech: "Обычный",     price: "1000" },
      { sub: "Пистолеты", name: "Ускорительный пистолет",     bonus: "+1", init: "0",  dmg: "2", crit: "1", range: "Длинная",   features: "Бесшумный",                                 tech: "Обычный",     price: "700" },
      { sub: "Пистолеты", name: "Термический сверчок",        bonus: "+1", init: "+2", dmg: "3", crit: "2", range: "Короткая",  features: "Лёгкий",                                    tech: "Продвинутый", price: "2500" },
      { sub: "Пистолеты", name: "Термический пистолет",       bonus: "+1", init: "+1", dmg: "3", crit: "2", range: "Длинная",   features: "—",                                          tech: "Продвинутый", price: "2300" },
      { sub: "Пистолеты", name: "Шоковый пистолет",           bonus: "+1", init: "+1", dmg: "2", crit: "Шок", range: "Короткая",  features: "Шок",                                       tech: "Продвинутый", price: "2000" },

      // Карабины
      { sub: "Карабины", name: "Вулкан-карабин",                    bonus: "+1", init: "0", dmg: "3", crit: "2", range: "Короткая",  features: "Автоматический огонь",                                                                  tech: "Обычный",     price: "2000" },
      { sub: "Карабины", name: "Карабин легионера Даял-3",          bonus: "+1", init: "0", dmg: "3", crit: "2", range: "Длинная",   features: "Автоматический огонь, Высокая ёмкость, Встроенный гранатомёт",                            tech: "Обычный*",    price: "3000" },
      { sub: "Карабины", name: "Вулкан PDW",                        bonus: "+1", init: "1", dmg: "3", crit: "2", range: "Короткая",  features: "Автоматический огонь",                                                                  tech: "Обычный",     price: "2500" },
      { sub: "Карабины", name: "Ускорительный карабин",             bonus: "+1", init: "0", dmg: "3", crit: "1", range: "Длинная",   features: "Автоматический огонь, Бронебойный, Бесшумный",                                          tech: "Обычный",     price: "3000" },
      { sub: "Карабины", name: "Сдвоенный карабин",                 bonus: "+1", init: "0", dmg: "4", crit: "2", range: "Длинная",   features: "Бронебойный, Бесшумный",                                                               tech: "Обычный",     price: "3700" },
      { sub: "Карабины", name: "Термический карабин",               bonus: "+1", init: "0", dmg: "4", crit: "2", range: "Длинная",   features: "Термическая волна",                                                                    tech: "Продвинутый", price: "6500" },

      // Дробовики
      { sub: "Дробовики", name: "Дробовик Саладина",     bonus: "+2", init: "0",  dmg: "2", crit: "2", range: "Короткая", features: "Однозарядный",       tech: "Примитивный", price: "200" },
      { sub: "Дробовики", name: "Дробовик-винтовка",     bonus: "+2", init: "0",  dmg: "2", crit: "2", range: "Короткая", features: "—",                  tech: "Обычный",     price: "400" },
      { sub: "Дробовики", name: "Обрезанный дробовик",   bonus: "+2", init: "+1", dmg: "2", crit: "3", range: "Короткая", features: "—",                  tech: "Обычный",     price: "400" },
      { sub: "Дробовики", name: "Дробовик-карабин",      bonus: "+2", init: "+1", dmg: "2", crit: "2", range: "Короткая", features: "Автоматический огонь", tech: "Обычный",     price: "600" },

      // Винтовки
      { sub: "Винтовки", name: "Длинная винтовка",                    bonus: "0",  init: "0",  dmg: "2", crit: "2", range: "Длинная",   features: "Однозарядная",                                                                                tech: "Примитивный", price: "100" },
      { sub: "Винтовки", name: "Обрезанная длинная винтовка",         bonus: "0",  init: "+1", dmg: "2", crit: "2", range: "Короткая",  features: "Однозарядная",                                                                                tech: "Примитивный", price: "100" },
      { sub: "Винтовки", name: "Ускорительная винтовка",              bonus: "+1", init: "0",  dmg: "3", crit: "1", range: "Предельная", features: "Бронебойная, Ночной прицел, Бесшумная",                                                       tech: "Обычный",     price: "2000" },
      { sub: "Винтовки", name: "Ускорительная винтовка Нестера Парокс", bonus: "0",  init: "0",  dmg: "4", crit: "1", range: "Предельная", features: "Тяжёлая, Противотранспортная, Бронебойная, Ночной прицел, Бесшумная",                          tech: "Обычный",     price: "3000" },
      { sub: "Винтовки", name: "Термическая винтовка",                bonus: "0",  init: "0",  dmg: "5", crit: "2", range: "Предельная", features: "Бронебойная, Ночной прицел",                                                                   tech: "Продвинутый", price: "6000" },

      // Тяжёлое оружие
      { sub: "Тяжёлое", name: "Вулкан-пулемёт",           bonus: "+1", init: "0", dmg: "4",      crit: "2",      range: "Короткая",   features: "Тяжёлый, Громоздкий, Автоматический огонь, Высокая ёмкость",                                  tech: "Обычный*",    price: "6500" },
      { sub: "Тяжёлое", name: "Ускорительный пулемёт",    bonus: "+1", init: "0", dmg: "3",      crit: "1",      range: "Длинная",    features: "Тяжёлый, Громоздкий, Автоматический огонь, Высокая ёмкость, Бронебойный, Бесшумный",           tech: "Обычный*",    price: "10000" },
      { sub: "Тяжёлое", name: "Ускорительный гранатомёт", bonus: "+1", init: "0", dmg: "Граната", crit: "1",      range: "Длинная",    features: "Тяжёлый",                                                                                     tech: "Обычный*",    price: "8000" },
      { sub: "Тяжёлое", name: "Ракетная установка",       bonus: "0",  init: "0", dmg: "6",      crit: "1",      range: "Предельная", features: "Тяжёлая, Однозарядная, Противотранспортная",                                                 tech: "Обычный*",    price: "900" },
      { sub: "Тяжёлое", name: "Огнемёт",                  bonus: "1",  init: "0", dmg: "3",      crit: "1",      range: "Короткая",   features: "Тяжёлый, Огонь 3",                                                                            tech: "Обычный*",    price: "1800" },
      { sub: "Тяжёлое", name: "Гранатомёт",               bonus: "0",  init: "0", dmg: "Граната", crit: "Граната", range: "Длинная",    features: "Однозарядный",                                                                                tech: "Обычный*",    price: "1200" },
      { sub: "Тяжёлое", name: "Термический пулемёт",      bonus: "1",  init: "0", dmg: "4",      crit: "1",      range: "Длинная",    features: "Тяжёлый, Громоздкий, Термическая волна, Высокая ёмкость",                                     tech: "Продвинутый*", price: "22000" },

      // Корабельные системы
      { sub: "Корабельные", name: "Ракетная система",           bonus: "+2", init: "0", dmg: "—", crit: "—", range: "Предельная", features: "Противотранспортная",                                         tech: "Обычный*",    price: "10000" },
      { sub: "Корабельные", name: "Термический проектор",       bonus: "+2", init: "0", dmg: "4", crit: "1", range: "Короткая",   features: "Термическая волна, Огонь 5, Громоздкий",                       tech: "Продвинутый*", price: "26000" },
      { sub: "Корабельные", name: "Система «Огненный шторм»",   bonus: "+1", init: "0", dmg: "5", crit: "1", range: "Длинная",    features: "Противотранспортная, Медленная, Огонь 6, Сила взрыва",         tech: "Обычный*",    price: "18000" },

      // Прочее
      { sub: "Прочее", name: "Духовая трубка",    bonus: "0",  init: "+2", dmg: "1",           crit: "4",           range: "Короткая", features: "Лёгкая, Однозарядная",        tech: "Примитивный", price: "50" },
      { sub: "Прочее", name: "Метательный нож",    bonus: "0",  init: "+1", dmg: "1",           crit: "2",           range: "Короткая", features: "Лёгкий",                      tech: "Примитивный", price: "50" },
      { sub: "Прочее", name: "Метательное копьё",  bonus: "+1", init: "+1", dmg: "2",           crit: "2",           range: "Короткая", features: "—",                           tech: "Примитивный", price: "150" },
      { sub: "Прочее", name: "Метательный топор",  bonus: "0",  init: "0",  dmg: "2",           crit: "2",           range: "Короткая", features: "—",                           tech: "Примитивный", price: "300" },
      { sub: "Прочее", name: "Копьеметалка",       bonus: "0",  init: "0",  dmg: "2",           crit: "2",           range: "Короткая", features: "Тяжёлая, Однозарядная",        tech: "Примитивный", price: "600" },
      { sub: "Прочее", name: "Гарпун",             bonus: "+1", init: "+1", dmg: "2",           crit: "3",           range: "Короткая", features: "Тяжёлый, Однозарядный",        tech: "Примитивный", price: "200" },
      { sub: "Прочее", name: "Боевой лук",         bonus: "+1", init: "+1", dmg: "3 / Граната", crit: "2 / Граната", range: "Длинная",  features: "Однозарядный",                tech: "Обычный",     price: "2000" }
    ]
  },

  {
    id: "armor",
    label: "Броня",
    columns: [
      { key: "name",     label: "Название" },
      { key: "armor",    label: "Класс брони" },
      { key: "features", label: "Особенности" },
      { key: "extra",    label: "Доп." },
      { key: "tech",     label: "Тех." },
      { key: "price",    label: "Цена" }
    ],
    items: [
      { name: "Лёгкая примитивная броня",  armor: "2",  features: "Громоздкая",                                                                              extra: "—", tech: "Примитивный",  price: "300" },
      { name: "Тяжёлая примитивная броня", armor: "3",  features: "Громоздкая",                                                                              extra: "—", tech: "Примитивный",  price: "600" },
      { name: "Полётный костюм",           armor: "1",  features: "—",                                                                                       extra: "—", tech: "Обычный",      price: "500" },
      { name: "Защитная одежда",           armor: "3",  features: "—",                                                                                       extra: "—", tech: "Обычный",      price: "1000" },
      { name: "Экзо-оболочка",             armor: "2",  features: "Громоздкая, Термостатический костюм, Вакуумный костюм, Запас кислорода",                  extra: "—", tech: "Обычный",      price: "2000" },
      { name: "Усиленная экзо-оболочка",   armor: "3",  features: "Громоздкая, Термостатический костюм, Вакуумный костюм, Запас кислорода",                  extra: "1", tech: "Обычный",      price: "3000" },
      { name: "Лёгкая броня",              armor: "4",  features: "—",                                                                                       extra: "1", tech: "Обычный",      price: "5500" },
      { name: "Тяжёлая броня",             armor: "6",  features: "—",                                                                                       extra: "1", tech: "Обычный",      price: "10000" },
      { name: "Аблятивные пластины",       armor: "—",  features: "Снижает урон от одного попадания на 3",                                                   extra: "—", tech: "Продвинутый*", price: "2000" },
      { name: "Бронированный экзоскелет",  armor: "9",  features: "Термостатический костюм, Вакуумный костюм, Запас кислорода, Усиленные экзо-сервоприводы",  extra: "2", tech: "Продвинутый*", price: "25000" },
      { name: "Боевой экзоскелет",         armor: "10", features: "Термостатический костюм, Вакуумный костюм, Запас кислорода, Усиленные экзо-сервоприводы",  extra: "5", tech: "Продвинутый*", price: "60000" },
      { name: "Щит",                       armor: "2",  features: "Тяжёлый",                                                                                  extra: "—", tech: "Примитивный",  price: "100" },
      { name: "Противоударный щит",        armor: "4",  features: "Тяжёлый",                                                                                  extra: "—", tech: "Обычный",      price: "500" },
      { name: "Боевой щит",                armor: "6",  features: "Тяжёлый",                                                                                  extra: "—", tech: "Обычный",      price: "800" }
    ]
  },

  {
    id: "medicine",
    label: "Медицина",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Баллистический м-инъектор",    bonus: "+1",    price: "1000",      weight: "Лёгкий",    tech: "Обычный" },
      { name: "Биомонитор",                   bonus: "—",     price: "5000",      weight: "Лёгкий",    tech: "Обычный" },
      { name: "Сумка врача",                  bonus: "±0",    price: "300",       weight: "Обычный",   tech: "Примитивный" },
      { name: "Травяное средство",            bonus: "-1",    price: "50",        weight: "Лёгкий",    tech: "Примитивный" },
      { name: "Медкит (аптечка)",             bonus: "+2",    price: "700",       weight: "Обычный",   tech: "Обычный" },
      { name: "М-доза",                       bonus: "+1",    price: "50",        weight: "Лёгкий",    tech: "Обычный" },
      { name: "Медлаб",                       bonus: "+3",    price: "5000",      weight: "—",         tech: "Обычный" },
      { name: "Наркотики, усиливающие разум", bonus: "+1/-1", price: "200",       weight: "Крошечный", tech: "Обычный*" },
      { name: "П-доза",                       bonus: "+2/+3", price: "1000",      weight: "Лёгкий",    tech: "Фракционный*" },
      { name: "Яд",                           bonus: "—",     price: "300–3000",  weight: "Крошечный", tech: "Примитивный" },
      { name: "Паук-доктор",                  bonus: "—",     price: "5000",      weight: "Тяжёлый",   tech: "Продвинутый*" },
      { name: "Травма-кит",                   bonus: "+3",    price: "2000",      weight: "Обычный",   tech: "Продвинутый" },
      { name: "Травма-доза",                  bonus: "+2",    price: "200",       weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Травма-лаб",                   bonus: "+4/+5", price: "20000",     weight: "—",         tech: "Продвинутый*" }
    ]
  },

  {
    id: "tools",
    label: "Инструменты",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Резак",                    bonus: "—",  price: "800",   weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Запчасть, примитивная",    bonus: "—",  price: "50",    weight: "Лёгкий",    tech: "Примитивный" },
      { name: "Запчасть, обычная",        bonus: "—",  price: "200",   weight: "Лёгкий",    tech: "Обычный" },
      { name: "Запчасть, продвинутая",    bonus: "—",  price: "1000",  weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Термический резак",        bonus: "—",  price: "3000",  weight: "Тяжёлый",   tech: "Продвинутый" },
      { name: "Инструменты, примитивные", bonus: "—",  price: "100",   weight: "Тяжёлый",   tech: "Примитивный" },
      { name: "Инструменты, обычные",     bonus: "—",  price: "500",   weight: "Обычный",   tech: "Обычный" },
      { name: "Инструменты, продвинутые", bonus: "+1", price: "1500",  weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Вакуумный герметик",       bonus: "—",  price: "500",   weight: "Лёгкий",    tech: "Обычный" },
      { name: "Мастерская, примитивная",  bonus: "+1", price: "400",   weight: "—",         tech: "Примитивный" },
      { name: "Мастерская, обычная",      bonus: "+1", price: "2000",  weight: "—",         tech: "Обычный" },
      { name: "Мастерская, продвинутая",  bonus: "+2", price: "15000", weight: "—",         tech: "Продвинутый" }
    ]
  },

  {
    id: "survival",
    label: "Выживание",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Искусственные жабры",          bonus: "—",  price: "2500", weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Баллистический картограф",     bonus: "—",  price: "4000", weight: "Крошечный", tech: "Продвинутый*" },
      { name: "Бинокль",                      bonus: "+1", price: "100",  weight: "Лёгкий",    tech: "Примитивный" },
      { name: "Коробка-палатка",              bonus: "—",  price: "2000", weight: "Обычный",   tech: "Продвинутый" },
      { name: "Химический огнетушитель",      bonus: "—",  price: "300",  weight: "Обычный",   tech: "Обычный" },
      { name: "Компас",                       bonus: "+1", price: "100",  weight: "Крошечный", tech: "Примитивный" },
      { name: "Ныряльное снаряжение",         bonus: "—",  price: "1000", weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Аварийная сигнальная ракета",  bonus: "—",  price: "50",   weight: "Лёгкий",    tech: "Примитивный" },
      { name: "Сканер окружающей среды",      bonus: "+2", price: "400",  weight: "Лёгкий",    tech: "Обычный" },
      { name: "Фильтрующая маска",            bonus: "—",  price: "300",  weight: "Лёгкий",    tech: "Обычный" },
      { name: "Гипертрос",                    bonus: "+1", price: "200",  weight: "Крошечный", tech: "Обычный" },
      { name: "Конденсатор влаги",            bonus: "—",  price: "2000", weight: "Крошечный", tech: "Обычный" },
      { name: "Питательные пилюли",           bonus: "—",  price: "250",  weight: "Крошечный", tech: "Продвинутый" },
      { name: "Питательный рециркулятор",     bonus: "—",  price: "3000", weight: "Крошечный", tech: "Продвинутый" },
      { name: "Портативная лаборатория",      bonus: "+2", price: "2000", weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Палатка под давлением",        bonus: "—",  price: "1200", weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Паучий костюм",                bonus: "+3", price: "4000", weight: "Лёгкий",    tech: "Продвинутый*" },
      { name: "Маска выживания",              bonus: "—",  price: "500",  weight: "Лёгкий",    tech: "Обычный" },
      { name: "Паёк выживания",               bonus: "—",  price: "100",  weight: "Крошечный", tech: "Обычный" },
      { name: "Термостатический костюм",      bonus: "+1", price: "1100", weight: "Обычный",   tech: "Обычный" },
      { name: "Очиститель воды",              bonus: "—",  price: "1000", weight: "Лёгкий",    tech: "Обычный" }
    ]
  },

  {
    id: "vehicles",
    label: "Транспорт",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Бронированный гравикрафт",     bonus: "—",     price: "40000", weight: "—",         tech: "Обычный" },
      { name: "Гусеничный вездеход",          bonus: "—",     price: "6000",  weight: "—",         tech: "Обычный" },
      { name: "Дрон",                         bonus: "—",     price: "4000",  weight: "—",         tech: "Обычный" },
      { name: "Экзо-оболочка",                bonus: "-2",    price: "2000",  weight: "—",         tech: "Обычный" },
      { name: "Гравибайк",                    bonus: "+2",    price: "3000",  weight: "—",         tech: "Обычный" },
      { name: "Гравикрафт",                   bonus: "+1",    price: "15000", weight: "—",         tech: "Обычный" },
      { name: "Гравитационный пояс",          bonus: "—",     price: "4500",  weight: "Тяжёлый",   tech: "Продвинутый" },
      { name: "Наземный погрузчик",           bonus: "—",     price: "10000", weight: "—",         tech: "Обычный" },
      { name: "Ручной реактивный двигатель",  bonus: "+1",    price: "700",   weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Реактивный ранец",             bonus: "+1/+2", price: "1600",  weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Экзоскелет-погрузчик",         bonus: "+2",    price: "3000",  weight: "—",         tech: "Обычный" },
      { name: "Модуль дистанционного управления", bonus: "—", price: "2000",  weight: "Крошечный", tech: "Обычный" },
      { name: "Рельсовый погрузчик",          bonus: "—",     price: "4000",  weight: "—",         tech: "Обычный" },
      { name: "Водный реактивный двигатель",  bonus: "+1",    price: "1100",  weight: "Тяжёлый",   tech: "Обычный" }
    ]
  },

  {
    id: "recon",
    label: "Разведка",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Костюм-хамелеон",       bonus: "+2", price: "3000", weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Фиброскоп",             bonus: "—",  price: "3000", weight: "Крошечный", tech: "Продвинутый" },
      { name: "Детектор лжи",          bonus: "+2", price: "1800", weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Механическая отмычка",  bonus: "—",  price: "50",   weight: "Лёгкий",    tech: "Примитивный" },
      { name: "Маска-модулятор",       bonus: "—",  price: "5000", weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Датчик приближения",    bonus: "—",  price: "1200", weight: "Обычный",   tech: "Обычный" },
      { name: "Разведывательный зонд", bonus: "+3", price: "2000", weight: "Обычный",   tech: "Обычный" },
      { name: "Планшет безопасности",  bonus: "—",  price: "700",  weight: "Лёгкий",    tech: "Обычный" }
    ]
  },

  {
    id: "combat",
    label: "Боевое",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Продвинутый прицел",      bonus: "+1", price: "5000", weight: "Крошечный", tech: "Продвинутый*" },
      { name: "Командный блок",          bonus: "—",  price: "2300", weight: "Лёгкий",    tech: "Обычный*" },
      { name: "Термоядерная батарея",    bonus: "—",  price: "3000", weight: "Тяжёлый",   tech: "Обычный" },
      { name: "Ночной прицел",           bonus: "—",  price: "1000", weight: "Крошечный", tech: "Обычный" },
      { name: "Оптический прицел",       bonus: "+1", price: "200",  weight: "Крошечный", tech: "Примитивный" },
      { name: "Перезарядка, примитивная", bonus: "—", price: "5",    weight: "Лёгкий",    tech: "Примитивный" },
      { name: "Перезарядка, обычная",    bonus: "—",  price: "50",   weight: "Лёгкий",    tech: "Обычный" },
      { name: "Перезарядка, вибро",      bonus: "+1", price: "200",  weight: "Лёгкий",    tech: "Обычный*" },
      { name: "Перезарядка, продвинутая",bonus: "—",  price: "50",   weight: "Лёгкий",    tech: "Продвинутый" },
      { name: "Сенсорный прицел",        bonus: "+1", price: "2000", weight: "Крошечный", tech: "Обычный" },
      { name: "Глушитель сигнала",       bonus: "—",  price: "1500", weight: "Лёгкий",    tech: "Обычный*" }
    ]
  },

  {
    id: "everyday",
    label: "Повседневное",
    columns: [
      { key: "name",   label: "Название" },
      { key: "bonus",  label: "Бонус" },
      { key: "price",  label: "Цена" },
      { key: "weight", label: "Вес" },
      { key: "tech",   label: "Тех." }
    ],
    items: [
      { name: "Арраш (наркотик)",                    bonus: "-1",       price: "25",                  weight: "Крошечный",         tech: "Примитивный" },
      { name: "Энергоячейка",                        bonus: "—",        price: "50",                  weight: "Крошечный",         tech: "Обычный" },
      { name: "Одежда",                              bonus: "—",        price: "50–1000",             weight: "Крошечный",         tech: "П/О/Пд" },
      { name: "Коммуникатор — Личный (I)",           bonus: "—",        price: "200",                 weight: "Крошечный",         tech: "Обычный" },
      { name: "Коммуникатор — Короткий (II)",        bonus: "—",        price: "500",                 weight: "Лёгкий",            tech: "Обычный" },
      { name: "Коммуникатор — Длинный (III)",        bonus: "—",        price: "1000",                weight: "Лёгкий",            tech: "Обычный" },
      { name: "Коммуникатор — Орбитальный (IV)",     bonus: "—",        price: "2000",                weight: "Тяжёлый",           tech: "Обычный" },
      { name: "Коммуникатор — Системный (V)",        bonus: "—",        price: "5000",                weight: "Тяжёлый",           tech: "Обычный" },
      { name: "Коммуникатор — Импульсный",           bonus: "—",        price: "1000",                weight: "Крошечный",         tech: "Обычный*" },
      { name: "Компьютер",                           bonus: "-3/-1/+1", price: "10000/15000/20000",   weight: "Обычный",           tech: "П/О/Пд" },
      { name: "Голограф",                            bonus: "—",        price: "1500–7300",           weight: "Крошечный–Тяжёлый", tech: "Продвинутый" },
      { name: "Камбра (наркотик)",                   bonus: "+1",       price: "250",                 weight: "Крошечный",         tech: "Обычный" },
      { name: "Языковой модуль",                     bonus: "—",        price: "10000",               weight: "Крошечный",         tech: "Продвинутый" },
      { name: "Библиотечная база данных",            bonus: "+1/+3",    price: "1500/2000",           weight: "Крошечный",         tech: "Продвинутый" },
      { name: "Модулятор",                           bonus: "—",        price: "12000",               weight: "Обычный",           tech: "Продвинутый" },
      { name: "Музыкальный инструмент",              bonus: "+1",       price: "100–1000",            weight: "Лёгкий–Тяжёлый",    tech: "П/О" },
      { name: "Опор (наркотик)",                     bonus: "-2",       price: "50",                  weight: "Крошечный",         tech: "Примитивный" },
      { name: "Прокси-шлем",                         bonus: "—",        price: "500",                 weight: "Лёгкий",            tech: "Обычный" },
      { name: "Прокси-трип",                         bonus: "-2",       price: "100",                 weight: "Крошечный",         tech: "Обычный" },
      { name: "Табак",                               bonus: "—",        price: "25",                  weight: "Крошечный",         tech: "Примитивный" },
      { name: "Табула (планшет)",                    bonus: "—",        price: "2000",                weight: "Лёгкий",            tech: "Обычный" },
      { name: "Таг (чип-накопитель)",                bonus: "—",        price: "50",                  weight: "Крошечный",         tech: "Обычный" },
      { name: "Талисман",                            bonus: "—",        price: "50",                  weight: "Крошечный",         tech: "Примитивный" },
      { name: "Транзактор (удостоверение)",          bonus: "—",        price: "100",                 weight: "Крошечный",         tech: "Обычный" },
      { name: "Усилитель голоса",                    bonus: "—",        price: "400",                 weight: "Лёгкий",            tech: "Обычный" }
    ]
  },

  {
    id: "cybernetics",
    label: "Кибернетика",
    columns: [
      { key: "type",   label: "Тип" },
      { key: "name",   label: "Талант" },
      { key: "commercial", label: "Коммерческое название" }
    ],
    items: [
      { type: "Имплант", name: "Ускоренные рефлексы",     commercial: "Celer-Delekta Flexplant" },
      { type: "Имплант", name: "Активные сенсоры",        commercial: "Nyala Sonar Implant Exxis" },
      { type: "Имплант", name: "Броня тела",              commercial: "Nestera Bio Armor MK II" },
      { type: "Имплант", name: "Эндоскелет",              commercial: "Tilides EndoX" },
      { type: "Имплант", name: "Встроенное оружие",       commercial: "Xoar Thermal Wrist Indigo" },
      { type: "Имплант", name: "Защита от погоды",        commercial: "Celer-Delekta Endothermic Capsule" },
      { type: "Имплант", name: "Кожные электроды",        commercial: "Xoar Shockhand" },
      { type: "Имплант", name: "Комлинк",                 commercial: "Hyperion Head Link MK I" },
      { type: "Имплант", name: "Детектор лжи",            commercial: "Hyperion Linguistic & Socio-Arithmetic Unit" },
      { type: "Имплант", name: "Кибернетические мышцы",   commercial: "Celer-Delekta Sprintplant" },
      { type: "Имплант", name: "Прицельный модуль",       commercial: "Nestera AccVision" },
      { type: "Имплант", name: "Пассивные сенсоры",       commercial: "Nyala Thermo Sensors" },
      { type: "Имплант", name: "Усилитель голоса",        commercial: "Hyperion Larynx Implant MK II" },
      { type: "Имплант", name: "Сервозамки",              commercial: "Tilides ServoX" },
      { type: "Имплант", name: "Языковой модулятор",      commercial: "The Foundation's Linguist Base" },
      { type: "Имплант", name: "Дыхание под водой",       commercial: "Nestra Aqualung Dipridon" },
      { type: "Бионика", name: "Регенерация",             commercial: "Yahmin's Closing Wounds" },
      { type: "Бионика", name: "Встроенное оружие",       commercial: "Hamurbi's Bone Claws" },
      { type: "Бионика", name: "Интеллект",               commercial: "Doctor Zvijamin's Logic" },
      { type: "Бионика", name: "Морф",                    commercial: "Afr's Winged Morph" },
      { type: "Бионика", name: "Ловкость",                commercial: "Dijmad's Refined Touch" },
      { type: "Бионика", name: "Быстрота",                commercial: "Bio-Nerves of the Jaguar" },
      { type: "Бионика", name: "Красота",                 commercial: "Nefriti's Grace" }
    ]
  }
];

// ============================================================
// СОСТОЯНИЕ
// ============================================================

const state = {
  activeTab: "weapons",
  search: "",
  sortKey: null,
  sortDir: 1  // 1 = asc, -1 = desc
};

// ============================================================
// УТИЛИТЫ
// ============================================================

function techClass(tech) {
  if (!tech) return "";
  const t = tech.toLowerCase();
  if (t.includes("примитив")) return "tech-primitive";
  if (t.includes("продвинут")) return "tech-advanced";
  if (t.includes("фракц"))     return "tech-faction";
  if (t.includes("обычн"))     return "tech-ordinary";
  return "";
}

function getCategory(id) {
  return CATEGORIES.find(c => c.id === id);
}

function normalize(s) {
  return (s || "").toString().toLowerCase();
}

function itemMatches(item, query) {
  if (!query) return true;
  const q = normalize(query);
  return Object.values(item).some(v => normalize(v).includes(q));
}

function getItemsForView() {
  if (state.search) {
    // Поиск глобальный — по всем категориям
    const result = [];
    CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (itemMatches(item, state.search)) {
          result.push({ item, category: cat });
        }
      });
    });
    return result;
  } else {
    // Показываем активную вкладку
    const cat = getCategory(state.activeTab);
    return cat.items.map(item => ({ item, category: cat }));
  }
}

function sortResults(results) {
  if (!state.sortKey) return results;
  const key = state.sortKey;
  const dir = state.sortDir;
  return [...results].sort((a, b) => {
    const va = a.item[key] ?? "";
    const vb = b.item[key] ?? "";
    const na = parseFloat(String(va).replace(/[^\d.-]/g, ""));
    const nb = parseFloat(String(vb).replace(/[^\d.-]/g, ""));
    if (!isNaN(na) && !isNaN(nb)) {
      return (na - nb) * dir;
    }
    return String(va).localeCompare(String(vb), "ru") * dir;
  });
}

// ============================================================
// РЕНДЕР: ВКЛАДКИ
// ============================================================

function renderTabs() {
  const nav = document.getElementById("tabs");
  nav.innerHTML = CATEGORIES.map(cat => {
    const count = cat.items.length;
    const active = cat.id === state.activeTab && !state.search ? "active" : "";
    return `<button class="tab ${active}" data-tab="${cat.id}">
      ${cat.label}<span class="count">${count}</span>
    </button>`;
  }).join("");

  nav.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      state.activeTab = btn.dataset.tab;
      state.sortKey = null;
      state.sortDir = 1;
      render();
    });
  });
}

// ============================================================
// РЕНДЕР: ТАБЛИЦА
// ============================================================

function renderTable() {
  const content = document.getElementById("content");
  const results = sortResults(getItemsForView());

  if (results.length === 0) {
    content.innerHTML = `<div class="empty">Ничего не найдено</div>`;
    return;
  }

  // Если поиск — показываем все колонки из разных категорий объединённо
  if (state.search) {
    content.innerHTML = renderSearchResults(results);
    attachSortHandlers();
    return;
  }

  // Иначе — таблица активной категории
  const cat = getCategory(state.activeTab);
  content.innerHTML = renderCategoryTable(cat, results);
  attachSortHandlers();
}

function renderCategoryTable(cat, results) {
  const cols = cat.columns;

  const head = cols.map(col => {
    const sorted = state.sortKey === col.key
      ? (state.sortDir === 1 ? "sorted-asc" : "sorted-desc")
      : "";
    return `<th data-sort="${col.key}" class="${sorted}">${col.label}</th>`;
  }).join("");

  const body = results.map(({ item }) => {
    const tds = cols.map(col => {
      const val = item[col.key] ?? "";
      let cls = "";
      if (col.key === "name")  cls = "cell-name";
      if (col.key === "price") cls = "cell-price";
      if (col.key === "sub")   cls = "cell-sub";
      if (col.key === "tech")  cls = "cell-tech " + techClass(val);
      return `<td class="${cls}">${val}</td>`;
    }).join("");
    return `<tr>${tds}</tr>`;
  }).join("");

  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
}

function renderSearchResults(results) {
  // Показываем единую таблицу с колонкой категории
  const cols = [
    { key: "__cat",  label: "Категория" },
    { key: "name",   label: "Название" },
    { key: "__rest", label: "Параметры" }
  ];

  const head = cols.map(col => {
    if (col.key === "__cat" || col.key === "__rest") {
      return `<th>${col.label}</th>`;
    }
    const sorted = state.sortKey === col.key
      ? (state.sortDir === 1 ? "sorted-asc" : "sorted-desc")
      : "";
    return `<th data-sort="${col.key}" class="${sorted}">${col.label}</th>`;
  }).join("");

  const body = results.map(({ item, category }) => {
    // Собираем «параметры» — все поля кроме name, объединённые через « · »
    const params = category.columns
      .filter(c => c.key !== "name")
      .map(c => {
        const v = item[c.key];
        if (v === undefined || v === null || v === "") return null;
        return `${c.label}: ${v}`;
      })
      .filter(Boolean)
      .join(" · ");

    return `<tr>
      <td><span class="cell-cat">${category.label}</span></td>
      <td class="cell-name">${item.name}</td>
      <td>${params || "—"}</td>
    </tr>`;
  }).join("");

  return `
    <div class="table-wrap">
      <table>
        <thead><tr>${head}</tr></thead>
        <tbody>${body}</tbody>
      </table>
    </div>
  `;
}

// ============================================================
// СОРТИРОВКА
// ============================================================

function attachSortHandlers() {
  document.querySelectorAll("th[data-sort]").forEach(th => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (state.sortKey === key) {
        state.sortDir *= -1;
      } else {
        state.sortKey = key;
        state.sortDir = 1;
      }
      renderTable();
    });
  });
}

// ============================================================
// ПОИСК
// ============================================================

function setupSearch() {
  const input = document.getElementById("search");
  const clear = document.getElementById("search-clear");
  const hint  = document.getElementById("search-hint");

  input.addEventListener("input", () => {
    state.search = input.value.trim();
    state.sortKey = null;
    state.sortDir = 1;
    clear.classList.toggle("visible", !!state.search);
    render();
  });

  clear.addEventListener("click", () => {
    input.value = "";
    state.search = "";
    clear.classList.remove("visible");
    state.sortKey = null;
    state.sortDir = 1;
    input.focus();
    render();
  });

  // Пересчёт подсказки при рендере — вынесем отдельно
}

function updateHint() {
  const hint = document.getElementById("search-hint");
  if (!state.search) {
    hint.textContent = "";
    return;
  }
  const results = getItemsForView();
  const total = CATEGORIES.reduce((s, c) => s + c.items.length, 0);
  hint.textContent = `Найдено: ${results.length} из ${total} по всем категориям`;
}

// ============================================================
// ГЛАВНЫЙ РЕНДЕР
// ============================================================

function render() {
  renderTabs();
  renderTable();
  updateHint();
}

// ============================================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================================

function init() {
  setupSearch();
  render();
}

window.addEventListener("load", init);