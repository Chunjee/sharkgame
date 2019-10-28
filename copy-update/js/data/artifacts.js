SG.artifacts = {
  planetTerraformer: {
    name: 'World Shaper',
    desc: 'Reduce the severity of planet climates.',
    flavor: 'Intelligence is not changing to fit an environment, but changing the environment to fit you',
    max: 10,
    cost: function(level) {
      return Math.floor(Math.pow(4, level + 1));
    }
  }
}