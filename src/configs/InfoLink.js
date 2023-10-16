export default class InfoLink {
  // Displayed on the modified page with an error
  static Donate = new InfoLink(
    'far fa-donate',
    'Поддержать разработку',
    'Можете немного закинуть, если хотите <img src="/styles/default/xenforo/smilies/ok_lol.png" class="mceSmilie" alt=":ok_lol:" title="Lol">',
    'https://lzt.market/balance/transfer?user_id=667866',
    'LZTUpInfoDonateItem'
  )
  static Thread = new InfoLink(
    'far fa-comments',
    '<span style="color: orange">[SOON]</span> Тема на форуме',
    'Новости об обновлениях и отзывы других пользователей без всякого мусора',
    'https://zelenka.guru/threads/1',
    'LZTUpInfoThreadItem'
  )
  static TelegramChannel = new InfoLink(
    'fab fa-telegram-plane',
    'Telegram канал',
    'Все новости расширения и анонсы новых функций',
    'https://t.me/lzt_upgrade',
    'LZTUpInfoTGChannelItem'
  )
  static TelegramChat = new InfoLink(
    'fab fa-telegram-plane',
    'Telegram чат',
    'Чатик для общения с другими пользователями расширения',
    'https://t.me/lzt_upgrade_chat',
    'LZTUpInfoTGChatItem'
  )
  static Github = new InfoLink(
    'fab fa-github',
    'Github',
    'Исходники расширения + все версии расширения',
    'https://github.com/lzt-upgrade/lzt-upgrade',
    'LZTUpInfoGithubItem'
  )
  static GreasyFork = new InfoLink(
    'far fa-code-branch',
    'Greasy Fork',
    'Альтернативный источник для установки расширения',
    'https://greasyfork.org/ru/scripts/460328-lzt-upgrade',
    'LZTUpInfoGreasyForkItem'
  )
  static DevTasks = new InfoLink(
    'far fa-tasks',
    'Доска задач',
    'Следите за разработкой расширения',
    'https://app.weeek.net/ws/438227/shared/board/4prKcWJhKKxLuKNm0CiP7qJEZUH3quST',
    'LZTUpInfoFollowDevItem'
  )

  constructor(icon, title, desc, href, sectionItemId) {
    this.icon = icon;
    this.title = title;
    this.desc = desc;
    this.href = href;
    this.sectionItemId = sectionItemId;
  }

  static getLinks() {
    return [
      this.Donate,
      this.Thread,
      this.TelegramChannel,
      this.TelegramChat,
      this.Github,
      this.GreasyFork,
      this.DevTasks,
    ]
  }
}