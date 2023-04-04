# LZT Upgrade Frontend

---

## Установка

1. Установите зависимости
```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```
2. Заполните порт сервера в `.env`

3. Переименуйте файл `/config/config.default.js` в `/config/config.js` и отредактируйте его в соответствие с комментариями

## Разработка

Запустите сервер разработки на http://localhost:3000 (или порту указанном в .env файле)

```bash
npm run dev
```

## Продакшен

Создайте приложение для продакшена:

```bash
npm run build
```

Локальный предварительный просмотр продакшен сборки:

```bash
npm run preview
```

Запуск с помощью PM2:
1. Установите зависимости:
```bash
npm install pm2 -g && pm2 install pm2-logrotate
```
2. Запустите сервер
```bash
pm2 start ecosystem.config.js
```
3. [Если пользуетесь Cloudflare] Отключить Minify HTML в Cloudflare для избежания ошибок

Ознакомьтесь с [документацией по развертыванию](https://nuxt.com/docs/getting-started/deployment ) для получения дополнительной информации.