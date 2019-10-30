SG.worldModifiers = {
  planetaryIncome: {
    name: 'Planetary Income',
    apply: function(level, resource, amount) {
      SG.world.worldResources[resource].income = level * amount;
    }
  },
  planetaryIncomeMultiplier: {
    name: 'Planetary Income Multiplier',
    apply: function(level, resource, amount) {
      SG.world.worldResources[resource].incomeMultiplier = level * amount;
    }
  },
  planetaryResourceBoost: {
    name: 'Planetary Boost',
    apply: function(level, resource, amount) {
      SG.world.worldResources[resource].boostMultiplier = level * amount;
    }
  }
};

SG.world = {

  worldType: 'test',
  worldResources: {},
  planetLevel: 1,

  init: function() {
    this.resetWorldProperties();
  },

  apply: function() {
    this.applyWorldProperties(this.planetLevel);
    this.applyGateCosts(this.planetLevel);
  },

  resetWorldProperties: function() {
    // set up defaults
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

  applyWorldProperties: function(level) {
    // current world
    var worldInfo = SG.worldTypes[this.worldType];
    
    // get multiplier
    var terraformMultiplier = this.getTerraformMultiplier();
    var effectiveLevel = Math.max(Math.floor(level * terraformMultiplier), 1); // get max of level * terraformMult or just get 1

    // disable resources not allowed on planet
    for (absentResource of worldInfo.absentResources) {
      this.worldResources[absentResource].exists = false;
    }

    // apply world modifiers
    var modifiers = worldInfo.modifiers;
    
    modifiers.forEach(function(modifierData) {
      var worldModifier = SG.worldModifiers[modifierData.modifier];
      if (SG.resources.isCategory(modifierData.resource)) { // if resource being modified is a category
        var resourceList = SG.resourceCategories[modifierData.resource].resources;
        resourceList.forEach(function(resource) {
          worldModifier.apply(effectiveLevel, resource, modifierData.amount);
        });
      } else { // if modifying resource is not a category
        worldModifier.apply(effectiveLevel, modifierData.resource, modifierData.amount);
      }
    });
  },

  getTerraformMultiplier: function() {
    var ptLevel = SG.artifacts.planetTerraformer.level;
    if (ptLevel > 0) {
      return Math.pow(0.9, ptLevel);
    }
    return 1;
  },

  applyGateCosts: function(level) {
    var worldInfo = SG.worldTypes[this.worldType];

    // get multiplier
    var gateCostMultiplier = this.getGateCostMultiplier();

    SG.gate.createSlots(worldInfo.gateCosts, this.planetLevel, gateCostMultiplier);
  },

  getGateCostMultiplier: function() {
    var gateCostReducerLevel = SG.artifacts.gateCostReducer.level;
    if (gateCostReducerLevel > 0) {
      return Math.pow(0.9, gateCostReducerLevel);
    }
    return 1;
  }

};