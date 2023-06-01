import { menuButtonCallback } from 'Callbacks/MenuButton';
import config from 'Configs/config';

import 'Styles/buttons.scss';

const menuButton = document.createElement('li');
menuButton.innerHTML = `<a id="LZTUpButton">${config.extName}</a>`;

menuButton.onclick = menuButtonCallback;

export default menuButton;