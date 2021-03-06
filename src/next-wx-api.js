(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var wx = (global.wx = global.wx);

  var NxWxApi = nx.declare('nx.WxApi', {
    statics: {
      DEBUG: ['checkJsApi'],
      SHARE: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ],
      PAY: ['chooseWXPay'],
      ADDRESS: ['openAddress'],
      IMAGE: ['uploadImage', 'downloadImage', 'chooseImage', 'previewImage'],
      LOCATION: ['getLocation', 'openLocation'],
      MENU: [
        'hideOptionMenu',
        'showOptionMenu',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem'
      ],
      WINDOW: ['closeWindow'],
      QR_CODE: ['scanQRCode'],
      CARD: ['addCard', 'chooseCard', 'openCard'],
      NETWORK: ['getNetworkType']
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxApi;
  }
})();
