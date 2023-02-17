/**
 *
 * @author Toil
 * @license MIT
 * @copyright Toil
 * @created 2023-02-17
 *
 * @description LZTAppearDB class implementation
 *
 */

class LZTAppearDB extends LZTUpgradeDB {
  /**
   *
   *  @constructor
   *  @param {string} name - name of the database
   *  @param {string} objectKey - name of the future indexedDB object
   *  @param {number} version - version of the database
   */

  constructor(name = 'LZTUpAppear', objectKey = 'appear', version = 1) {
    super(
      name,
      objectKey,
      version,
      [ // indexes
        'hideUnreadArticleCircle',
        'hideTagsInThreads',
        'forumLogo',
        'hideCounterAlerts',
        'hideCounterConversations',
        'marketLogo',
        'reportButtonsInPost',
        'theme',
        'themeAutoReload',
        'backgroundEffect',
        'hideOnlyfans',
        'showPollsResults',
      ],
      { // indexesWithTypes
        'hideUnreadArticleCircle': 'number',
        'hideTagsInThreads': 'number',
        'forumLogo': 'number',
        'hideCounterAlerts': 'number',
        'hideCounterConversations': 'number',
        'marketLogo': 'number',
        'reportButtonsInPost': 'string',
        'theme': 'number',
        'themeAutoReload': 'number',
        'backgroundEffect': 'number',
        'hideOnlyfans': 'number',
        'showPollsResults': 'number',
      },
      { // defaultData
        key: objectKey,
        hideUnreadArticleCircle: 0,
        hideTagsInThreads: 0,
        forumLogo: 0,
        hideCounterAlerts: 0,
        hideCounterConversations: 0,
        marketLogo: 0,
        reportButtonsInPost: '',
        theme: 0,
        themeAutoReload: 0,
        backgroundEffect: 0,
        hideOnlyfans: 0,
        showPollsResults: 0
      }
    );
  };

  async update({
    hideUnreadArticleCircle,
    hideTagsInThreads,
    forumLogo,
    hideCounterAlerts,
    hideCounterConversations,
    marketLogo,
    reportButtonsInPost,
    theme,
    themeAutoReload,
    backgroundEffect,
    hideOnlyfans,
    showPollsResults,
  }) {
    super.update(...arguments);
  }
}