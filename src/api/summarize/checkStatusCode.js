import { BaseEnum } from "Configs/base";

const yandexStatus = {
  StatusInProgress: 1,
  StatusSuccess: 2,
  StatusError: 3,
  StatusFetchError: 999,
};

class SummarizeStatus extends BaseEnum {
  static Waiting = new SummarizeStatus("waiting").name;
  static Error = new SummarizeStatus("error").name;
  static Success = new SummarizeStatus("success").name;
}

function checkSummarizeCode(res) {
  switch (res.status_code) {
    case yandexStatus.StatusInProgress:
      return {
        status: SummarizeStatus.Waiting,
        title: "Суммаризация...",
        desc: [
          {
            id: 0,
            content: `Ожидание окончания суммаризации текста`,
          },
        ],
      };
    case yandexStatus.StatusFetchError:
      return {
        status: SummarizeStatus.Error,
        title: "Ошибка запроса",
        desc: [
          {
            id: 0,
            content: `Не удалось совершить запрос к Yandex Summarize API`,
          },
        ],
      };
    case yandexStatus.StatusError:
      return {
        status: SummarizeStatus.Error,
        title: "Ошибка YandexGPT",
        desc: [
          {
            id: 0,
            content: "Возникла ошибка при суммаризации текста",
          },
        ],
      };
    case yandexStatus.StatusSuccess:
      return {
        status: SummarizeStatus.Success,
        title: "Успех",
        desc: res.thesis,
      };
    default:
      return {
        status: SummarizeStatus.Error,
        title: "Неизвестная ошибка",
        desc: [
          {
            id: 0,
            content:
              "Во время выполнения что-то пошло не так и не удалось определить результат суммаризации",
          },
        ],
      };
  }
}

export { checkSummarizeCode, SummarizeStatus };
