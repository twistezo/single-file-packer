import { Logger } from './Logger.js';

const logger = new Logger('zetads');

export class TargetingService {

  // static setTargeting(targeting) {
  //   for (const [key, value] of Object.entries(targeting)) {
  //     googletag.pubads().setTargeting(`${key}`, `${typeof value === 'function' ? value() : value}`);
  //   }
  //   return;
  // }

  // static setPublisherTargeting({ domain, urlConfig,pagetype, sponsorowane }) {
  //   const targeting = {
  //     'zet_domain': domain,
  //     'zet_config': urlConfig,
  //     'zet_pagetype': pagetype,
  //     'sponsorowane': sponsorowane !== '0'
  //       ? ['1', sponsorowane]
  //       : sponsorowane
  //   }
  //   this.setTargeting(targeting);
  //   logger.log('Set publisher targeting.');
  //   return;
  // }

  // static setYieldbirdTargeting() {
  //   const dool = Math.random() >= 0.1;
  //   const sampleMultiplier = (multiplier) => {
  //     return Math.floor(Math.random() * multiplier)
  //   }
  //   const targeting = {
  //     yb_bm: () => { return dool ? '1' : '0' },
  //     yb_ab: () => { return dool ? 'b' : 'a' + sampleMultiplier(10) },
  //     yb_dc: () => { return dool ? 'd' : 'c' + sampleMultiplier(20) },
  //     yb_mx: () => { return !dool ? 'x' : 'm' + sampleMultiplier(180) },
  //     yb_tt: () => { return 'tt' + sampleMultiplier(10) },
  //     yb_ff: () => { return Math.round(Math.random()) }
  //   };
  //   this.setTargeting(targeting);
  //   logger.log('Set yieldbird targeting.');

  //   return targeting;
  // }

  // static setQueryParamTargeting(query) {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   if (urlParams.has(query)) {
  //     googletag.pubads().setTargeting(query, urlParams.get(query));
  //     logger.log(`Set query param targeting for '${query}'.`);
  //   }

  //   return { query: urlParams.get(query) };
  // }

  // static init(configuration) {
  //   this.targetingService.setPublisherTargeting(configuration);
  //   this.targetingService.setYieldbirdTargeting();
  //   this.targetingService.setQueryParamTargeting('version');

  // }
}
