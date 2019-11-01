SG.homeActions = {
  // TODO: generate help text from effect?

  // freebies
  catchFish: {
    name: 'Catch fish',
    effect: {
      resource: {
        fish: 1
      }
    },
    cost: {},
    prereq: {},
    outcomes: [
      'caught a fish',
      'dropped the bass.'
    ],
    helpText: 'Use your natural shark prowess to find and catch a fish.'
  },



  // frenzy
  getShark: {
    name: 'Recruit shark',
    effect: {
      resource: {
        shark: 1
      }
    },
    cost: [
      {
        resource: 'fish',
        costFunction: 'linear',
        priceIncrease: 5
      }
    ],
    max: 'shark',
    prereq: {
      resource: {
        fish: 5
      }
    },
    outcomes: [
      'a shark joins you.'
    ],
    multiOutcomes: [
      'a bunch of sharks join you.'
    ],
    helpText: 'Recruit a shark to help catch more fish.'
  },

  getManta: {
    name: 'Hire ray',
    effect: {
      resource: {
        ray: 1
      }
    },
    cost: [
      {
        resource: 'fish',
        costFunction: 'linear',
        priceIncrease: 15
      }
    ],
    max: 'ray',
    prereq: {
      resource: {
        fish: 15
      }
    },
    outcomes: [
      'a ray joins you.'
    ],
    multiOutcomes: [
      'a whole bunch of rays join you.'
    ],
    helpText: 'Hire a ray to help collect fish. They might kick up some sand from the seabed.'
  },

  getCrab: {
    name: 'Acquire crab',
    effect: {
      resource: {
        crab: 1
      }
    },
    cost: [{
      resource: 'fish',
      costFunction: 'linear',
      priceIncrease: 10
    }],
    max: 'crab',
    prereq: {
      resource: {
        shark: 4,
        ray: 4
      }
    },
    outcomes: [
      'a crab joins you.'
    ],
    multiOutcomes: [
      'a bunch of crabs join you.'
    ],
    helpText: 'Hire a crab to find things that sharks and rays overlook.'
  },


  // shark jobs
  getScientist: {
    name: 'Train science shark',
    effect: {
      resource: {
        scientist: 1
      }
    },
    cost: [
      {
        resource: 'shark',
        costFunction: 'constant',
        priceIncrease: 1
      },
      {
        resource: 'crystal',
        costFunction: 'linear',
        priceIncrease: 20
      }
    ]
  }
}