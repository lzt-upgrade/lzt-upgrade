/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTContestsDB class implementation
 *
 */

class LZTContestsDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpContests', objectKey = 'contests', version = 1) {
    super(
      name,
      objectKey,
      version,
      [ // indexes
        'contestsTen',
        'contestsAll',
        'contestsInfoTop',
        'contestsBtnTopInBlock',
        'contestsHideTags',
        'contestsAutoClose',
        'contestsRmContent',
      ],
      { // indexesWithTypes
        'contestsTen': 'number',
        'contestsAll': 'number',
        'contestsInfoTop': 'number',
        'contestsBtnTopInBlock': 'number',
        'contestsHideTags': 'number',
        'contestsAutoClose': 'number',
        'contestsRmContent': 'number',
      },
      { // defaultData
        key: objectKey,
        contestsTen: 0,
        contestsAll: 0,
        contestsInfoTop: 0,
        contestsBtnTopInBlock: 0,
        contestsHideTags: 0,
        contestsAutoClose: 0,
        contestsRmContent: 0,
      }
    );
  };

  async update({
    contestsTen,
    contestsAll,
    contestsInfoTop,
    contestsBtnTopInBlock,
    contestsHideTags,
    contestsAutoClose,
    contestsRmContent,
  }) {
    super.update(...arguments);
  }
}