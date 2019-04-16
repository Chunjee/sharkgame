var SHARKY = SHARKY || {};

SHARKY = {
  // element selectors
  game: document.getElementById('game'),

  overlay: document.getElementById('overlay'),
  modal: document.getElementById('modal'),
  modalTitle: document.getElementById('modal-title'),
  modalContent: document.getElementById('modal-content'),
  modalClose: document.getElementById('modal-close'),

  modalCredits: document.getElementById('credits'),
  modalHelp: document.getElementById('help'),
};

SHARKY.header = {
  links: {
    save: {
      name: 'save',
      onClick: function() {
        // ..
      }
    },
  
    settings: {
      name: 'settings',
      onClick: function() {
        // ..
      }
    },
  
    help: {
      name: 'help',
      onClick: function() {
        // ..
      }
    },
  
    credits: {
      name: 'credits',
      onClick: function() {
        // ..
      }
    },
  
    skip: {
      name: 'skip',
      onClick: function() {
  
      }
    },
  },

  setup: function() {
   // if (SharkGame.Main.isFirstTime()) {
    //  SHARKY.header.links.skip.name = 'reset';
    //}

    var links = Object.keys(SHARKY.header.links);
    links.forEach(function(name){
      var html = '<li><a class="' + name + ' header-link" href="javascript:;">' + SHARKY.header.links[name].name + "</a></li>";
      document.getElementById('titlemenu').innerHTML += html;
    });
  },
}; // sharky.header

SHARKY.main = {
  init: function() {
    SHARKY.header.setup();
  }
}








// onload, start the game:
window.onload = function(){
  SHARKY.game.style.display = '';
  SHARKY.main.init();
};