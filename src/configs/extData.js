const extData = () => {
  return {
    nodes: {
      // nodes of the forum
      contests: '.node766',
    },
    selectors: {
      // elements of the forum
      memberCard: '.xenOverlay.memberCard',
    },
    uiElementsId: {
      // id of the element for extension UI
      lztupTempSubMenu: 'LZTUpTempSubMenu'
    },
    uiElementsSelectors: {
      // selectors of the element for extension UI
      lztupTempSubMenu: '#LZTUpTempSubMenu'
    },
    links: {
      // for self-ad on site Maintenance page
      telegramChannel: 'https://t.me/lzt_upgrade',
      githubPage: 'https://github.com/lzt-upgrade/lzt-upgrade',
    },
    infoLinks: [
      // for info section in menu
      {
        icon: 'far fa-donate',
        title: 'Поддержать разработку',
        desc: 'Можете немного закинуть, если хотите <img src="/styles/default/xenforo/smilies/ok_lol.png" class="mceSmilie" alt=":ok_lol:" title="Lol">',
        href: 'https://lzt.market/balance/transfer?redirect=https%3A%2F%2Fzelenka.guru&username=Toil',
        sectionId: 'LZTUpInfoDonateItem'
      },
      {
        icon: 'far fa-comments',
        title: 'Тема на форуме',
        desc: 'Новости об обновлениях и отзывы других пользователей',
        href: 'https://zelenka.guru/threads/1', // TODO: add link to forum theme after release
        sectionId: 'LZTUpInfoThreadItem'
      },
      {
        icon: 'fab fa-telegram-plane',
        title: 'Telegram канал',
        desc: 'Все новости расширения и анонсы новых функций',
        href: 'https://t.me/lzt_upgrade',
        sectionId: 'LZTUpInfoTGChannelItem'
      },
      {
        icon: 'fab fa-telegram-plane',
        title: 'Telegram чат',
        desc: 'Чатик для общения с другими пользователями расширения',
        href: 'https://t.me/lzt_upgrade_chat',
        sectionId: 'LZTUpInfoTGChatItem'
      },
      {
        icon: 'fab fa-github',
        title: 'Github',
        desc: 'Исходники расширения + все версии расширения',
        href: 'https://github.com/lzt-upgrade/lzt-upgrade',
        sectionId: 'LZTUpInfoGithubItem'
      },
      {
        icon: 'far fa-code-branch',
        title: 'Greasy Fork',
        desc: 'Альтернативный источник для установки расширения',
        href: 'https://github.com/lzt-upgrade/lzt-upgrade',
        sectionId: 'LZTUpInfoGreasyForkItem'
      },
      {
        icon: 'far fa-tasks',
        title: 'Следить за разработкой',
        desc: 'Доска задач нашего расширения',
        href: 'https://app.weeek.net/ws/438227/shared/board/4prKcWJhKKxLuKNm0CiP7qJEZUH3quST',
        sectionId: 'LZTUpInfoFollowDevItem'
      },
    ]
  }
}

export default extData();