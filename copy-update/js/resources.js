SG.playerResources = {};
SG.playerIncomeTable = {};

SG.resources = {

  specialMultiplier: null,

  init: function() {
    var playerResources = SG.playerResources;
    var playerIncomeTable = SG.playerIncomeTable;

    for (resource in SG.resourceTable) {
      // populate player resource data + income table
      // with each resource
      playerResources[resource] = {};
      playerIncomeTable[resource] = 0;

      var playerResource = playerResources[resource];
      // set amount and stuff
      playerResource.amount = 0;
      playerResource.totalAmount = 0;
      playerResource.incomeMultiplier = 1;
    }
    
    this.specialMultiplier = 1;
  },

  isCategory: function(name) {
    return typeof (SG.resourceCategories[name]) !== 'undefined';
  },

};