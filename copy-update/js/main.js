var SHARKGAME = SHARKGAME || {}; // SharkGame
var SG = SHARKGAME;

var VERSION = '0.1.0';
var EPSILON = 1E-6;
var INTERVAL = (1000/10); // 20 FPS

SG.tabs = {
  current: 'home'
};

SG.main = {

  // also functions as a reset
  init: function() {

    // init and reset resources
    SG.resources.init();

    // make sure gate is init after world!
    SG.world.init();
    SG.world.apply();
    
    SG.gateway.init();
    // TODO:
    // SG.gateway.applyArtifacts();

    SG.log.clearMessages();

    // init tabs
    SG.home.init();
    SG.lab.init();
    SG.stats.init();
    // TODO: recycler 
    SG.gate.init();
    SG.reflection.init();

    // TODO: setuptitlebar

    SG.tabs.current = 'home';
  },

};


window.onload = function() {
  this.SG.main.init();
}