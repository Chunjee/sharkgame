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

SHARKY.changelog = {
  new: {
    "0.1.0": [
      "Test:",
      test = [
        "Test"
      ],
    ],
    "Original changelog below:": []
  },
  old: {
    "0.8 - Name Pending (2015/??/??)": [
      "Went back over the git repo history and added dates to changelog histories. No hiding my having dropped this for over half a year now! <span class='medDesc'>(it has been a while)</span>"
    ],
    "0.71 (2014/12/20)": [
      "Fixed and introduced and fixed a whole bunch of horrible game breaking bugs. If your save was lost, I'm sorry.",
      "Made the recycler stop lying about what could be made.",
      "Made the recycler not pay out so much for animals.",
      "Options are no longer reset after completing a run for real this time.",
      "Bunch of tweaked gate costs.",
      "One new machine, and one new job.",
      "Ten new post-chasm-exploration technologies to invest copious amounts of science into."
    ],
    "0.7 - Stranger Oceans (2014/12/19)": [
      "WHOLE BUNCH OF NEW STUFF ADDED.",
      "Resource system slightly restructured for something in the future.",
      "New worlds with some slight changes to availabilities, gate demands, and some other stuff.",
      "Categories added to Home Sea tab for the benefit of trying to make sense of all the buttons.",
      "Newly added actions show up in highlights for your convenience.",
      "The way progress continues beyond the gate is now... a little tweaked.",
      "Options are no longer reset after completing a run.",
      "Artifacts exist.",
      "Images are a work in progress. Apologies for the placeholder graphics in these trying times.",
      "Partial production when there's insufficient resources for things that take costs. Enjoy watching your incomes slow to a trickle!"
    ],
    "0.62 (2014/12/12)": [
      "Fixed infinity resource requirement for gate.",
      "Attempted to fix resource table breaking in some browsers for some sidebar widths."
    ],
    "0.61 (2014/12/12)": [
      "Added categories for buttons in the home sea, because there are going to be so many buttons.",
      "Miscellaneous shuffling of files.",
      "Some groundwork laid for v0.7, which will be the actual official release."
    ],
    "0.6 - Return of Shark (2014/12/8)": [
      "Major graphical update!",
      "Now features graphics sort of!",
      "Some UI rearrangements:",
      uiArrangements = [
        "Researched techs now show in lab instead of grotto.",
        "General stats now on right of grotto instead of left.",
        "Large empty space in grotto right column reserved for future use!"
      ],
      "Pointless version subtitle!",
      "Added a donate link. Hey, sharks gotta eat."
    ],
    "0.59 (2014/09/30)": [
      "Bunch of small fixes and tweaks!",
      "End of run time now shown at the end of a run.",
      "A couple of fixes for issues only found in IE11.",
      "Fixed a bug that could let people buy hundreds of things for cheap by overwhelming the game's capacity for input. Hopefully fixed, anyway.",
      "Gaudy social media share menu shoehorned in below the game title. Enjoy!"
    ],
    "0.531 (2014/08/20)": [
      "Banned sea apples from the recycler because the feedback loop is actually far more crazy powerful than I was expecting. Whoops!"
    ],
    "0.53 (2014/08/18)": [
      "Changed Recycler so that residue into new machines is linear, but into new resources is constant."
    ],
    "0.52 (2014/08/18)": [
      "Emergency bug-fixes.",
      "Cost to assemble residue into new things is now LINEAR (gets more expensive as you have more things) instead of CONSTANT."
    ],
    "0.51 (2014/08/18)": [
      "Edited the wording of import/export saving.",
      "Made machine recycling less HORRIBLY BROKEN in terms of how much a machine is worth."
    ],
    "0.5 (2014/08/18)": [
      "Added the Grotto - a way to better understand what you've accomplished so far.",
      "Added the Recycler. Enjoy discovering its function!",
      "Added sand machines for more machine sand goodness.",
      "Fixed oscillation/flickering of resources when at zero with anything providing a negative income.",
      "Added 'support' for people stumbling across the page with scripts turned off.",
      "Upped the gate kelp requirement by 10x, due to request.",
      "Added time tracking. Enjoy seeing how much of your life you've invested in this game.",
      "Added grouping for displaying resources on the left.",
      "Added some help and action descriptions.",
      "Added some text to the home tab to let people have an idea of where they should be heading in the very early game.",
      "Thanks to assistance from others, the saves are now much, much smaller than before.",
      "Made crab broods less ridiculously explosive.",
      "Adjusted some resource colours.",
      "Added a favicon, probably.",
      "Added an overdue copyright notice I guess."
    ],
    "0.48 (2014/08-ish)": [
      "Saves are now compressed both in local storage and in exported strings.",
      "Big costs significantly reduced.",
      "Buy 10, Buy 1/3 max and Buy 1/2 max buttons added.",
      "Research impact now displayed on research buttons.",
      "Resource effectiveness multipliers now displayed in table.",
      multipliers = [
        "These are not multipliers for how much of that resource you are getting."
      ],
      "Some dumb behind the scenes things to make the code look nicer.",
      "Added this changelog!",
      "Removed upgrades list on the left. It'll come back in a future version.",
      "Added ray and crab generating resources, and unlocking techs."
    ],
    "0.47 (2014/08-ish)": [
      "Bulk of game content added.",
      "Last update for Seamergency 2014!"
    ],
    "0.4 (2014/08-ish)": [
      "Added Laboratory tab.",
      "Added the end of the game tab."
    ],
    "0.3 (2014/08-ish)": [
      "Added description to options.",
      "Added save import/export.",
      "Added the ending panel."
    ],
    "0.23 (2014/08-ish)": [
      "Added autosave.",
      "Income system overhauled.",
      "Added options panel."
    ],
    "0.22 (2014/08-ish)": [
      "Offline mode added. Resources will increase even with the game off!",
      "(Resource income not guaranteed to be 100% accurate.)"
    ],
    "0.21 (2014/08-ish)": [
      "Save and load added."
    ],
    "<0.21 (2014/08-ish)": [
      "A whole bunch of stuff.",
      "Resource table, log, initial buttons, the works."
    ]
  },
}

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

    changelog: {
      name: 'changelog',
      onClick: function() {
        SHARKY.header.changelogSetUp();
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

  changelogSetUp: function() {

    function generateChangeLog(changelog, contentDiv) {
      var cl = Object.keys(changelog);
      cl.forEach(function(v) {
        // put version into a paragraph tag
        var version = document.createElement('p');
        version.setAttribute('class', 'changelog-version');
        version.innerHTML = v;

        // set up a list for details
        var detailsList = document.createElement('ul');
        var versionDetails = changelog[v];

        versionDetails.forEach(function(desc){
          if (typeof desc === 'object') {
            var newList = document.createElement('ul');
            desc.forEach(function(d){
              newList.innerHTML += '<li>' + d + '</li>';
            })
            detailsList.append(newList);
          } else {
            // put details into each list
            detailsList.innerHTML += '<li>' + desc + '</li>';
          }
        });

        contentDiv.append(version);
        contentDiv.append(detailsList);
      });
    };

    // make changelog wrapper
    var changelogContent = document.createElement('div');

    // old changelog
    var changelogOldContent = document.createElement('blockquote');
    changelogOldContent.setAttribute('id', 'changelog-old');
    generateChangeLog(SHARKY.changelog.old, changelogOldContent);
    changelogContent.append(changelogOldContent);

    // new changelog
    var changelogNewContent = document.createElement('div');
    changelogNewContent.setAttribute('id', 'changelog-new');
    generateChangeLog(SHARKY.changelog.new, changelogNewContent);
    changelogContent.prepend(changelogNewContent);

    SHARKY.util.showModal('changelog', changelogContent.innerHTML);
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
  SHARKY.test.test();
};