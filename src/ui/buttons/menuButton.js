import { menuButtonCallback } from 'Callbacks/menuButton';
import config from 'Configs/config';

import 'Styles/buttons.scss';

const menuButton = document.createElement('li');
menuButton.innerHTML = `<a id="LZTUpButton">${config.extName}</a>`;

menuButton.onclick = menuButtonCallback;

export default menuButton;