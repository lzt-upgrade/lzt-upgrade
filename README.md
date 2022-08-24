<h1 align = center> LZT Upgrade </h1>

<p align="center">
  <a href="#user-content-1-доступный-функционал">Функционал</a>
  •
  <a href="#user-content-2-установка-скрипта">Установка</a>
</p>

**LZT Upgrade** (или же **LZTUp**) — Это моя реализация полезных или просто интересных мне скриптов для форума **[Lolz.guru](https://lolz.guru)**

## 1. Доступный функционал
### 1.1. Основной функционал скрипта:
- Кастомизация имени пользователя (применение кастомных стилей, как в "унике")
- Добавление и кастомизация лычки
- Добавление и кастомизация иконки на аватарке
- Добавление кнопки быстрого открытия 10 розыгрышей
- Добавление кнопки быстрого открытия всех прогруженных розыгрышей
- Отображение кнопки "Участвовать" сверху блока с информацией о розыгрыше
- Отображение информации о розыгрыше сверху темы
- Отображение UserID в профиле пользователя
- Отображение полной даты регистрации в профиле пользователя
- Выбор логотипа из нескольких представленных
- Скрытие счётчика сообщений в навбаре
- Скрытие счётчика уведомлений в навбаре
- Дальше больше :)

### 1.2. Внутрискриптовый функционал (доступно для разработки):
- Получение ссылок на розыгрыши (энивей, нужно быть на странице розыгрышей или ничего не сработает)
- Создание своих модальных окон
- Добавление своих кнопок в выпадающем меню
- Добавление своих кнопок в профиле под аватаркой
- Работа с Indexed DB (Создание БД, чтение данных из БД, обновление записей в БД)
- Создание Колор пикеров
- Проверка является ли тред розыгрышем
- Проверка является ли раздел форума разделом розыгрышей
- Проверка произведен ли вход в аккаунт
- Проверка является ли страница страницей пользователя
- Получение UserID пользователя (в профиле)
- Получение ProfileUrl пользователя (в профиле)
- Получение Username пользователя (в профиле)
- Скрытие тегов темы

## 2. Установка скрипта
Установить скрипт будет даже проще, чем его найти:
1. Установите расширение **[Tampermonkey](https://www.tampermonkey.net/)**
2. **[«Установите Скрипт»](https://github.com/ilyhalight/lzt-upgrade/raw/master/lzt-upgrade.user.js)**

## 3. Известные ошибки
Иногда, при нажатии на чек-бокс или на текст привязанный к чек-боксу событие onclick не срабатывает (только в меню расширения)

## Благодарности:
1. **[Simonwep/pickr](https://github.com/Simonwep/pickr)** за создание ColorPicker "Pickr"
2. **[Всем дизайнерам и разработчикам LOLZ](https://lolz.guru/pages/brand/)** за лучший форум :)

## Примечание:
Используя скрипт, вы соглашаетесь с тем, что скрипт может отслеживать нажатия ваших клавиш на форуме (не сохраняет их)

### Если вы будете что-либо делать на основе моего скрипт, то прошу хоть где-нибудь отметить :)
Будут вопросы/идеи пишите в issue/на лолзе/в тг