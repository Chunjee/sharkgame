SG.artifacts = {
  planetTerraformer: { // handled specially: world.getTerraformMultipler
    name: 'World Shaper',
    desc: 'Reduce the severity of planet climates.',
    flavor: 'Intelligence is not changing to fit an environment, but changing the environment to fit you',
    max: 10,
    cost: function(level) {
      return Math.floor(Math.pow(4, level + 1));
    }
  },
  gateCostReducer: { // handled specially: world.getGateCostMultiplier
    name: 'Gate Controller',
    desc: 'Reduces the cost requirements of gates.',
    flavor: 'Power over the unknown can only reach so far.',
    max: 10,
    cost: function(level) {
      return Math.floor(Math.pow(3, level + 1));
    }
  }
}