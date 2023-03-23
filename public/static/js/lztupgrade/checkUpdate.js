async function checkUpdate(useAlert = false) {
  try {
    $.ajax('https://greasyfork.org/ru/scripts/460328-lzt-upgrade').done((e) => {
      if ($(e).find('.script-show-version:last').text() !== GM_info.script.version) {
        Logger.log(`Доступна новая версия расширения ${$(e).find('.script-show-version:last').text()}`);
        return registerModal('Доступно обновление для LZT Upgrade',
        `
          <div id="LZTUpUpdateAlert">
            <p>Доступно обновление расширения LZT Upgrade до версии <strong>${$(e).find('.script-show-version:last').text()}</strong>. Эту проверку можно отключить в настройках расширения.</p>
            <button class="button primary" type="button" onClick="location.href='https://greasyfork.org/ru/scripts/460328-lzt-upgrade/code/lzt-upgrade.user.js?${Math.floor(Date.now() / 1000)}'">Обновиться</button>
          </div>
        `);
      } else if (useAlert) {
        registerAlert('Обновление не требуется. У вас установлена последняя версия расширения LZT Upgrade.', 5000);
      }
    });
  } catch (e) {
    Logger.error('Не удалось проверить обновление расширения', e);
  }
}