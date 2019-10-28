SG.worldTypes = {
  test: {
    name: 'test',
    desc: 'you really shouldnt bee seeing this..',
    shortDesc: 'test world',
    entry: 'you enter a debug ocean.',
    style: 'default',
    absentResources: [],
    modifiers: [
      {
        modifier: 'planetaryResourceBoost',
        resource: 'fish',
        amount: 1.5
      },
      {
        modifier: 'planetaryResourceBoost',
        resource: 'specialists',
        amount: 1
      },
      {
        modifier: 'planetaryIncomeMultiplier',
        resource: 'breeders',
        amount: 1
      },
      {
        modifier: 'planetaryIncome',
        resource: 'frenzy',
        amount: -0.0001
      }
    ],
    gateCosts: {
      fish: 1E3,
      sand: 1E3,
      crystal: 1E3,
      kelp: 1E3,
      seaApple: 1E3,
      sharkonium: 1E3
    }
  },

  start: {
    name: 'home',
    desc: 'you shouldn\'t be seeing this.',
    shortDesc: 'strange blue',
    entry: 'you enter a familiar blue sea, all your previous knowledge a dim memory.',
    style: 'default',
    absentResources: [
      'tar',
      'ice',
      'shrimp',
      'lobster',
      'dolphin',
      'whale',
      'chimaera',
      'octopus',
      'eel',
      'queen',
      'berrier',
      'biologist',
      'pit',
      'worker',
      'harvester',
      'philosopher',
      'treasurer',
      'chorus',
      'transmuter',
      'explorer',
      'collector',
      'scavenger',
      'technician',
      'sifter',
      'purifier',
      'heater',
      'spongeFarmer',
      'berrySprayer',
      'glassMaker',
      'silentArchivist',
      'tirelessCrafter',
      'clamCollector',
      'sprongeSmelter',
      'seaScourer',
      'prostheticPolyp',
      'sponge',
      'jellyfish',
      'clam',
      'coral',
      'algae',
      'coralglass',
      'delphinium',
      'spronge'
    ],
    modifiers: [],
    // initial gate cost, scaled by planetary level
    gateCosts: {
      fish: 1E4,
      sand: 1E4,
      crystal: 1E4,
      kelp: 1E3,
      seaApple: 1E3,
      sharkonium: 1E4
    }
  },


}