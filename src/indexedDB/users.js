import { LZTUpgradeDB } from 'IndexedDB/default';


/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTUsersDB class implementation
 *
 */

class LZTUsersDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpUsers', objectKey = 'users', version = 1) {
    super(
      name,
      objectKey,
      version,
      [ // indexes
        'showUseridInProfile',
        'showFullRegInProfile',
        'disableShowTyping',
      ],
      { // indexesWithTypes
        'showUseridInProfile': 'number',
        'showFullRegInProfile': 'number',
        'disableShowTyping': 'number',
      },
      { // defaultData
        key: objectKey,
        showUseridInProfile: 0,
        showFullRegInProfile: 0,
        disableShowTyping: 0,
      }
    );
  };

  async update({
    showUseridInProfile,
    showFullRegInProfile,
    disableShowTyping,
  }) {
    super.update(...arguments);
  }
}

export { LZTUsersDB };