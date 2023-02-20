/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTSettingsDB class implementation
 *
 */

class LZTSettingsDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpSettings', objectKey = 'settings', version = 1) {
    super(
      name,
      objectKey,
      version,
      [ // indexes
        'checkUpdatesOnLoad',
      ],
      { // indexesWithTypes
        'checkUpdatesOnLoad': 'number',
      },
      { // defaultData
        key: objectKey,
        checkUpdatesOnLoad: 1,
      }
    );
  };

  async update({
    checkUpdatesOnLoad,
  }) {
    super.update(...arguments);
  }
}