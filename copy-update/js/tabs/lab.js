SG.lab = {

  tabId: 'lab',
  tabDiscovered: false,
  tabName: 'laboratory',

  discoverReq: {
    resource: {
      science: 10
    }
  },

  init: function() {
    // register tab
    SG.tabs[this.tabId] = {
      id: this.tabId,
      name: this.tabName,
      discovered: this.tabDiscovered,
      discoverReq: this.discoverReq,
      code: this
    };

    // set upgrades purchased to false
    for (upgradeName in SG.upgrades) {
      SG.upgrades[upgradeName].purchased = false;
    }
  }
}