/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTUniqueStyleDB class implementation
 *
 */

class LZTUniqueStyleDB extends LZTUpgradeDB {
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
      [ // indexes
        'nickStyle',
        'bannerStyle',
        'bannerText',
        'badgeIcon',
        'badgeText',
        'badgeFill',
        'badgeStroke',
      ],
      { // indexesWithTypes
        'nickStyle': 'string',
        'bannerStyle': 'string',
        'bannerText': 'string',
        'badgeIcon': 'string',
        'badgeText': 'string',
        'badgeFill': 'string',
        'badgeStroke': 'string',
      },
      { // defaultData
        key: objectKey,
        nickStyle: '',
        bannerStyle: '',
        bannerText: '',
        badgeIcon: '',
        badgeText: '',
        badgeFill: '',
        badgeStroke: '',
      }
    );
  };

  async update({
    nickStyle,
    bannerStyle,
    bannerText,
    badgeIcon,
    badgeText,
    badgeFill,
    badgeStroke,
  }) {
    super.update(...arguments);
  }
}