/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-31-03
 *
 * @description LZTAuthDB class implementation
 *
 */

import { LZTUpgradeDB } from '~/utils/indexedDB/default.js';


class LZTAuthDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpAuth', objectKey = 'auth', version = 1) {
    super(
      name,
      objectKey,
      version,
      [ // indexes
        'accessToken'
      ],
      { // indexesWithTypes
        'accessToken': 'string',
      },
      { // defaultData
        key: objectKey,
        accessToken: ''
      }
    );
  };

  async update({
    accessToken
  }) {
    super.update(...arguments);
  }
}

export { LZTAuthDB }