SG.gateway = {

  init: function() {
    // init artifact levels to 0 if they don't have a level
    // otherwise keep the existing level
    var artifactsList = SG.artifacts;

    for (artifact in artifactsList) {
      if (!artifactsList[artifact].level) {
        artifactsList[artifact].level = 0;
      }
      artifactsList[artifact].alreadyApplied = false;
    }
  },

};