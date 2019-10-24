SG.world = {

  worldType: 'start',
  worldResources: {},
  planetLevel: 1,

  init: function() {
    // resetWorldProperties - set up defaults
    var worldResources = this.worldResources;

    for (resource in SG.resourceTable) {
      worldResources[resource] = {};
      
      var worldResource = worldResources[resource];
      worldResource.exists = true;
      worldResource.income = 0;
      worldResource.incomeMultiplier = 1;
      worldResource.boostMultiplier = 1;
      worldResource.artifactMultiplier = 1;
    }
  },

};