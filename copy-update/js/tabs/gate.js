SG.gate = {

  tabId: 'gate',
  tabDiscovered: false,
  tabName: 'strage gate',

  discoverReq: {
    upgrade: [
      'gateDiscovery'
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

    this.opened = false;
  },

  createSlots: function(gateSlots, planetLevel, gateCostMultiplier) {
    // create gate.costs
    this.costs = {};
    for (gateCostItem in gateSlots) {
      var gateCostAmount = gateSlots[gateCostItem];
      this.costs[gateCostItem] = Math.floor(gateCostAmount * planetLevel * gateCostMultiplier);
    };

    // create gate.costsMet = false
    this.costsMet = {};
    for (gateCostItem in this.costs) {
      this.costsMet[gateCostItem] = false;
    }
  }
}