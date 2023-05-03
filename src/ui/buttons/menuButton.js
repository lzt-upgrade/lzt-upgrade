import { menuButtonCallback } from 'Callbacks/MenuButton';
import config from 'Configs/config';

import 'Styles/buttons.scss';

const menuButton = $(`
  <li>
    <a id="LZTUpButton">${config.extName}</a>
  </li>
`);


menuButton.on('click', menuButtonCallback)

export default menuButton;