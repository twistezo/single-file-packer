import { Logger } from './Logger.js';

const logger = new Logger('zetads');

export class PlayerSponsorService {
  static googletagAdUnit;

  static isInDOM = (selector) => {
    return window.document.contains(window.document.querySelector(selector));
  }

  static displayPlayerSponsor = () => {
    const observer = new MutationObserver(() => {
      if (this.isInDOM(`#${this.googletagAdUnit.getSlotElementId()}`)) {
        googletag.enableServices();
        googletag.display(this.googletagAdUnit);
        googletag.pubads().refresh([this.googletagAdUnit]);        
        observer.disconnect();
        logger.log('Initialized slot \'sponsorbar_player\'.');
      }
    });
    observer.observe(window.document, { childList: true, subtree: true, attributes: true });
    return;
  }

  static init = (googletagAdUnit, configuration) => {
    if (!configuration.host.startsWith('player.')) {
      return;
    }
    [this.googletagAdUnit] = googletagAdUnit;
    this.displayPlayerSponsor();
  }
}
