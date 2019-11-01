SG.playerResources = {};
SG.playerIncomeTable = {};

SG.resources = {

  specialMultiplier: null,

  init: function() {
    var playerResources = SG.playerResources;
    var playerIncomeTable = SG.playerIncomeTable;

    for (resource in SG.resourceTable) {
      // populate player resource data + income table
      // with each resource
      playerResources[resource] = {};
      playerIncomeTable[resource] = 0;

      var playerResource = playerResources[resource];
      // set amount and stuff
      playerResource.amount = 0;
      playerResource.totalAmount = 0;
      playerResource.incomeMultiplier = 1;
    }
    
    this.specialMultiplier = 1;
    this.reconstructTable();
  },

  reconstructTable: function() {
    var $table;
    var tableId = 'resourceTable';
    var $status = document.getElementById('status');

    // if table doesn't exist, create one
    if (document.getElementById(tableId) === null) {
      // set up title
      $status.innerHTML = '<h3>stuff</h3>';

      var $tableContainer = document.createElement('div');
      $tableContainer.setAttribute('id', 'resourceTableContainer');

      $table = document.createElement('div');
      $table.setAttribute('id', tableId);

      $tableContainer.appendChild($table);
    }

    // empty table
    $table.innerHTML = '';
    var anyResourcesInTable = false;
  },

  updateTable: function() {
    
  },

  isCategory: function(name) {
    return typeof (SG.resourceCategories[name]) !== 'undefined';
  },

};