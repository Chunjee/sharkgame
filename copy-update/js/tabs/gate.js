SG.gate = {


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