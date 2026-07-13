import endpoints from "Configs/endpoints.json";
import requestJSON from "API/requestJSON";

async function genSummarize(text, session_id) {
  return await requestJSON(
    endpoints["genSummarize"],
    `Не удалось сгенерировать краткий пересказ текста (${endpoints["genSummarize"]})`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        session_id,
      }),
    },
  );
}

export default {
  genSummarize,
};
