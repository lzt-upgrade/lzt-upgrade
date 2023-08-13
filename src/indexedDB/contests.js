import { LZTUpgradeDB } from 'IndexedDB/default';


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
      { // indexes
        'openTenContestsBtn': 'number',
        'infoTopInThread': 'number',
        'hideTagsInThread': 'number',
        'autoCloseOnParticipate': 'number',
        'removeContent': 'number',
        'removePoll': 'number',
        'updateCaptchaButton': 'number',
        'autoFixCaptcha': 'number',
      },
      { // defaultData
        key: objectKey,
        openTenContestsBtn: 0,
        infoTopInThread: 0,
        hideTagsInThread: 0,
        autoCloseOnParticipate: 0,
        removeContent: 0,
        removePoll: 0,
        updateCaptchaButton: 0,
        autoFixCaptcha: 0,
      }
    );
  };

  async update({
    openTenContestsBtn,
    infoTopInThread,
    hideTagsInThread,
    autoCloseOnParticipate,
    removeContent,
    removePoll,
    updateCaptchaButton,
    autoFixCaptcha,
  }) {
    super.update(...arguments);
  }
}

export { LZTContestsDB };