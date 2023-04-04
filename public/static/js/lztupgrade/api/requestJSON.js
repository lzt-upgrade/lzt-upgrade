async function requestJSON(endpoint) {
  return $.ajax({
    url: endpoint,
    dataType: 'json',
    success: (value) => {
      return value;
    },
    error: (err) => {
      Logger.log(`Не удалось выполнить запрос к ${endpoint}. Ошибка: ${err}`);
      return [];
    }
  });
}