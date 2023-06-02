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
      { // indexes
        'showUserIdInProfile': 'number',
        'showUserIdInMemberCard': 'number',
        'showFullRegInProfile': 'number',
        'disableShareTyping': 'number',
      },
      { // defaultData
        key: objectKey,
        showUserIdInProfile: 0,
        showUserIdInMemberCard: 0,
        showFullRegInProfile: 0,
        disableShareTyping: 0,
      }
    );
  };

  async update({
    showUserIdInProfile,
    showUserIdInMemberCard,
    showFullRegInProfile,
    disableShareTyping,
  }) {
    super.update(...arguments);
  }
}

export { LZTUsersDB };