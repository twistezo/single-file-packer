import { ConfigurationParserService } from './ConfigurationParser.js';
import { AdUnitBuilderService } from './AdUnitBuilder.js';
import { AnchorAdService } from './AnchorAd.js';
import { TargetingService } from './Targeting.js';
import { PlayerSponsorService } from './PlayerSponsor.js';
import { Logger } from './Logger.js';

const logger = new Logger('zetads');

export class EurozetAds {
  static parsedConfiguration;
  static adUnitBuilderService = AdUnitBuilderService;
  static targetingService = TargetingService;
  static anchorAdService = AnchorAdService;
  static playerSponsorService = PlayerSponsorService;
  static configurationParserService = ConfigurationParserService;

  static infiniteContentAd = () => {
    // used by Eurozet (do not change!)
    // needs to be refactored to use Yieldbird.infinity
    logger.log('Initialized slot \'infinite\'')
    return this.adUnitBuilderService.defineAdUnits('infinite').pop();
  }

  static hideEmptySlots = (isSponsoredArticle) => {
    if (isSponsoredArticle) {
      googletag.pubads().collapseEmptyDivs(true);
      googletag.pubads().addEventListener('slotRenderEnded', (event) => {
        const { slot, isEmpty } = event;
        let element = window.document.getElementById(slot.getSlotElementId());
        if (isEmpty && element.parentElement.classList.contains(slot.getSlotElementId())) {
          element.parentElement.style.display = 'none';
        }
      });
    }
  }

  static disableYieldbirdRefresh = () => {
    window.yb_configuration = window.yb_configuration || {};
    window.yb_configuration.lazyLoad = true;
    setTimeout(() => {
      const elements = document.querySelectorAll('[id*="div-gpt-ad"]');
      for (const element of elements) {
        element.style.display = 'none';
      }
    }, 500);
    return;
  }

  static setCentering = () => {
    googletag.pubads().addEventListener('slotRenderEnded', (event) => {
      const { slot } = event;
      const styles = {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'width': '100%'
      };
      const element = window.document.getElementById(slot.getSlotElementId());
      try {
        Object.assign(element.style, styles);
      } catch (error) {
        logger.log(`Couldn't set centering on div ${slot.getSlotElementId()}`);
      }
    });
    return;
  }

  static init = (configuration) => {
    logger.log('Eurozet adserver has been initialized.');
    this.parsedConfiguration = this.configurationParserService.init(configuration);
    logger.log('Configuration:', this.parsedConfiguration);
    const { isAdServerEnabled, isSponsoredArticle, lazyLoad } = this.parsedConfiguration;
    if (!isAdServerEnabled) {
      logger.log('Adserver not allowed for this page. Aborting.');
      this.disableYieldbirdRefresh();
      return;
    }

    googletag.cmd.push(() => {
      googletag.pubads().enableLazyLoad(lazyLoad);
      googletag.pubads().setCentering(true);
      this.adUnitBuilderService.init(this.parsedConfiguration);
      this.targetingService.setPublisherTargeting(this.parsedConfiguration);
      this.targetingService.setYieldbirdTargeting();
      this.targetingService.setQueryParamTargeting('version');
      this.adUnitBuilderService.defineAdUnits('standard');
      this.adUnitBuilderService.defineAdUnits('ears');
      const anchor = this.adUnitBuilderService.defineAdUnits('anchor');
      this.anchorAdService.init(anchor, this.parsedConfiguration);
      const playerSponsor = this.adUnitBuilderService.defineAdUnits('sponsorbar_player');
      this.playerSponsorService.init(playerSponsor, this.parsedConfiguration);
      this.hideEmptySlots(isSponsoredArticle);
      this.setCentering();

      googletag.enableServices();
      // googletag.pubads().refresh();
    });
    return;
  }
}

// window.zetads = window.zetads || EurozetAds;
// zetads.init(window.zetads_configuration);
