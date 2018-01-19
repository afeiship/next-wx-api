(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var _ = nx.import (['is']);

  var NxWxApi = nx.declare('nx.WxApi', {
    statics: {
      debug: ['checkJsApi'],
      share: [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone'
      ],
      pay: ['chooseWXPay'],
      address: ['openAddress'],
      image: [
        'uploadImage',
        'downloadImage',
        'chooseImage',
        'previewImage'
      ],
      location: [
        'getLocation',
        'openLocation'
      ],
      menu: [
        'hideOptionMenu',
        'showOptionMenu',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem'
      ],
      window: ['closeWindow'],
      qrCode: ['scanQRCode'],
      card: [
        'addCard',
        'chooseCard',
        'openCard'
      ]
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWxApi;
  }

}());
