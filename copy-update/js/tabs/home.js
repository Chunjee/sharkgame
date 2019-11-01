SG.home = {

  tabId: 'home',
  tabDiscovered: true,
  tabName: 'home sea',

  init: function() {
    // name home tab
    this.tabName = SG.worldTypes[SG.world.worldType].name + ' ocean';

    // register tab
    SG.tabs[this.tabId] = {
      id: this.tabId,
      name: this.tabName,
      discovered: this.tabDiscovered,
      code: this
    };

    // set discoveries on actions
    for (actionName in SG.homeActions) {
      var action = SG.homeActions[actionName];
      action.discovered = false;
      action.newlyDiscovered = false;
    }
    
    // TODO: createButtonTabs
  }
};