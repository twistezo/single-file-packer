import { EurozetAds } from "./Adserver.js";

const zetads_configuration = {
    domain: "radiozet.pl",
    parentAdUnitCode: ["biznes", "konkursy", "player", "sport", "stronaglowna", "stylzycia", "wiadomosci", "zdrowie", "magazyn", "podroze"],
    lazyLoad: {
        fetchMarginPercent: 120,
        renderMarginPercent: -1,
        mobileScaling: 1.2,
    },
    sponsoredArticles: [
        "517","638","1022","1103","8133","8134","8135","8708","8825","8886","8889","8987","9257","9531","10325","10906","10909","10911","10946","10950","10957","11383","11563","11564","11834","12571","12595","12664","12675","12684","12694","13056","14694","16007","16198","16222","16223","16227","16229","16233","16236","16239","16259","16262","17118","17122","18049","21239","22096","24172","25131","25678","25686","25875","32073","40613","48424","58724","62233","66181","69753","73943","78220","79655","88589","90203","90419","91180","91568","91889","91925","91941","91968","91999","92581","92653","92788","92801","92825","99785","99809","99860","99958","99973","99985","99991","100439","100460","100937","102997","105115","105134","105152","105159","105168","105187","105199","105255","105263","105272","105284","105299","108152","108156","108160","108561","113273","114958","116001","116003","116368","117190","118062","118137","119471","128863","133891","145176","145195","145295","145313","145348","145961","145980","148626","153364","173384","174358","174437","174441","174445","174450","175368","176189","177827","178083","178234","179174","181095","181127","181158","194899","195100","195207","197563","197694","202663","202670","202681","202686","202698","221240","221244","221254","222689","240805","248148","248202","248266","266817","303534","304689","1407129","1408224","1408524","1435959"
    ],
    bannerSizes: {
        billboard: {
            multiSize: [[970, 250], [970, 90], [750, 300], [750, 200], [750, 100], [728, 90], [300, 250], [336, 280]],
            sizeMapping: [
                [[970, 0], [[970, 250], [970, 90], [750, 300], [750, 200], [750, 100], [728, 90]]],
                [[336, 0],[[336, 280], [300, 250]]],
                [[0, 0], [[300, 250]]],
            ],
        },
        leaderboard: {
            multiSize: [[750, 300], [750, 200], [750, 100], [360, 280], [336, 280], [300, 250], [300, 600]],
            sizeMapping: [
                [[970, 0],[[750, 300], [750, 200], [750, 100]]],
                [[336, 0],[[336, 280], [300, 250]]],
                [[0, 0],[[300, 250], [300, 600]]],
            ],
        },
        leaderboard_native: {
            multiSize: [[750, 300], [750, 200], [750, 100], [360, 280], [336, 280], [300, 250], ["fluid"]],
            sizeMapping: [
                [[970, 0],[[750, 300], [750, 200], [750, 100], ["fluid"]]],
                [[336, 0],[[336, 280], [300, 250], ["fluid"]]],
                [[0, 0],[[300, 250], ["fluid"]]],
            ],
        },
        rectangle: {
            multiSize: [[336, 280], [300, 250]],
            sizeMapping: [
                [[360, 0], [[360, 280], [300, 250]]],
                [[336, 0], [[336, 280], [300, 250]]],
                [[0, 0], [[300, 250]]],
            ],
        },
        rectangle_native: {
            multiSize: [[336, 280], [300, 250]],
            sizeMapping: [
                [[768, 0],[[336, 280], [300, 250], ["fluid"]]],
                [[0, 0],[[300, 250], ["fluid"]]],
            ],
        },
        rectangle_ears: {
            multiSize: [[300, 250]],
            sizeMapping: [
                [[1280, 0], [[300, 250]]],
                [[0, 0], []],
            ],
        },
        halfpage: {
            multiSize: [[300, 600], [160, 600], [336, 280], [300, 250]],
            sizeMapping: [
                [[768, 0],[[300, 600], [160, 600], [120, 600]]],
                [[0, 0], [[300, 250], [336, 280]]],
            ],
        },
        halfpage_pogoda: {
            multiSize: [[300, 600], [160, 600], [336, 280], [300, 250]],
            sizeMapping: [
                [[768, 0],[[160, 600], [120, 600]]],
                [[0, 0], []],
            ],
        },
        anchor: {
            multiSize: [[320, 50]],
            sizeMapping: [[[0, 0],[[360, 50], [320, 50]]]],
        },
        outofpage: {
            multiSize: [1, 1],
            sizeMapping: [
                [[768, 0], [[1, 1]]],
                [[0, 0], [[1, 1]]],
            ],
        },
        interstitial: {
            multiSize: [[320, 480]],
            sizeMapping: [
                [[768, 0],[[320, 480], [300, 250], [336, 280]]],
                [[0, 0],[[320, 480], [300, 250], [336, 280]]],
            ],
        },
        sponsorbar: {
            multiSize: [90, 21],
            sizeMapping: [
                [[768, 0], [[90, 21]]],
                [[0, 0], [[90, 21]]],
            ],
        },
        sponsorbar_euro: {
            multiSize: [[240, 28], [100, 28]],
            sizeMapping: [
                [[768, 0], [[240, 28]]],
                [[0, 0], [[100, 28]]],
            ],
        },
        sponsorbar_magazyn: {
            multiSize: [1, 1],
            sizeMapping: [
                [[768, 0],[[1, 1], [130, 150], [150, 130], [150, 150]]],
                [[0, 0],[[1, 1], [130, 150], [150, 130], [150, 150]]],
            ],
        },
        sponsorbar_pogoda: {
            multiSize: [150, 30],
            sizeMapping: [
                [[768, 0], [[150, 30]]],
                [[0, 0], [[150, 30]]],
            ],
        },
    },
    configPagetype: {
        default: {
            default: {
                divIds: [
                    "div-gpt-ad-anchor_1_h100", "div-gpt-ad-sponsor_magazyn_1_h300", "div-gpt-ad-sponsor_magazyn_2_h300", "div-gpt-ad-sponsor_magazyn_3_h300", "div-gpt-ad-sponsorbar_pogoda_h300", "div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300", "div-gpt-ad-billboard_3_h300", "div-gpt-ad-billboard_4_h300", "div-gpt-ad-billboard_5_h300", "div-gpt-ad-billboard_6_h300", "div-gpt-ad-billboard_7_h300", "div-gpt-ad-billboard_8_h300","div-gpt-ad-billboard_9_h300", "div-gpt-ad-billboard_10_h300", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300", "div-gpt-ad-leaderboard_3_h300", "div-gpt-ad-leaderboard_4_h300", "div-gpt-ad-leaderboard_5_h300", "div-gpt-ad-leaderboard_6_h300", "div-gpt-ad-leaderboard_7_h300", "div-gpt-ad-leaderboard_8_h300", "div-gpt-ad-leaderboard_9_h300", "div-gpt-ad-leaderboard_10_h300", "div-gpt-ad-leaderboard_11_h300", "div-gpt-ad-leaderboard_12_h300", "div-gpt-ad-leaderboard_13_h300", "div-gpt-ad-leaderboard_14_h300", "div-gpt-ad-leaderboard_15_h300", "div-gpt-ad-leaderboard_16_h300", "div-gpt-ad-leaderboard_17_h300", "div-gpt-ad-leaderboard_18_h300", "div-gpt-ad-leaderboard_19_h300", "div-gpt-ad-leaderboard_20_h300", "div-gpt-ad-leaderboard_21_h300", "div-gpt-ad-leaderboard_22_h300", "div-gpt-ad-leaderboard_23_h300", "div-gpt-ad-leaderboard_24_h300", "div-gpt-ad-leaderboard_25_h300","div-gpt-ad-halfpage_1_h600", "div-gpt-ad-halfpage_2_h600", "div-gpt-ad-halfpage_3_h600", "div-gpt-ad-halfpage_4_h600", "div-gpt-ad-halfpage_5_h600", "div-gpt-ad-halfpage_6_h600","div-gpt-ad-rectangle_1_h300", "div-gpt-ad-rectangle_2_h300", "div-gpt-ad-rectangle_3_h300", "div-gpt-ad-rectangle_4_h300", "div-gpt-ad-rectangle_5_h300", "div-gpt-ad-rectangle_6_h300", "div-gpt-ad-rectangle_7_h300", "div-gpt-ad-rectangle_8_h300","div-gpt-ad-left-ad-inside", "div-gpt-ad-right-ad-inside",],
            },
            magazine: {
                divIds: [
                    "div-gpt-ad-anchor_1_h100", "div-gpt-ad-sponsor_magazyn_1_h300", "div-gpt-ad-sponsor_magazyn_2_h300", "div-gpt-ad-sponsor_magazyn_3_h300", "div-gpt-ad-sponsorbar_pogoda_h300", "div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300", "div-gpt-ad-billboard_3_h300", "div-gpt-ad-anchor_1_h100", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300", "div-gpt-ad-leaderboard_3_h300", "div-gpt-ad-leaderboard_4_h300", "div-gpt-ad-leaderboard_5_h300", "div-gpt-ad-leaderboard_6_h300", "div-gpt-ad-leaderboard_7_h300", "div-gpt-ad-leaderboard_8_h300", "div-gpt-ad-leaderboard_9_h300", "div-gpt-ad-leaderboard_10_h300", "div-gpt-ad-leaderboard_11_h300", "div-gpt-ad-leaderboard_12_h300", "div-gpt-ad-leaderboard_13_h300", "div-gpt-ad-leaderboard_14_h300", "div-gpt-ad-leaderboard_15_h300", "div-gpt-ad-leaderboard_16_h300", "div-gpt-ad-leaderboard_17_h300", "div-gpt-ad-leaderboard_18_h300", "div-gpt-ad-leaderboard_19_h300", "div-gpt-ad-leaderboard_20_h300",],
            },
            folder: {
                divIds: [
                    "div-gpt-ad-anchor_1_h100", "div-gpt-ad-sponsor_magazyn_1_h300", "div-gpt-ad-sponsor_magazyn_2_h300", "div-gpt-ad-sponsor_magazyn_3_h300", "div-gpt-ad-sponsorbar_pogoda_h300", "div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300", "div-gpt-ad-halfpage_1_h600", "div-gpt-ad-halfpage_2_h600", "div-gpt-ad-halfpage_3_h600", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300", "div-gpt-ad-leaderboard_3_h300", "div-gpt-ad-rectangle_1_h300", "div-gpt-ad-rectangle_2_h300", "div-gpt-ad-rectangle_3_h300","div-gpt-ad-left-ad-inside", "div-gpt-ad-right-ad-inside",],
            },
            tag: {
                divIds: [
                    "div-gpt-ad-anchor_1_h100", "div-gpt-ad-sponsor_magazyn_1_h300", "div-gpt-ad-sponsor_magazyn_2_h300", "div-gpt-ad-sponsor_magazyn_3_h300", "div-gpt-ad-sponsorbar_pogoda_h300", "div-gpt-ad-billboard_1_h300", "div-gpt-ad-halfpage_1_h600", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300", "div-gpt-ad-leaderboard_3_h300", "div-gpt-ad-rectangle_1_h300", "div-gpt-ad-rectangle_2_h300", "div-gpt-ad-rectangle_3_h300","div-gpt-ad-left-ad-inside", "div-gpt-ad-right-ad-inside",],
            },
        },
        "biznes.radiozet.pl": {
            felieton: {
                divIds: ["div-gpt-ad-anchor_1_h100", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300"],
            }
        },
        "konkursy.radiozet.pl": {
            frontpage: {
                divIds: ["div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300"],
            },
        },
        "sport.radiozet.pl": {
            competition: {
                divIds: [
                    "div-gpt-ad-anchor_1_h100", "div-gpt-ad-sponsor_magazyn_1_h300", "div-gpt-ad-sponsor_magazyn_2_h300", "div-gpt-ad-sponsor_magazyn_3_h300", "div-gpt-ad-sponsorbar_pogoda_h300", "div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300", "div-gpt-ad-billboard_3_h300", "div-gpt-ad-billboard_4_h300", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300", "div-gpt-ad-leaderboard_3_h300", "div-gpt-ad-leaderboard_4_h300", "div-gpt-ad-leaderboard_5_h300", "div-gpt-ad-leaderboard_6_h300", "div-gpt-ad-leaderboard_7_h300", "div-gpt-ad-leaderboard_8_h300", "div-gpt-ad-leaderboard_9_h300", "div-gpt-ad-leaderboard_10_h300", "div-gpt-ad-halfpage_1_h600", "div-gpt-ad-halfpage_2_h600", "div-gpt-ad-rectangle_1_h300", "div-gpt-ad-rectangle_2_h300", "div-gpt-ad-rectangle_3_h300", "div-gpt-ad-rectangle_4_h300", "div-gpt-ad-rectangle_7_h300", "div-gpt-ad-rectangle_8_h300",],
            },
        },
        "zdrowie.radiozet.pl": {
            quiz: {
                divIds: [
                    "div-gpt-ad-anchor_1_h100", "div-gpt-ad-sponsor_magazyn_1_h300", "div-gpt-ad-sponsor_magazyn_2_h300", "div-gpt-ad-sponsor_magazyn_3_h300", "div-gpt-ad-sponsorbar_pogoda_h300", "div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300", "div-gpt-ad-billboard_3_h300", "div-gpt-ad-billboard_4_h300", "div-gpt-ad-halfpage_1_h600", "div-gpt-ad-halfpage_2_h600", "div-gpt-ad-halfpage_3_h600", "div-gpt-ad-leaderboard_1_h300", "div-gpt-ad-leaderboard_2_h300", "div-gpt-ad-leaderboard_3_h300", "div-gpt-ad-leaderboard_4_h300", "div-gpt-ad-leaderboard_5_h300", "div-gpt-ad-leaderboard_6_h300", "div-gpt-ad-leaderboard_7_h300", "div-gpt-ad-leaderboard_8_h300", "div-gpt-ad-leaderboard_9_h300", "div-gpt-ad-leaderboard_10_h300",],
            },
        },
        "player.radiozet.pl": {
            default: {
                divIds: [
                    "div-gpt-ad-billboard_1_h300", "div-gpt-ad-billboard_2_h300", "div-gpt-ad-billboard_3_h300", "div-gpt-ad-halfpage_1_h600", "div-gpt-ad-halfpage_2_h600", "div-gpt-ad-halfpage_3_h600", "div-gpt-ad-left-ad-inside", "div-gpt-ad-right-ad-inside",]
            },
        },
    },
    adUnitsTemplate: [{
        slotname: "billboard",
        sizes: "billboard",
        maxHeight: 300,
        start: 1,
        end: 10,
        type: "standard"
    },
    {
        slotname: "leaderboard",
        sizes: "leaderboard",
        maxHeight: 300,
        start: 2,
        end: 24,
        type: "standard"
    },
    {
        slotname: "halfpage",
        sizes: "halfpage",
        maxHeight: 600,
        start: 1,
        end: 6,
        type: "standard"
    },
    {
        slotname: "rectangle",
        sizes: "rectangle",
        maxHeight: 300,
        start: 2,
        end: 8,
        type: "standard"
    }],
    adUnits: [
        {
            divId: "div-gpt-ad-interstitial",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/interstitial",
            slotname: "interstitial",
            bannerSizes: "interstitial",
            type: "interstitial",
        },
        {
            divId: "div-gpt-ad-outofpage",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/outofpage",
            slotname: "outofpage",
            bannerSizes: "outofpage",
            type: "outofpage",
        },
        {
            divId: "div-gpt-ad-anchor_1_h100",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/anchor_1",
            slotname: "anchor_1",
            bannerSizes: "anchor",
            type: "anchor",
        },
        {
            divId: "div-gpt-ad-schedule-sponsor",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/sponsorbar_1",
            slotname: "sponsorbar_1",
            bannerSizes: "sponsorbar",
            type: "sponsorbar_player",
        },
        {
            divId: "div-gpt-ad-sponsorbar_euro_1",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/sponsorbar_euro_1",
            slotname: "sponsorbar_euro_1",
            bannerSizes: "sponsorbar_euro",
            type: "sponsorbar_euro",
        },
        {
            divId: "div-gpt-ad-halfpage_pogoda_1_h600",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/halfpage_pogoda_1",
            slotname: "halfpage_pogoda_1",
            bannerSizes: "halfpage_pogoda",
            type: "halfpage_pogoda",
        },
        {
            divId: "div-gpt-ad-sponsorbar_pogoda_h300",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/sponsorbar_pogoda_1",
            slotname: "sponsorbar_pogoda",
            bannerSizes: "sponsorbar_pogoda",
            type: "sponsorbar_pogoda",
        },
        {
            divId: "div-gpt-ad-sponsor_magazyn_1_h300",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/sponsorbar_magazyn_1",
            slotname: "sponsorbar_magazyn_1",
            bannerSizes: "sponsorbar_magazyn",
            type: "standard",
        },
        {
            divId: "div-gpt-ad-sponsor_magazyn_2_h300",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/sponsorbar_magazyn_2",
            slotname: "sponsorbar_magazyn_2",
            bannerSizes: "sponsorbar_magazyn",
            type: "standard",
        },
        {
            divId: "div-gpt-ad-sponsor_magazyn_3_h300",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/sponsorbar_magazyn_3",
            slotname: "sponsorbar_magazyn_3",
            bannerSizes: "sponsorbar_magazyn",
            type: "standard",
        },
        {
            divId: "autogenerated",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/leaderboard_infinite",
            slotname: "infinite",
            bannerSizes: "leaderboard",
            type: "infinite",
        },
        {
            divId: "div-gpt-ad-rectangle_1_h300",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/rectangle_1",
            slotname: "rectangle_1",
            bannerSizes: "rectangle_native",
            type: "standard",
        },
        {
            divId: "div-gpt-ad-left-ad-inside",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/rectangle_1_ears",
            slotname: "rectangle_1_ears",
            bannerSizes: "rectangle_ears",
            type: "ears",
        },
        {
            divId: "div-gpt-ad-right-ad-inside",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/rectangle_2_ears",
            slotname: "rectangle_2_ears",
            bannerSizes: "rectangle_ears",
            type: "ears",
        },
        {
            divId: "div-gpt-ad-leaderboard_1_h300",
            path: "/4350995/radiozet.pl/%%PLACEHOLDER%%/leaderboard_1",
            slotname: "leaderboard_1",
            bannerSizes: "leaderboard_native",
            type: "standard",
        },
    ],
    prebidForcedPage: {
        default: { desktop: 1799, mobile: 1798 },
        frontpage: { desktop: 1739, mobile: 1740 },
        article: { desktop: 1799, mobile: 1798 },
        folder: { desktop: 1801, mobile: 1800 },
        tag: { desktop: 1803, mobile: 1802 },
        magazine: { desktop: 1685, mobile: 1686 },
        felieton: { desktop: 1799, mobile: 1798 },
        image: { desktop: 1803, mobile: 1802 }
    }
};

const googletag = googletag || { cmd: [] };
const Yieldbird = Yieldbird || { cmd: [] };
const zetads = zetads || EurozetAds;
zetads.init(zetads_configuration);