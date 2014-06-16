
//
// Define the 'app' module.
//
angular.module('app', ['flowChart', ])

//
// Simple service to create a prompt.
//
.factory('prompt', function () {

	// Uncomment the following to test that the prompt service is working as expected.
	// return function () { return "Test!"; }

	// Return the browsers prompt function.
	return prompt;
})

//
// Application controller.
//
.controller('AppCtrl', ['$scope', 'prompt', function AppCtrl ($scope, prompt) {

	var deleteKeyCode = 46;    // Code for the delete key.
	var ctrlKeyCode = 65;      // Code for control key.
	var ctrlDown = false;      // Set to true when the ctrl key is down.
	var aKeyCode = 17;         // Code for A key.
	var escKeyCode = 27;       // Code for esc key.


	var nextNodeID = 10;   // Selects the next node id.

    var nextBoothID = 2;   // Selects the next booth id.


    var chartDataModel = {

    "nodes": [
        {
            "id": "booth3",
            "x": 0,
            "y": 0
        },
        {
            "id": "booth4",
            "x": 125,
            "y": 0
        },
        {
            "id": "booth7",
            "x": 250,
            "y": 0
        },
        {
            "id": "booth11",
            "x": 0,
            "y": 45
        },
        {
            "id": "booth15",
            "x": 125,
            "y": 45
        },
        {
            "id": "booth2",
            "x": 125,
            "y": 90
        },
        {
            "id": "booth200",
            "x": 250,
            "y": 90
        }
    ],
    "connections": []
};




	//
	// Event handler for key-down on the flowchart.
	//
	$scope.keyDown = function (evt) {

		if (evt.keyCode === ctrlKeyCode) {

			ctrlDown = true;
			evt.stopPropagation();
			evt.preventDefault();
		}
	};


	//
	// Event handler for key-up on the flowchart.
	//
	$scope.keyUp = function (evt) {

        //
        // Delete key.
		if (evt.keyCode === deleteKeyCode) {
			$scope.chartViewModel.deleteSelected();
		}

        // 
        // Ctrl + A
		if (evt.keyCode == aKeyCode && ctrlDown) {
			$scope.chartViewModel.selectAll();
		}

        //
        // Escape.
		if (evt.keyCode == escKeyCode) {
			$scope.chartViewModel.deselectAll();
		}


		if (evt.keyCode === ctrlKeyCode) {
			ctrlDown = false;

			evt.stopPropagation();
			evt.preventDefault();
		}
	};

	


   /* $scope.editBoothId = function () {
        var connectorName = prompt("Enter a booth id # (doesnt work):", "booth");
        if (!connectorName) { return; }

        var selectedNodes = $scope.chartViewModel.getSelectedNodes();
        for (var i = 0; i < selectedNodes.length; ++i) {
            var node = selectedNodes[i];
            node.id = connectorName;
        }
    };*/


    // --------------------------------------------------------------------//
    //
    // these all do the same thing, choose one
    //
    // --------------------------------------------------------------------//

    //
    // Add a new booth node to the chart.
    //
    $scope.makeNewBooth = function (xpos, ypos, boothIDNum) {

        //
        // Template for a new booth.
        //
        var newBoothDataModel = {
            name: "",
            id: "booth"+boothIDNum,
            x: xpos,
            y: ypos
            //,
            //inputConnectors: [],
           // outputConnectors: [],
        };

        $scope.chartViewModel.addNode(newBoothDataModel);
    };


    //$scope.createNewBooth(xpos, ypos, boothID)
    function createNewBooth(xpos, ypos, boothName) {

        //
        // Template for a new booth.
        //
        /*var newBoothDataModel = {
            name: boothName,
            id: "booth"+nextBoothID++,
            x: xpos,
            y: ypos//,
            //inputConnectors: [],
            //outputConnectors: [],
        };*/

        //
        // Template for a new booth.
        //
        var newBoothDataModel = {
            //name: "boothName",
            id: "booth"+boothName, //nextBoothID++,
            x: xpos,
            y: ypos
            //,
            //inputConnectors: [],
            //outputConnectors: [],
        };

        $scope.chartViewModel.addNode(newBoothDataModel);
    };






	//
	// Add a new booth node to the chart.
	//
	$scope.addNewBooth = function () {

		var boothName = prompt("Enter a booth name:", "empty booth");
		if (!boothName) { return; }

		//
		// Template for a new booth.
		//
		var newBoothDataModel = {
			name: boothName,
			id: "booth"+nextBoothID++,
			x: 0,
			y: 0
            //,
			//inputConnectors: [],
			//outputConnectors: [],
		};

		$scope.chartViewModel.addNode(newBoothDataModel);
	};


	


    // ------------------------------------------------------//


        var xOffset = 120 + 5;  // NEED TO SET THESE TO NON-LOCAL VARS
        var yOffset = 40 + 5;   // NEED TO SET THESE TO NON-LOCAL VARS



	$scope.addNewBoothRow = function () {

		var numInput = prompt("Enter number of booths in this row:", "3");
		if (!numInput) { return; }

		var numBooths = parseInt(numInput);

		for (var i = 0; i < numBooths; ++i) {
			createNewBooth(i*xOffset, yOffset, ""); // "unnamed" //addNewBooth();
		}

	};


	$scope.addNewBoothCol = function () {

		//var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		//var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		var numInput = prompt("Enter number of booths in this col:", "5");
		if (!numInput) { return; }

		var numBooths = parseInt(numInput);

		for (var i = 0; i < numBooths; ++i) {
			createNewBooth(xOffset, i*yOffset, ""); // "unnamed" //addNewBooth();
		}
	};


	$scope.addNewBoothGrid = function () {

		//var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		//var yOffset = 40 + 5;	    // NEED TO SET THESE TO NON-LOCAL VARS

		var numRowInput = prompt("Enter number of booths in a row:", "4");
		if (!numRowInput) { return; }

		var numColInput = prompt("Enter number of booths in a col:", "3");
		if (!numColInput) { return; }

		var numRows = parseInt(numRowInput);
		var numCols = parseInt(numColInput);

		for (var i = 0; i < numRowInput; ++i) {
			for (var j = 0; j < numColInput; ++j) {
				createNewBooth(j*xOffset, i*yOffset, "");// "unnamed" //addNewBooth();
			}
		}

	};


		$scope.addBoothsFromList = function () {
		
        var boothIDs = ["23", "11", "2", "24", "12", "20", "7", "15", "9", "26"];


		//var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		//var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS


		/// i need a ltircky trick here for error checking

		//var numRows = 11; //companyNameIDs.length % 2;
		//var numCols = 8; //companyNameIDs.length;

        var numCols = 3; 
        var numRows = boothIDs.length/numCols; //  + boothIDs.length%3;
        if(boothIDs.length%numCols > 0) numRows++;

		var boothIdIndex = 0;

		// make sure if you dont have evenly filled rows itll be okay

		// TODO: make sure if you dont have ENOUGH rows/cols itll be okay too!
		// TODO: need to go in reverse cuz this way reversed order of booths


		for (var i = 0; i < numRows; ++i) {
			for (var j = 0; j < numCols && compIdIndex < boothIDs.length; j++) {
				createNewBooth(j*xOffset, i*yOffset, boothIDs[boothIdIndex]);           //addNewBooth();
				boothIdIndex++;
			}
		}

		
	};



	//
	// Delete all current nodes and connections on chart
	//
	$scope.clearAll = function () {
		$scope.chartViewModel.selectAll();
		$scope.chartViewModel.deleteSelected();
	};


	//
	// Set X coordinate for selected items
	//
	$scope.setXCoord = function () {

        // add into prompt info what the current selected x values are

		var xInput = prompt("Enter new x coordinate for selected elements:", "");
		if (!xInput) { return; }
		var newXCoord = parseInt(xInput);

		$scope.chartViewModel.setSelectedXCoord(newXCoord);
	};


	//
	// Set Y coordinate for selected items
	//
	$scope.setYCoord = function () {

		var yInput = prompt("Enter new y coordinate for selected elements:", "");
		if (!yInput) { return; }
		var newYCoord = parseInt(yInput);

		$scope.chartViewModel.setSelectedYCoord(newYCoord);
	};


    //
    // Set booth ID / name ("id" property)
    //
    $scope.setID = function () {

        var idInput = prompt("Enter new id selected elements:", "");
        if (!idInput) { return; }

        $scope.chartViewModel.setSelectedID(idInput);
    };


	//
	// Delete selected nodes and connections.
	//
	$scope.deleteSelected = function () {
		$scope.chartViewModel.deleteSelected();
	};
    

	//
	// Create the view-model for the chart and attach to the scope.
	//
	$scope.chartViewModel = new flowchart.ChartViewModel(chartDataModel);
}])
;






