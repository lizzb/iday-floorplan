
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

	var deleteKeyCode = 46;	// Code for the delete key.
    var backspaceKeyCode = 8;
//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
	var ctrlKeyCode = 65;	// Code for control key.
	var ctrlDown = false;	// Set to true when the ctrl key is down.
	var aKeyCode = 17;		// Code for A key.
	var escKeyCode = 27;	// Code for esc key.
    var shiftKeyCode = 16
    var cmdDown = false; // event.metaKey  command key mac

    // http://unixpapa.com/js/key.html

    // on mac, flags: command is event.metaKey, option is event.altKey

	//
	// Selects the next node id.
	//
	var nextNodeID = 10;


	//var floorplanDataModel

	var chartDataModel = {
    //"nodes": [
        /*{
            "id": "boothunnamed",
            "x": 0,
            "y": 0
        },
        {
            "id": "boothunnamed",
            "x": 380,
            "y": 21
        },
        {
            "id": "boothunnamed",
            "x": 250,
            "y": 0
        },
        {
            "id": "boothunnamed",
            "x": 56,
            "y": 45
        },
        {
            "id": "boothunnamed",
            "x": 123,
            "y": 181
        },
        {
            "id": "boothunnamed",
            "x": 250,
            "y": 45
        },
        {
            "id": "boothunnamed",
            "x": 0,
            "y": 90
        },
        {
            "id": "boothunnamed",
            "x": 125,
            "y": 90
        },
        {
            "id": "boothunnamed",
            "x": 0,
            "y": 135
        },
        {
            "id": "boothunnamed",
            "x": 125,
            "y": 135
        },
        {
            "id": "boothunnamed",
            "x": 250,
            "y": 135
        }*/
   // ],
   // "connections": []
//};


//{
    "nodes": [
        {
            "name": "fenwal",
            "id": "booth1",
            "x": -122.82878875732422,
            "y": 8.684865951538086
        },
        {
            "name": "carsdotcom",
            "id": "booth2",
            "x": 2.1712112426757812,
            "y": 8.684865951538086
        },
        {
            "name": "fti",
            "id": "booth3",
            "x": 127.17121124267578,
            "y": 8.684865951538086
        },
        {
            "name": "bemis",
            "id": "booth4",
            "x": 252.17121124267578,
            "y": 8.684865951538086
        },
        {
            "name": "epic",
            "id": "booth5",
            "x": 377.1712112426758,
            "y": 8.684865951538086
        },
        {
            "name": "mathworks",
            "id": "booth6",
            "x": -122.82878875732422,
            "y": 53.684865951538086
        },
        {
            "name": "boeing",
            "id": "booth7",
            "x": 2.1712112426757812,
            "y": 53.684865951538086
        },
        {
            "name": "kiewit",
            "id": "booth8",
            "x": 127.17121124267578,
            "y": 53.684865951538086
        },
        {
            "name": "alcatel-lucent",
            "id": "booth9",
            "x": 252.17121124267578,
            "y": 53.684865951538086
        },
        {
            "name": "imc",
            "id": "booth10",
            "x": 377.1712112426758,
            "y": 53.684865951538086
        },
        {
            "name": "mwrdgc",
            "id": "booth11",
            "x": -122.82878875732422,
            "y": 98.68486595153809
        },
        {
            "name": "cme-group",
            "id": "booth12",
            "x": 2.1712112426757812,
            "y": 98.68486595153809
        },
        {
            "name": "pratt-whitney",
            "id": "booth13",
            "x": 127.17121124267578,
            "y": 98.68486595153809
        },
        {
            "name": "gtl",
            "id": "booth14",
            "x": 252.17121124267578,
            "y": 98.68486595153809
        },
        {
            "name": "pwc",
            "id": "booth15",
            "x": 377.1712112426758,
            "y": 98.68486595153809
        },
        {
            "name": "itw",
            "id": "booth16",
            "x": -122.82878875732422,
            "y": 143.6848659515381
        },
        {
            "name": "trading-tech",
            "id": "booth17",
            "x": 2.1712112426757812,
            "y": 143.6848659515381
        },
        {
            "name": "sbb",
            "id": "booth18",
            "x": 127.17121124267578,
            "y": 143.6848659515381
        },
        {
            "name": "outerwall",
            "id": "booth19",
            "x": 252.17121124267578,
            "y": 143.6848659515381
        },
        {
            "name": "com-ed",
            "id": "booth20",
            "x": 377.1712112426758,
            "y": 143.6848659515381
        },
        {
            "name": "chopper-trading",
            "id": "booth21",
            "x": -122.82878875732422,
            "y": 188.6848659515381
        },
        {
            "name": "citadel",
            "id": "booth22",
            "x": 2.1712112426757812,
            "y": 188.6848659515381
        },
        {
            "name": "clarity",
            "id": "booth23",
            "x": 127.17121124267578,
            "y": 188.6848659515381
        },
        {
            "name": "yahoo",
            "id": "booth24",
            "x": 252.17121124267578,
            "y": 188.6848659515381
        },
        {
            "name": "gdeb",
            "id": "booth25",
            "x": 377.1712112426758,
            "y": 188.6848659515381
        },
        {
            "name": "wolverine-trading",
            "id": "booth26",
            "x": -122.82878875732422,
            "y": 233.6848659515381
        },
        {
            "name": "mta",
            "id": "booth27",
            "x": 2.1712112426757812,
            "y": 233.6848659515381
        },
        {
            "name": "mbhb-llc",
            "id": "booth28",
            "x": 127.17121124267578,
            "y": 233.6848659515381
        },
        {
            "name": "think-big",
            "id": "booth29",
            "x": 252.17121124267578,
            "y": 233.6848659515381
        },
        {
            "name": "here-nokia",
            "id": "booth30",
            "x": 377.1712112426758,
            "y": 233.6848659515381
        },
        {
            "name": "etherios",
            "id": "booth31",
            "x": -122.82878875732422,
            "y": 278.6848659515381
        },
        {
            "name": "lend-lease",
            "id": "booth32",
            "x": 2.1712112426757812,
            "y": 278.6848659515381
        },
        {
            "name": "schneider-electric",
            "id": "booth33",
            "x": 127.17121124267578,
            "y": 278.6848659515381
        },
        {
            "name": "zebra-tech",
            "id": "booth34",
            "x": 252.17121124267578,
            "y": 278.6848659515381
        },
        {
            "name": "ucc",
            "id": "booth35",
            "x": 377.1712112426758,
            "y": 278.6848659515381
        },
        {
            "name": "northwestern-mutual",
            "id": "booth36",
            "x": -122.82878875732422,
            "y": 323.6848659515381
        },
        {
            "name": "idot",
            "id": "booth37",
            "x": 2.1712112426757812,
            "y": 323.6848659515381
        },
        {
            "name": "pariveda",
            "id": "booth38",
            "x": 127.17121124267578,
            "y": 323.6848659515381
        },
        {
            "name": "continental",
            "id": "booth39",
            "x": 252.17121124267578,
            "y": 323.6848659515381
        },
        {
            "name": "zs-associates",
            "id": "booth40",
            "x": 377.1712112426758,
            "y": 323.6848659515381
        },
        {
            "name": "ida",
            "id": "booth41",
            "x": -122.82878875732422,
            "y": 368.6848659515381
        },
        {
            "name": "factset",
            "id": "booth42",
            "x": 2.1712112426757812,
            "y": 368.6848659515381
        },
        {
            "name": "altec",
            "id": "booth43",
            "x": 127.17121124267578,
            "y": 368.6848659515381
        },
        {
            "name": "chrylser-group",
            "id": "booth44",
            "x": 252.17121124267578,
            "y": 368.6848659515381
        },
        {
            "name": "adage-tech",
            "id": "booth45",
            "x": 377.1712112426758,
            "y": 368.6848659515381
        },
        {
            "name": "denso",
            "id": "booth46",
            "x": -122.82878875732422,
            "y": 413.6848659515381
        },
        {
            "name": "environ",
            "id": "booth47",
            "x": 2.1712112426757812,
            "y": 413.6848659515381
        },
        {
            "name": "ama",
            "id": "booth48",
            "x": 127.17121124267578,
            "y": 413.6848659515381
        },
        {
            "name": "wrigley",
            "id": "booth49",
            "x": 252.17121124267578,
            "y": 413.6848659515381
        },
        {
            "name": "sapient-nitro",
            "id": "booth50",
            "x": 377.1712112426758,
            "y": 413.6848659515381
        },
        {
            "name": "hfz-llc",
            "id": "booth51",
            "x": -122.82878875732422,
            "y": 458.6848659515381
        },
        {
            "name": "avantcredit",
            "id": "booth52",
            "x": 2.1712112426757812,
            "y": 458.6848659515381
        },
        {
            "name": "spacex",
            "id": "booth53",
            "x": 127.17121124267578,
            "y": 458.6848659515381
        },
        {
            "name": "dmc-inc",
            "id": "booth54",
            "x": 252.17121124267578,
            "y": 458.6848659515381
        },
        {
            "name": "pepsico",
            "id": "booth55",
            "x": 377.1712112426758,
            "y": 458.6848659515381
        },
        {
            "name": "wms",
            "id": "booth56",
            "x": -122.82878875732422,
            "y": 503.6848659515381
        },
        {
            "name": "nielsen",
            "id": "booth57",
            "x": 2.1712112426757812,
            "y": 503.6848659515381
        },
        {
            "name": "dropbox",
            "id": "booth58",
            "x": 127.17121124267578,
            "y": 503.6848659515381
        },
        {
            "name": "thoughtworks",
            "id": "booth59",
            "x": 252.17121124267578,
            "y": 503.6848659515381
        },
        {
            "name": "allstate",
            "id": "booth60",
            "x": 377.1712112426758,
            "y": 503.6848659515381
        },
        {
            "name": "deloitte",
            "id": "booth61",
            "x": -122.82878875732422,
            "y": 548.6848659515381
        },
        {
            "name": "oracle",
            "id": "booth62",
            "x": 2.1712112426757812,
            "y": 548.6848659515381
        },
        {
            "name": "ge",
            "id": "booth63",
            "x": 127.17121124267578,
            "y": 548.6848659515381
        },
        {
            "name": "mozilla",
            "id": "booth64",
            "x": 252.17121124267578,
            "y": 548.6848659515381
        },
        {
            "name": "tata",
            "id": "booth65",
            "x": 377.1712112426758,
            "y": 548.6848659515381
        },
        {
            "name": "hospira",
            "id": "booth66",
            "x": -122.82878875732422,
            "y": 593.6848659515381
        },
        {
            "name": "pec",
            "id": "booth67",
            "x": 2.1712112426757812,
            "y": 593.6848659515381
        },
        {
            "name": "readyforce",
            "id": "booth68",
            "x": 127.17121124267578,
            "y": 593.6848659515381
        },
        {
            "name": "accenture",
            "id": "booth69",
            "x": 252.17121124267578,
            "y": 593.6848659515381
        },
        {
            "name": "shmoop",
            "id": "booth70",
            "x": 377.1712112426758,
            "y": 593.6848659515381
        },
        {
            "name": "ford",
            "id": "booth71",
            "x": -122.82878875732422,
            "y": 638.6848659515381
        },
        {
            "name": "united-airlines",
            "id": "booth72",
            "x": 2.1712112426757812,
            "y": 638.6848659515381
        },
        {
            "name": "goodyear",
            "id": "booth73",
            "x": 127.17121124267578,
            "y": 638.6848659515381
        },
        {
            "name": "at-t",
            "id": "booth74",
            "x": 252.17121124267578,
            "y": 638.6848659515381
        },
        {
            "name": "s-c-electric",
            "id": "booth75",
            "x": 377.1712112426758,
            "y": 638.6848659515381
        },
        {
            "name": "exxon-mobil",
            "id": "booth76",
            "x": -122.82878875732422,
            "y": 683.6848659515381
        },
        {
            "name": "facebook",
            "id": "booth77",
            "x": 2.1712112426757812,
            "y": 683.6848659515381
        },
        {
            "name": "discover",
            "id": "booth78",
            "x": 127.17121124267578,
            "y": 683.6848659515381
        },
        {
            "name": "3m",
            "id": "booth79",
            "x": 252.17121124267578,
            "y": 683.6848659515381
        },
        {
            "name": "baxter",
            "id": "booth80",
            "x": 377.1712112426758,
            "y": 683.6848659515381
        },
        {
            "name": "p-g",
            "id": "booth81",
            "x": -122.82878875732422,
            "y": 728.6848659515381
        },
        {
            "name": "northrop-grumman",
            "id": "booth82",
            "x": 2.1712112426757812,
            "y": 728.6848659515381
        },
        {
            "name": "gaf",
            "id": "booth83",
            "x": 127.17121124267578,
            "y": 728.6848659515381
        },
        {
            "name": "microsoft",
            "id": "booth84",
            "x": 252.17121124267578,
            "y": 728.6848659515381
        }
    ]
};
    
	
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


	


	//
	// Event handler for key-down on the flowchart.
	//
	$scope.keyDown = function (evt) {

        //if(evt.metaKey) alert('command!');!evt.metaKey
        //if (evt.metaKey) alert('yay down');

        // dealing with command is irritating
        // ill use shift on my mac i guess

		if (evt.keyCode === ctrlKeyCode)  {

			ctrlDown = true;
			evt.stopPropagation();
			evt.preventDefault();
		}

        if (evt.keyCode === shiftKeyCode) ctrlDown = true;

        //if (evt.metaKey) ctrlDown = true;
        //if(evt.keyCode === event.metaKey)

        if (evt.keyCode === backspaceKeyCode) {
            //
            // backspace key.
            // this shou.ld only happen if omsething is selected
            // but i hate backpsace fx anyway so whatever
            $scope.chartViewModel.deleteSelected();
            evt.preventDefault();
            //evt.stopPropagation();
            
            
        }
	};

	//
	// Event handler for key-up on the flowchart.
	//
	$scope.keyUp = function (evt) {

        

		if (evt.keyCode === deleteKeyCode) {
			//
			// Delete key.
			$scope.chartViewModel.deleteSelected();
		}

		if (evt.keyCode == aKeyCode && ctrlDown) {
			// 
			// Ctrl + A
			$scope.chartViewModel.selectAll();
		}

		if (evt.keyCode == escKeyCode) {
			// Escape.
			$scope.chartViewModel.deselectAll();
		}

        if (evt.keyCode === shiftKeyCode) ctrlDown = false;
		if (evt.keyCode === ctrlKeyCode) {

			evt.stopPropagation();
			evt.preventDefault();
		}

       // if (!evt.metaKey) ctrlDown = false;
	};

	
	//
	// Selects the next booth id.
	//
	var nextBoothID = 1;

   


       

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
		};
			//name: "boothName",
            id: "booth"+boothName, //nextBoothID++,
		*/

        //
        // Template for a new booth.
        //
        var newBoothDataModel = {
            name: boothName,
            id: "booth"+nextBoothID++,
            x: xpos,
            y: ypos
        };

		$scope.chartViewModel.addNode(newBoothDataModel);
	};

	//
	// Add ROW of booths
	//
	$scope.addNewBoothRow = function () {

		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		var numInput = prompt("Enter number of booths in this row:", "3");
		if (!numInput) { return; }

		var numBooths = parseInt(numInput);

		for (var i = 0; i < numBooths; ++i) {
			createNewBooth(i*xOffset, yOffset, "unnamed");
		}

	};

	//
	// Add COLUMN of booths
	//
	$scope.addNewBoothCol = function () {

		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		var numInput = prompt("Enter number of booths in this col:", "5");
		if (!numInput) { return; }

		var numBooths = parseInt(numInput);

		for (var i = 0; i < numBooths; ++i) {
			createNewBooth(xOffset, i*yOffset, "unnamed");
		}

	};


	//
	// Add evenly spaced GRID of booths
	//
	$scope.addNewBoothGrid = function () {

		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		var numRowInput = prompt("Enter number of booths in a row:", "4");
		if (!numRowInput) { return; }

		var numColInput = prompt("Enter number of booths in a col:", "3");
		if (!numColInput) { return; }

		var numRows = parseInt(numRowInput);
		var numCols = parseInt(numColInput);

		for (var i = 0; i < numRowInput; ++i) {
			for (var j = 0; j < numColInput; ++j) {
				createNewBooth(j*xOffset, i*yOffset, "unnamed");
			}
		}

	};





		// used to be adding from a number list in v1
		// now back to adding from a list of company name IDs

		$scope.addBoothsFromList = function () {

//companyNameIDs = ["23", "11", "2", "24", "12", "20", "7", "15", "9", ""];
			// companies
		//var companyNameIDs = [];

var companyNameIDs = [ //compNameIds = [
"fenwal",
"carsdotcom",
"fti",
"bemis",
"epic",
"mathworks",
"boeing",
"kiewit",
"alcatel-lucent",
"imc",
"mwrdgc",
"cme-group",
"pratt-whitney",
"gtl",
"pwc",
"itw",
"trading-tech",
"sbb",
"outerwall",
"com-ed",
"chopper-trading",
"citadel",
"clarity",
"yahoo",
"gdeb",
"wolverine-trading",
"mta",
"mbhb-llc",
"think-big",
"here-nokia",
"etherios",
"lend-lease",
"schneider-electric",
"zebra-tech",
"ucc",
"northwestern-mutual",
"idot",
"pariveda",
"continental",
"zs-associates",
"ida",
"factset",
"altec",
"chrylser-group",
"adage-tech",
"denso",
"environ",
"ama",
"wrigley",
"sapient-nitro",
"hfz-llc",
"avantcredit",
"spacex",
"dmc-inc",
"pepsico",
"wms",
"nielsen",
"dropbox",
"thoughtworks",
"allstate",
"deloitte",
"oracle",
"ge",
"mozilla",
"tata",
"hospira",
"pec",
"readyforce",
"accenture",
"shmoop",
"ford",
"united-airlines",
"goodyear",
"at-t",
"s-c-electric",
"exxon-mobil",
"facebook",
"discover",
"3m",
"baxter",
"p-g",
"northrop-grumman",
"gaf",
"microsoft"
];

		var compIdIndex = 0;

		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS
		


		//for (var compIdIndex = 0; compIdIndex < this.nodes.length; ++compIdIndex) {
		//for (var compIdIndex = 0; compIdIndex < companyNameIDs.length; ++compIdIndex) {
		//for (var compIdIndex = 0; compIdIndex < companyNameIDs.length; ++compIdIndex)

		
		////var numRowInput = prompt("List length was " + companyNameIDs.length + ". Enter number of booths in a row:", "4");
		////if (!numRowInput) { return; }

		var numColInput = prompt("List length was " + companyNameIDs.length + ". Enter number of booths in a col:", "4");
		if (!numColInput) { return; }


		//var numRows = parseInt(numRowInput);
		var numCols = parseInt(numColInput);

		var numRows = companyNameIDs.length / numCols;
		if(companyNameIDs.length % numCols > 0) numRows++;
		

		/// i need a tricky trick here for error checking!! TODO

		//var numRows = 11; //companyNameIDs.length % 2;
		//var numCols = 8; //companyNameIDs.length;

		// make sure if you dont have evenly filled rows itll be okay
		// TODO: make sure if you dont have ENOUGH rows/cols itll be okay too!

		// really should be incrementing the company ids instead, right?
		// cuz thats the liminting factor of lenght...
		for (var i = 0; i < numRows; ++i) {
			for (var j = 0; j < numCols && compIdIndex < companyNameIDs.length; ++j)
			{
				//createNewBooth(j*xOffset, i*yOffset, companyNameIDs[compIdIndex]);
				createNewBooth(j*xOffset, i*yOffset, companyNameIDs[compIdIndex]);
				compIdIndex++;
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




 /*$scope.makeNewBooth = function (xpos, ypos, boothIDNum) {

        //
        // Template for a new booth.
        //
        var newBoothDataModel = {
            name: "",
            id: "booth"+boothIDNum,
            x: xpos,
            y: ypos//,
            //inputConnectors: [],
           // outputConnectors: [],
        };

        $scope.chartViewModel.addNode(newBoothDataModel);
    };*/

	//
	// Add a new booth node to the chart.
	//
	/*$scope.addNewBooth = function () {

		var boothName = prompt("Enter a booth name:", "empty booth");
		if (!boothName) { return; }

		//
		// Template for a new booth.
		//
		var newBoothDataModel = {
			name: boothName,
			id: "booth"+nextBoothID++,
			x: 0,
			y: 0,
			inputConnectors: [],
			outputConnectors: [],
		};

		$scope.chartViewModel.addNode(newBoothDataModel);
	};*/








	//
	// Add an input connector to selected nodes.
	//
	$scope.addNewInputConnector = function () {
		
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
//;




//var app = angular.module('plunker', []);

//app
.directive('ngXlinkHref', function () {
  return {
    priority: 99,
    restrict: 'A',
    link: function (scope, element, attr) {
      var attrName = 'xlink:href';
      attr.$observe('ngXlinkHref', function (value) {
        if (!value)
          return;

        attr.$set(attrName, value);
      });
    }
  };
});
