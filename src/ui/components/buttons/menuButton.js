import { menuButtonCallback } from "Callbacks/menuButton";
import config from "Configs/config";

import "Styles/buttons.scss";

const menuButton = document.createElement("li");
const link = document.createElement("a");
link.id = "LZTUpButton";
link.innerText = config.extName;

menuButton.appendChild(link);
menuButton.onclick = menuButtonCallback;

export default menuButton;