//
	// Setup the data-model for the chart.
	//
	/*var chartDataModel = {

		nodes: [
			{
				name: "Example Node 1",
				id: 0,
				x: 0,
				y: 0,
				inputConnectors: [
					{
						name: "A",
					},
					{
						name: "B",
					},
					{
						name: "C",
					},
				],
				outputConnectors: [
					{
						name: "A",
					},
					{
						name: "B",
					},
					{
						name: "C",
					},
				],
			},

			{
				name: "Example Node 2",
				id: 1,
				x: 400,
				y: 200,
				inputConnectors: [
					{
						name: "A",
					},
					{
						name: "B",
					},
					{
						name: "C",
					},
				],
				outputConnectors: [
					{
						name: "A",
					},
					{
						name: "B",
					},
					{
						name: "C",
					},
				],
			},

		],

		connections: [
			{
				source: {
					nodeID: 0,
					connectorIndex: 1,
				},

				dest: {
					nodeID: 1,
					connectorIndex: 2,
				},
			},


		]
	};*/

	//
	// Add a new node to the chart.
	//
	/*$scope.addNewNode = function () {

		var nodeName = prompt("Enter a node name:", "New node");
		if (!nodeName) {
			return;
		}

		//
		// Template for a new node.
		//
		var newNodeDataModel = {
			name: nodeName,
			id: nextNodeID++,
			x: 0,
			y: 0,
			inputConnectors: [ 
				{
                    name: "X"
                },
                {
                    name: "Y"
                },
                {
                    name: "Z"
                }			
			],
			outputConnectors: [ 
				{
                    name: "1"
                },
                {
                    name: "2"
                },
                {
                    name: "3"
                }			
			],
		};

		$scope.chartViewModel.addNode(newNodeDataModel);
	};*/

