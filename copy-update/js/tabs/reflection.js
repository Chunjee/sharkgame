SG.reflection = {

  tabId: 'reflection',
  tabDiscovered: false,
  tabName: 'reflection',

  discoverReq: {
    resource: {
      essence: 1
    }
  },

  init: function() {
    SG.tabs[this.tabId] = {
      id: this.tabId,
      name: this.tabName,
      discovered: this.tabDiscovered,
      discoverReq: this.discoverReq,
      code: this
    };
  },
  
};