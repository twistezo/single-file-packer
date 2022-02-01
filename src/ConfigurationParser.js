export class ConfigurationParserService {
  static configuration;
  static parsedConfiguration = {
    // host: window.testOnLocalHost || window.location.host,
    // pathname: window.location.pathname,
    // pagetype: window._zet_type.toLowerCase() || 'default',
    // sponsorowane: window._zet_sponsorowane || '0',
    host: '0',
    pathname: '0',
    pagetype: '0',
    sponsorowane: '0',
    urlConfig: 'default',
    lazyLoad: { fetchMarginPercent: 120, renderMarginPercent: -1, mobileScaling: 1.2 },
    adUnits: [],
    adUnitsByPagetype: [],
    isAdServerEnabled: false,
    isSponsoredArticle: false
  };

  static createTemplateAdUnit = (template, number) => {
    const { domain } = this.configuration;
    const { slotname, sizes, type, maxHeight } = template;
    return {
      divId: `div-gpt-ad-${slotname}_${number}_h${maxHeight}`,
      path: `/4350995/${domain}/%%PLACEHOLDER%%/${slotname}_${number}`,
      slotname: `${slotname}_${number}`,
      bannerSizes: sizes,
      type: type,
    }
  }

  static configureAdUnitsFromTemplate = () => {
    const { adUnitsTemplate, adUnits } = this.configuration;
    let adUnitsFromTemplate = [];
    adUnitsTemplate.forEach(template => {
      for (let i = template.start; i <= template.end; i++) {
        adUnitsFromTemplate.push(this.createTemplateAdUnit(template, i));
      }
    })
    this.parsedConfiguration.adUnits.push(...adUnits, ...adUnitsFromTemplate);

    return;
  }

  static replaceAdUnitPlaceholder = () => {
    const { parentAdUnitCode } = this.configuration;
    const { host, pathname } = this.parsedConfiguration;
    let placeholder = host.split('.').shift();
    if ('parentAdUnitCode' in this.configuration) {
      if (placeholder === 'www' && pathname === '/') {
          placeholder = 'stronaglowna';
      } else if (!parentAdUnitCode.includes(placeholder)) {
          placeholder = 'ros';
      }
      this.parsedConfiguration.adUnits.forEach((adUnit) => {
          adUnit.path = adUnit.path.replace('%%PLACEHOLDER%%', placeholder);
      });
    }

    return;
  }

  static addAdUnitSizes = () => {
    const { bannerSizes } = this.configuration;
    this.parsedConfiguration.adUnits.forEach((adUnit) => {
      adUnit.sizes = bannerSizes[adUnit.bannerSizes].multiSize;
      adUnit.mapping = bannerSizes[adUnit.bannerSizes].sizeMapping;
    });

    return;
  }

  static filterAdUnits = (host, pagetype) => {
    const { configPagetype } = this.configuration;
    const { adUnits } = this.parsedConfiguration;

    return adUnits.filter((slot) => {
      return configPagetype[host][pagetype].divIds.includes(slot.divId);
    });
  }

  static checkAdUnitsByPagetype = () => {
    const { configPagetype } = this.configuration;
    const { host, pagetype } = this.parsedConfiguration;
    let adUnitsByPagetype;
    if (configPagetype[host]?.[pagetype]) {
      adUnitsByPagetype = this.filterAdUnits(host, pagetype);
    } else if (configPagetype[host]?.["default"]) {
      adUnitsByPagetype = this.filterAdUnits(host, "default");
    } else {
      try {
        adUnitsByPagetype = this.filterAdUnits("default", pagetype);
      } catch (error) {
        adUnitsByPagetype = this.filterAdUnits("default", "default");
      }
    }
    this.parsedConfiguration.adUnitsByPagetype = adUnitsByPagetype;
    return adUnitsByPagetype;
  }

  static isAdServerEnabled = () => {
    const { sponsorowane } = this.parsedConfiguration
    if (sponsorowane === "0" || this.configuration.sponsoredArticles.includes(sponsorowane)) {
      this.parsedConfiguration.isAdServerEnabled = true
    }
    return;
  }

  static isSponsoredArticle = () => {
    const { sponsorowane } = this.parsedConfiguration
    if (this.configuration.sponsoredArticles.includes(sponsorowane)) {
      this.parsedConfiguration.isSponsoredArticle = true
    }
    return;
  }

  // static forcePrebidPage = () => {
  //   const { pagetype } = this.parsedConfiguration;
  //   try {
  //     this.parsedConfiguration = {
  //       ...this.parsedConfiguration,
  //       prebidForcedPage: {
  //         mobile: this.configuration.prebidForcedPage[pagetype]["mobile"],
  //         desktop: this.configuration.prebidForcedPage[pagetype]["desktop"]
  //       }
  //     }
  //     window.yb_configuration = window.yb_configuration || {};
  //     if (window.innerWidth < 768) {
  //       window.yb_configuration["forcedPage"] = this.configuration.prebidForcedPage[pagetype]["mobile"];
  //     } else {
  //       window.yb_configuration["forcedPage"] = this.configuration.prebidForcedPage[pagetype]["desktop"];
  //     }
  //   } catch (error) {
  //     console.log("Couldn't force YB page. Check if it exist in configuration.");
  //   }
  // }

  static init = (configuration) => {
    this.configuration = configuration;
    this.parsedConfiguration.domain = this.configuration.domain; 
    this.parsedConfiguration.sponsoredArticles = this.configuration.sponsoredArticles; 
    this.isAdServerEnabled();
    this.isSponsoredArticle();
    this.configureAdUnitsFromTemplate();
    this.replaceAdUnitPlaceholder();
    this.addAdUnitSizes();
    this.checkAdUnitsByPagetype();
    // this.forcePrebidPage();

    return this.parsedConfiguration;
  }
}
