import { Logger } from './Logger.js';

const logger = new Logger('zetads');

export class AdUnitBuilderService {
  static adUnits;

  // static filterAdUnitsByType = (slotType) => {
  //   return this.adUnits.filter((slot) => { return slot.type === slotType });
  // }

  // static defineAdUnits = (slotType) => {
  //   let googletagAdUnits = this.filterAdUnitsByType(slotType);
  //   googletagAdUnits = googletagAdUnits.map((adUnit) => {
  //     let slot;
  //     switch (slotType) {
  //       case 'outofpage':
  //         slot = googletag.defineOutOfPageSlot(adUnit.path, adUnit.divId);
  //         break;
  //       case 'interstitial':
  //         googletag.defineOutOfPageSlot(adUnit.path, googletag.enums.OutOfPageFormat.INTERSTITIAL);
  //         break;
  //       case 'infinite':
  //         slot = googletag.defineSlot(adUnit.path, adUnit.sizes);
  //         break;
  //       case 'sponsorbar_pogoda':
  //         slot = googletag.defineSlot(adUnit.path, adUnit.sizes).setCollapseEmptyDiv(true, true);
  //         break;
  //       default:
  //         slot = googletag.defineSlot(adUnit.path, adUnit.sizes, adUnit.divId);
  //         break;
  //     }
  //     slot.defineSizeMapping(adUnit.mapping);
  //     slot.setTargeting('slotname', adUnit.type);
  //     if (slot) slot.addService(googletag.pubads());

  //     return slot;
  //   });
  //   logger.log(`Defined '${slotType}' ad units.`);
  //   return googletagAdUnits;
  // }

  // static displayAdUnitsOnEvent = (slotType, eventName) => {
  //   let adUnits;
  //   window.addEventListener(eventName, () => {
  //     adUnits = this.defineAdUnits(slotType);
  //     Yieldbird.cmd.push(() => {
  //       Yieldbird.setGPTTargeting(adUnits);
  //     });
  //     googletag.display(adUnits);
  //     googletag.pubads().refresh(adUnits);
  //   });
  //   return adUnits;
  // }

  // static destroyAdUnitsOnEvent = (adUnits, eventName) => {
  //   window.addEventListener(eventName, () => {
  //     googletag.destroySlots(adUnits);
  //   });
  //   return adUnits;
  // }

  // static displayPlayerEars = () => {
  //   const adUnits = this.displayAdUnitsOnEvent('ears', 'adStart');
  //   this.destroyAdUnitsOnEvent(adUnits, 'adEnd');
  //   return adUnits;
  // }

  // static displayInterstitial = () => {
  //   const interstitial = this.defineAdUnits('interstitial');
  //   Yieldbird.cmd.push(() => {
  //     Yieldbird.setGPTTargeting(interstitial);
  //   })
  //   googletag.display(interstitial);
  // }

  // static displayEurozetCommercialBreak = () => {
  //   // switch logic with interstitial => interstitial should check if out-of-page was rendered.
  //   googletag.pubads().addEventListener('slotRenderEnded', (event) => {
  //     const { slot, isEmpty } = event;

  //     if (slot.getAdUnitPath().includes('interstitial') && isEmpty) {
  //       const oop = this.defineAdUnits('outofpage');
  //       try {
  //         let div = window.document.createElement('div');
  //         div.id = oop.getSlotElementId();
  //         window.document.body.prepend(div);
  //       } catch (error) {
  //         console.log('Couldn\'t display displayEurozetCommercialBreak.')
  //       }
  //       Yieldbird.cmd.push(function () {
  //         Yieldbird.setGPTTargeting([oop]);
  //       });
  //       googletag.display(oop);
  //       googletag.pubads().refresh(oop);
  //     }
  //     return oop;
  //   });
  // }

  static init = ({ adUnits }) => {
    this.adUnits = adUnits;
  }
}
