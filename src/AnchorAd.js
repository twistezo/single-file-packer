import { Logger } from './Logger.js';

const logger = new Logger('zetads');

export class AnchorAdService {
  static googletagAdUnit;
  static namespace = 'http://www.w3.org/2000/svg';

  // static setAttributes = (element, attributes) => {
  //   for (const [key, value] of Object.entries(attributes)) {
  //     element.setAttribute(key, value);
  //   }
  //   return;
  // }

  // static setAttributesNS = (element, attributes) => {
  //   for (const [key, value] of Object.entries(attributes)) {
  //     element.setAttributeNS(null, key, value);
  //   }
  //   return;
  // }

  // static createAdElement = (configuration) => {
  //   let element;
  //   const { type, hasNamespace, ...attributes } = configuration;
  //   if (hasNamespace) {
  //     element = window.document.createElementNS(this.namespace, type);
  //     this.setAttributesNS(element, attributes);
  //   } else {
  //     element = window.document.createElement(type);
  //     this.setAttributes(element, attributes);
  //   }
  //   return element;
  // }

  // static closeAnchorWrapper = (closeContainer, anchorContainer) => {
  //   window.document.getElementById(closeContainer.id).addEventListener('click', () => {
  //     window.document.getElementById(anchorContainer.id).style.display = 'none';
  //     googletag.destroySlots(this.googletagAdUnit);
  //   });
  // }

  // static isInDOM(selector) {
  //   return window.document.contains(window.document.querySelector(selector));
  // }

  // static observeElement = (querySelection, anchorContainer) => {
  //   const observer = new MutationObserver(() => {
  //     if (this.isInDOM(querySelection)) {
  //       const searchedElement = window.document.querySelector(querySelection);
  //       anchorContainer.style.bottom = getComputedStyle(searchedElement).height;
  //       anchorContainer.style.display = 'block';
  //       logger.log(`Found element '${querySelection}'. Adjusted 'anchor' position.`);
  //       observer.disconnect();
  //     }
  //   });
  //   return observer;
  // }

  // static anchorBottomPosition = (anchorContainer) => {
  //   googletag.pubads().addEventListener('slotRenderEnded', (event) => {
  //     const { slot, isEmpty } = event;
  //     try {
  //       const backToHomeObserver = this.observeElement('.back-to-home', anchorContainer);
  //       const sgBarObserver = this.observeElement('.sg-bar', anchorContainer);
  //       if (slot === this.googletagAdUnit && !isEmpty) {
  //         backToHomeObserver.observe(window.document, { childList: true, subtree: true, attributes: true });
  //         sgBarObserver.observe(window.document, { childList: true, subtree: true, attributes: true });
  //       }
  //     } catch (error) {
  //       logger.log(`Couldn\'t set proper position on '${anchorContainer.id}'`);
  //     }
  //   });
  //   return;
  // }

  // static createCloseContainer = () => {
  //   let closeContainer, svgCloseWrapper, svgTickMark,
  //       svgTickBox;
  //   svgCloseWrapper = this.createAdElement({
  //     type: 'svg',
  //     hasNamespace: true
  //   });
  //   svgTickMark = this.createAdElement({
  //     type: 'path',
  //     hasNamespace: true,
  //     d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
  //   });
  //   svgTickBox = this.createAdElement({
  //     type: 'path',
  //     hasNamespace: true,
  //     d: 'M0 0h24v24H0z',
  //     fill: 'none'
  //   });
  //   closeContainer = this.createAdElement({
  //     type: 'div',
  //     hasNamespace: false,
  //     id: 'yb_anchor_ad_close',
  //     style: 'display:block; margin-left: 84%;box-shadow: rgba(17, 58, 102, 0.3) 1px 0px 3px 1px;width:56px; height: 25px;background-color: #FAFAFA;border-top-left-radius:10px;border-top-right-radius:10px;justify-content:center;'
  //   });
  //   this.setAttributes(svgCloseWrapper, {
  //     fill: '#616161',
  //     viewBox: '0 0 24 22',
  //     xmlns: this.namespace,
  //     style: 'height: 25px; width: 56px;'
  //   })
  //   svgCloseWrapper.appendChild(svgTickMark);
  //   svgCloseWrapper.appendChild(svgTickBox);
  //   closeContainer.appendChild(svgCloseWrapper);

  //   return closeContainer;
  // }

  // static createAnchorAdContainer = () => {
  //   let anchorContainer, anchorAdWrapper;
  //   const closeContainer = this.createCloseContainer();
  //   anchorAdWrapper = this.createAdElement({
  //     type: 'div',
  //     hasNamespace: false,
  //     id: this.googletagAdUnit.getSlotElementId(),
  //     style: 'display: block; text-align: center; position: relative; bottom: 0px; padding-top: 5px;padding-bottom: 5px; left: 0; right: 0; margin: 0 auto; box-shadow:rgba(17, 58, 102, 0.05) 0px 0px 1px 1px;width: 100%;background-color: #FAFAFA'
  //   });
  //   anchorContainer = this.createAdElement({
  //     type: 'div',
  //     hasNamespace: false,
  //     id: 'yb_anchor_ad',
  //     style: 'display: none; position: fixed; left: 0; right: 0; margin: 0 auto; width: 100%; z-index: 10; background: transparent; transition-property: all;'
  //   });

  //   window.document.body.appendChild(anchorContainer);
  //   anchorContainer.appendChild(closeContainer);
  //   anchorContainer.appendChild(anchorAdWrapper);

  //   return { anchorContainer, closeContainer };
  // }

  // static init = (googletagAdUnit, configuration) => {
  //   if (configuration.host.startsWith('player.') || configuration.isSponsoredArticle) {
  //     logger.log('Anchor not allowed for this page. Aborting')
  //     return;
  //   }
  //   [this.googletagAdUnit] = googletagAdUnit;
  //   const { anchorContainer, closeContainer } = this.createAnchorAdContainer();
    
  //   this.closeAnchorWrapper(closeContainer, anchorContainer);
  //   this.anchorBottomPosition(anchorContainer);
  //   Yieldbird.cmd.push(() => {
  //     Yieldbird.setGPTTargeting(this.googletagAdUnit);
  //   });
  //   // googletag.cmd.push(() => {
  //     googletag.enableServices();
  //     googletag.display(this.googletagAdUnit);
  //     googletag.pubads().refresh([this.googletagAdUnit]);
  //   // });
  //   logger.log('Initialized slot \'anchor\'.');

  //   return;
  // }
} 