//");



    /*var chartDataModel = {

    "nodes": [
        {
            "name": "fenwal",
            "id": "booth1",
            "x": 824,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "carsdotcom",
            "id": "booth2",
            "x": 698,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "fti",
            "id": "booth3",
            "x": 570,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "bemis",
            "id": "booth4",
            "x": 443,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "epic",
            "id": "booth5",
            "x": 315,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "mathworks",
            "id": "booth6",
            "x": 188,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "boeing",
            "id": "booth7",
            "x": 64,
            "y": 620,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "kiewit",
            "id": "booth8",
            "x": 11,
            "y": 550.0000228881836,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "alcatel-lucent",
            "id": "booth9",
            "x": 45,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "imc",
            "id": "booth10",
            "x": 170,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "mwrdgc",
            "id": "booth11",
            "x": 293,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "cme-group",
            "id": "booth12",
            "x": 418,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "pratt-whitney",
            "id": "booth13",
            "x": 545,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "gtl",
            "id": "booth14",
            "x": 670,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "pwc",
            "id": "booth15",
            "x": 797,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "itw",
            "id": "booth16",
            "x": 944,
            "y": 450,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "trading-tech",
            "id": "booth17",
            "x": 944,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "sbb",
            "id": "booth18",
            "x": 797,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "outerwall",
            "id": "booth19",
            "x": 670,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "com-ed",
            "id": "booth20",
            "x": 543,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "chopper-trading",
            "id": "booth21",
            "x": 416,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "citadel",
            "id": "booth22",
            "x": 291,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "clarity",
            "id": "booth23",
            "x": 170,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "yahoo",
            "id": "booth24",
            "x": 45,
            "y": 400,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "gdeb",
            "id": "booth25",
            "x": 36,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "wolverine-trading",
            "id": "booth26",
            "x": 163,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "mta",
            "id": "booth27",
            "x": 288,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "mbhb-llc",
            "id": "booth28",
            "x": 413,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "think-big",
            "id": "booth29",
            "x": 538,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "here-nokia",
            "id": "booth30",
            "x": 663,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "etherios",
            "id": "booth31",
            "x": 788,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "lend-lease",
            "id": "booth32",
            "x": 933,
            "y": 325,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "schneider-electric",
            "id": "booth33",
            "x": 932,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "zebra-tech",
            "id": "booth34",
            "x": 779,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "ucc",
            "id": "booth35",
            "x": 650,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "northwestern-mutual",
            "id": "booth36",
            "x": 519,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "idot",
            "id": "booth37",
            "x": 390,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "pariveda",
            "id": "booth38",
            "x": 269,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "continental",
            "id": "booth39",
            "x": 138,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "zs-associates",
            "id": "booth40",
            "x": 11,
            "y": 275,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "ida",
            "id": "booth41",
            "x": 1118,
            "y": 385,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "factset",
            "id": "booth42",
            "x": 1113,
            "y": 333,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "altec",
            "id": "booth43",
            "x": 1114,
            "y": 277,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "chrylser-group",
            "id": "booth44",
            "x": 1115,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "adage-tech",
            "id": "booth45",
            "x": 982,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "denso",
            "id": "booth46",
            "x": 863,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "environ",
            "id": "booth47",
            "x": 738,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "ama",
            "id": "booth48",
            "x": 621,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "wrigley",
            "id": "booth49",
            "x": 492,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "sapient-nitro",
            "id": "booth50",
            "x": 365,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "hfz-llc",
            "id": "booth51",
            "x": 246,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "avantcredit",
            "id": "booth52",
            "x": 125,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "spacex",
            "id": "booth53",
            "x": 2,
            "y": 180,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "dmc-inc",
            "id": "booth54",
            "x": 891,
            "y": 1224,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "pepsico",
            "id": "booth55",
            "x": 782,
            "y": 1140,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "wms",
            "id": "booth56",
            "x": 645,
            "y": 1142,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "nielsen",
            "id": "booth57",
            "x": 514,
            "y": 1141,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "dropbox",
            "id": "booth58",
            "x": 377,
            "y": 1141,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "thoughtworks",
            "id": "booth59",
            "x": 228,
            "y": 1173,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "allstate",
            "id": "booth60",
            "x": 229,
            "y": 1223,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "deloitte",
            "id": "booth61",
            "x": 456,
            "y": 1277,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "oracle",
            "id": "booth62",
            "x": 581,
            "y": 1277,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "ge",
            "id": "booth63",
            "x": 706,
            "y": 1277,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "mozilla",
            "id": "booth64",
            "x": 901,
            "y": 964.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "tata",
            "id": "booth65",
            "x": 26,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "hospira",
            "id": "booth66",
            "x": 151,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "pec",
            "id": "booth67",
            "x": 276,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "readyforce",
            "id": "booth68",
            "x": 401,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "accenture",
            "id": "booth69",
            "x": 526,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "shmoop",
            "id": "booth70",
            "x": 651,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "ford",
            "id": "booth71",
            "x": 776,
            "y": 1009.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "united-airlines",
            "id": "booth72",
            "x": 900,
            "y": 727.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "goodyear",
            "id": "booth73",
            "x": 25,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "at-t",
            "id": "booth74",
            "x": 150,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "s-c-electric",
            "id": "booth75",
            "x": 275,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "exxon-mobil",
            "id": "booth76",
            "x": 400,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "facebook",
            "id": "booth77",
            "x": 525,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "discover",
            "id": "booth78",
            "x": 650,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "3m",
            "id": "booth79",
            "x": 775,
            "y": 772.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "baxter",
            "id": "booth80",
            "x": 527,
            "y": 867.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "p-g",
            "id": "booth81",
            "x": 27,
            "y": 866.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "northrop-grumman",
            "id": "booth82",
            "x": 152,
            "y": 866.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "gaf",
            "id": "booth83",
            "x": 277,
            "y": 866.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        },
        {
            "name": "microsoft",
            "id": "booth84",
            "x": 402,
            "y": 866.0000305175781,
            "inputConnectors": [],
            "outputConnectors": []
        }
    ],
    "connections": []
};*/
    
        /*nodes: [
            {
                name: "Example Node 1",
                id: 0,
                x: 0,
                y: 0,
                inputConnectors: [],
                outputConnectors: [],
            },

            {
                name: "Example Node 2",
                id: 1,
                x: 400,
                y: 200,
                inputConnectors: [],
                outputConnectors: [],
            },

        ],

        connections: []
    };*/


    
    //var floorplanDataModel
    /*var chartDataModel = {
    
        nodes: [
            {
                
            },

            {
                
            },

        ],

        connections: []
    };*/



