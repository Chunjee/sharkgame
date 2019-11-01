SG.upgrades = {
  crystalBite: {
    name: 'Crystal Bite-Gear',
    desc: 'Bite the crystals we have into something to help biting!',
    researchedMessage: 'Weird teeth-wear has been developed, and sharks can now catch fish better as a result.',
    effectDesc: 'Sharks are twice as effective with their new biting gear. Turns out they work better outside the mouth!',
    cost: {
      science: 50,
      fish: 10
    },
    effect: {
      multiplier: {
        shark: 2
      }
    }
  },
  crystalSpade: {
    name: 'Crystal Spades',
    desc: 'Fashion strange harness-tools for the rays.',
    researchedMessage: 'The rays can now bother th sand more effectively, and dig up more sand now!',
    effectDesc: 'Rays are twice as effective with their specially adapted digging tools.',
    cost: {
      science: 50,
      sand: 20
    },
    effect: {
      multiplier: {
        ray: 2
      }
    }
  },
  crystalContainer: {
    name: 'Crystal Containers',
    desc: 'Make weird bottle thigns from the crystals we have. Maybe useful??',
    researchedMessage: 'Well, things can go into these containers that aren\'t water. This makes science easier!',
    effectDesc: 'Scientists are twice as effective at making with the science.',
    cost: {
      science: 100,
      crystal: 50
    },
    effect: {
      multiplier: {
        scientist: 2
      }
    }
  },
  statsDiscovery: {
    name: 'Storage Caverns',
    desc: 'It\'s about time to start moving the stores we have to a better place. We\'ve found one but it needs setting up.',
    researchedMessage: 'All the goods we\'ve acquired are now being stored and itemized in a mostly flooded cavern system. No more stray currents washing it all away hopefully!',
    effectDesc: 'By storing things in a centralized location, we now finally have an idea of what we\'re doing. Sort of.',
    cost: {
      science: 150
    },
    required: {
      upgrades: [
        'crystalContainer'
      ]
    }
  }
}