const config = () => {
    return {
        'titleSeparator': '–',
        'siteName': 'LZT Upgrade', // Название сайта
        'siteMetaDescription': 'LZT Upgrade — это расширение для Lolzteam, созданное для удобного время препровождения на сайте Lolzteam.',
        'siteDomain': 'https://lztupgrade.toiloff.ru', // Домен сайта (с https)
        'forumDomain': 'zelenka.guru', // Домен форума (без https)
        'clientId': 'APP CLIENT ID', // https://zelenka.guru/account/api
        'expirationTime': 15_552_000, // Срок действия куки в секундах
        'productionStatus': true, // Применение настроек для продакшена (https only)
        'support': [
            {
                'title': 'Telegram', // Название блока
                'status': true, // Включено/выключено
                'type': 'link', // modal or link
                'icon': 'simple-icons:telegram', // Иконка
                'href': 'https://t.me/lzt_upgrade' // Ссылка на Телеграм
            },
            {
                'title': 'Github', // Название блока
                'status': true, // Включено/выключено
                'type': 'link', // modal or link
                'icon': 'mdi:github', // Иконка
                'href': 'https://github.com/ilyhalight/lzt-upgrade' // Ссылка на ваш Гитхаб
            },
            {
                'title': 'Lolzteam', // Название блока
                'status': true, // Включено/выключено
                'type': 'link', // modal or link
                'icon': 'mdi:forum', // Иконка
                'href': 'https://zelenka.guru/members/667866' // Ссылка на ваш Гитхаб
            },
        ]
    }
}

export default config();