/*
        $scope.addBoothsFromList = function () {// 

        // companies
        //var companyNameIDs = [];

        var boothIds = ["23", "11", "2", "24", "12", "20", "7", "15", "9", ""];

        var xOffset = 120 + 5;  // NEED TO SET THESE TO NON-LOCAL VARS
        var yOffset = 40 + 5;   // NEED TO SET THESE TO NON-LOCAL VARS

        var numCols = 3; 
        var numRows = boothIds.length % 3;
        
        //for (var compIdIndex = 0; compIdIndex < companyNameIDs.length; ++compIdIndex)

        var compIdIndex = 0;

        for (var i = 0; i < numRows; ++i) {
            for (var j = 0; j < numCols && j < boothIds.length; j++) {
                makeNewBooth(j*xOffset, i*yOffset, boothIds[j]);
            }
        }

    };*/


    // --------------------------------------------------------------------//
    //
    // connecors and stuff
    //
    // --------------------------------------------------------------------//

/*
    var createConnectorsViewModel = function (connectorDataModels, x, parentNode) {
        var viewModels = [];

        if (connectorDataModels) {
            for (var i = 0; i < connectorDataModels.length; ++i) {
                var connectorViewModel = 
                    new flowchart.ConnectorViewModel(connectorDataModels[i], x, flowchart.computeConnectorY(i), parentNode);
                viewModels.push(connectorViewModel);
            }
        }

        return viewModels;
    };

*/


    /*
    //
    // Add an input connector to selected nodes.
    //
    $scope.addNewInputConnector = function () {
        var connectorName = prompt("Enter a connector name:", "New connector");
        if (!connectorName) { return; }

        var selectedNodes = $scope.chartViewModel.getSelectedNodes();
        for (var i = 0; i < selectedNodes.length; ++i) {
            var node = selectedNodes[i];
            node.addInputConnector({
                name: connectorName,
            });
        }
    };


    //
    // Add an input connector to selected nodes.
    //
    $scope.addNewInputConnector = function () {
        var connectorName = prompt("Enter a connector name:", "New connector");
        if (!connectorName) {
            return;
        }

        var selectedNodes = $scope.chartViewModel.getSelectedNodes();
        for (var i = 0; i < selectedNodes.length; ++i) {
            var node = selectedNodes[i];
            node.addInputConnector({
                name: connectorName,
            });
        }
    };


    //
    // Add an output connector to selected nodes.
    //
    $scope.addNewOutputConnector = function () {
        var connectorName = prompt("Enter a connector name:", "New connector");
        if (!connectorName) { return; }

        var selectedNodes = $scope.chartViewModel.getSelectedNodes();
        for (var i = 0; i < selectedNodes.length; ++i) {
            var node = selectedNodes[i];
            node.addOutputConnector({
                name: connectorName,
            });
        }
    };
*/
