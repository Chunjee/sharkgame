SG.stats = {

  tabId: 'stats',
  tabDiscovered: false,
  tabName: 'grotto',

  recreateIncomeTable: false,

  discoverReq: {
    upgrade: [
      'statsDiscovery'
    ]
  },
  
  init: function() {
    SG.tabs[this.tabId] = {
      id: this.tabId,
      name: this.tabName,
      discovered: this.tabDiscovered,
      discoverReq: this.discoverReq,
      code: this
    };

    this.recreateIncomeTable = true;
  }
};