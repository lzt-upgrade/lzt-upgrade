import { LZTUpgradeDB } from 'IndexedDB/default';


/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTProfileDB class implementation
 *
 */

class LZTProfileDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpProfile', objectKey = 'uniqueStyle', version = 1) {
    super(
      name,
      objectKey,
      version,
      { // indexes
        'usernameStyle': 'string',
        'bannerStyle': 'string',
        'bannerText': 'string',
        'badgeIcon': 'string',
        'badgeText': 'string',
        'badgeFill': 'string',
        'badgeStroke': 'string',
        'noticesMarks': 'string',
        'backgroundImage': 'string',
        'backgroundImageEverywhere': 'number',
        'badgeIcons': 'object'
      },
      { // defaultData
        key: objectKey,
        usernameStyle: '',
        bannerStyle: '',
        bannerText: '',
        badgeIcon: '',
        badgeText: '',
        badgeFill: '',
        badgeStroke: '',
        noticesMarks: '',
        backgroundImage: '',
        backgroundImageEverywhere: 0,
        badgeIcons: []
      }
    );
  };

  async update({
    usernameStyle,
    bannerStyle,
    bannerText,
    badgeIcon,
    badgeText,
    badgeFill,
    badgeStroke,
    noticesMarks,
    backgroundImage,
    backgroundImageEverywhere,
    badgeIcons
  }) {
    super.update(...arguments);
  }
}

export { LZTProfileDB };