var SHARKY = SHARKY || {};

SHARKY.VERSION = '0.1.0';

SHARKY.save = {
  timestampLastSave: false,
  timestampGameStart: false,
  timestampRunStart: false
}

SHARKY.el = {
  // element selectors
  game: document.getElementById('game'),

  overlay: document.getElementById('overlay'),
  modal: document.getElementById('modal'),
  modalTitle: document.getElementById('modal-title'),
  modalContent: document.getElementById('modal-content'),
  modalClose: document.getElementById('modal-close'),

  modalCredits: document.getElementById('credits-content'),
  modalHelp: document.getElementById('help-content'),
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
        SHARKY.util.showModal('help', SHARKY.el.modalHelp.innerHTML);
      }
    },
  
    credits: {
      name: 'credits',
      onClick: function() {
        SHARKY.util.showModal('credits', SHARKY.el.modalCredits.innerHTML);
      }
    },
  
    skip: {
      name: 'skip',
      onClick: function() {
  
      }
    },
  },

  setup: function() {
   // if (SHARKY.util.isFirstTime) {
    //  SHARKY.header.links.skip.name = 'reset';
    //}

    // generate links
    var links = Object.keys(SHARKY.header.links);
    links.forEach(function(name){
      var html = '<li><a id="' + name + '" class="header-link" href="javascript:;">' + SHARKY.header.links[name].name + "</a></li>";
      document.getElementById('titlemenu').innerHTML += html;
    });
    // add click function
    links.forEach(function(name){
      document.getElementById(name).addEventListener('click', SHARKY.header.links[name].onClick);
    });
  },
};

SHARKY.world = {
  worldType: 'start'
};

SHARKY.playerResources = {};
SHARKY.resources = {
  getTotalResource: function(resource) {
    return SHARKY.playerResources[resource].totalAmount;
  }
}

SHARKY.util = {
  // isFirstTime: SHARKY.world.worldType === 'start' && !(SHARKY.resources.getTotalResource('essence') > 0),
  showModal: function(title, content, hideCloseButton) {
    var modal = SHARKY.el.modal;
    var overlay = SHARKY.el.overlay;
    var modalTitle = SHARKY.el.modalTitle;
    var modalContent = SHARKY.el.modalContent;

    // show overlay
    if (overlay.classList.contains('hidden') && overlay.style.display === 'none') {
      overlay.style.display = '';
      overlay.classList.remove('hidden');
    }

    // set up pane
    if (!title || title === '') {
      modalTitle.style.display = 'none';
    } else {
      modalTitle.innerHTML = title;
    }
    // insert content
    modalContent.innerHTML = content;

    // closeable?
    if (!hideCloseButton) {
      var modalClose = SHARKY.el.modalClose;
  
      modalClose.addEventListener('click', function(){
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
        overlay.style.display = 'none';
        modal.style.display = 'none';
      });
    } else {
      // .. don't show close button
    }

    // show pane
    if (modal.classList.contains('hidden') && modal.style.display === 'none') {
      modal.style.display = '';
      modal.classList.remove('hidden');
    }
  }
};

SHARKY.main = {
  init: function() {
    SHARKY.header.setup();


    SHARKY.test.test();
  }
}

SHARKY.test = {
  test: function(){
    
  }
};






// onload, start the game:
window.onload = function(){
  SHARKY.el.game.style.display = '';
  SHARKY.main.init();
};