
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

	var ctrlKeyCode = 65;	// Code for control key.

	var ctrlDown = false;	// Set to true when the ctrl key is down.

	var aKeyCode = 17;		// Code for A key.

	var escKeyCode = 27;	// Code for esc key.

	//
	// Selects the next node id.
	//
	var nextNodeID = 10;


	var chartDataModel = {
	
		nodes: [
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
	};
	
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

		if (evt.keyCode === ctrlKeyCode) {
			ctrlDown = false;

			evt.stopPropagation();
			evt.preventDefault();
		}
	};

	
	//
	// Selects the next booth id.
	//
	var nextBoothID = 2;


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
			y: 0,
			inputConnectors: [],
			outputConnectors: [],
		};

		$scope.chartViewModel.addNode(newBoothDataModel);
	};


	function createNewBooth(xpos, ypos, boothName) {

		//
		// Template for a new booth.
		//
		var newBoothDataModel = {
			name: boothName,
			id: "booth"+nextBoothID++,
			x: xpos,
			y: ypos,
			inputConnectors: [],
			outputConnectors: [],
		};

		$scope.chartViewModel.addNode(newBoothDataModel);
	};

	$scope.addNewBoothRow = function () {

		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		var numInput = prompt("Enter number of booths in this row:", "3");
		if (!numInput) { return; }

		var numBooths = parseInt(numInput);

		for (var i = 0; i < numBooths; ++i) {
			//addNewBooth();
			createNewBooth(i*xOffset, yOffset, "unnamed");
		}

	};

	$scope.addNewBoothCol = function () {

		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		var numInput = prompt("Enter number of booths in this col:", "5");
		if (!numInput) { return; }

		var numBooths = parseInt(numInput);

		for (var i = 0; i < numBooths; ++i) {
			//addNewBooth();
			createNewBooth(xOffset, i*yOffset, "unnamed");
		}

	};


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
			//addNewBooth();
			for (var j = 0; j < numColInput; ++j) {
				createNewBooth(j*xOffset, i*yOffset, "unnamed");
			}
		}

	};

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

		$scope.addBoothsFromList = function () {

			// companies
		var companyNameIDs = [];
		/*companyNameIDs.push("3m");
		companyNameIDs.push("accenture");
		companyNameIDs.push("alcatel-lucent");
		companyNameIDs.push("boeing");
		companyNameIDs.push("fenwal");*/

		
companyNameIDs.push("fenwal");
companyNameIDs.push("carsdotcom");
companyNameIDs.push("fti");
companyNameIDs.push("bemis");
companyNameIDs.push("epic");
companyNameIDs.push("mathworks");
companyNameIDs.push("boeing");
companyNameIDs.push("kiewit");
companyNameIDs.push("alcatel-lucent");
companyNameIDs.push("imc");
companyNameIDs.push("mwrdgc");
companyNameIDs.push("cme-group");
companyNameIDs.push("pratt-whitney");
companyNameIDs.push("gtl");
companyNameIDs.push("pwc");
companyNameIDs.push("itw");
companyNameIDs.push("trading-tech");
companyNameIDs.push("sbb");
companyNameIDs.push("outerwall");
companyNameIDs.push("com-ed");
companyNameIDs.push("chopper-trading");
companyNameIDs.push("citadel");
companyNameIDs.push("clarity");
companyNameIDs.push("yahoo");
companyNameIDs.push("gdeb");
companyNameIDs.push("wolverine-trading");
companyNameIDs.push("mta");
companyNameIDs.push("mbhb-llc");
companyNameIDs.push("think-big");
companyNameIDs.push("here-nokia");
companyNameIDs.push("etherios");
companyNameIDs.push("lend-lease");
companyNameIDs.push("schneider-electric");
companyNameIDs.push("zebra-tech");
companyNameIDs.push("ucc");
companyNameIDs.push("northwestern-mutual");
companyNameIDs.push("idot");
companyNameIDs.push("pariveda");
companyNameIDs.push("continental");
companyNameIDs.push("zs-associates");
companyNameIDs.push("ida");
companyNameIDs.push("factset");
companyNameIDs.push("altec");
companyNameIDs.push("chrylser-group");
companyNameIDs.push("adage-tech");
companyNameIDs.push("denso");
companyNameIDs.push("environ");
companyNameIDs.push("ama");
companyNameIDs.push("wrigley");
companyNameIDs.push("sapient-nitro");
companyNameIDs.push("hfz-llc");
companyNameIDs.push("avantcredit");
companyNameIDs.push("spacex");
companyNameIDs.push("dmc-inc");
companyNameIDs.push("pepsico");
companyNameIDs.push("wms");
companyNameIDs.push("nielsen");
companyNameIDs.push("dropbox");
companyNameIDs.push("thoughtworks");
companyNameIDs.push("allstate");
companyNameIDs.push("deloitte");
companyNameIDs.push("oracle");
companyNameIDs.push("ge");
companyNameIDs.push("mozilla");
companyNameIDs.push("tata");
companyNameIDs.push("hospira");
companyNameIDs.push("pec");
companyNameIDs.push("readyforce");
companyNameIDs.push("accenture");
companyNameIDs.push("shmoop");
companyNameIDs.push("ford");
companyNameIDs.push("united-airlines");
companyNameIDs.push("goodyear");
companyNameIDs.push("at-t");
companyNameIDs.push("s-c-electric");
companyNameIDs.push("exxon-mobil");
companyNameIDs.push("facebook");
companyNameIDs.push("discover");
companyNameIDs.push("3m");
companyNameIDs.push("baxter");
companyNameIDs.push("p-g");
companyNameIDs.push("northrop-grumman");
companyNameIDs.push("gaf");
companyNameIDs.push("microsoft");

		


			//for (var compIdIndex = 0; compIdIndex < this.nodes.length; ++compIdIndex) {

			
				/*var node = this.nodes[nodeIndex];
				if (!node.selected()) {
					// Only retain non-selected nodes.
					newNodeViewModels.push(node);
					newNodeDataModels.push(node.data);
				}
				else {
					// Keep track of nodes that were deleted, so their connections can also
					// be deleted.
					deletedNodeIds.push(node.data.id);
				}*/

		//for (var compIdIndex = 0; compIdIndex < companyNameIDs.length; ++compIdIndex) {
			//}


		var xOffset = 120 + 5; 	// NEED TO SET THESE TO NON-LOCAL VARS
		var yOffset = 40 + 5;	// NEED TO SET THESE TO NON-LOCAL VARS

		/*
		var numRowInput = prompt("Enter number of booths in a row:", "4");
		if (!numRowInput) { return; }

		var numColInput = prompt("Enter number of booths in a col:", "3");
		if (!numColInput) { return; }


		var numRows = parseInt(numRowInput);
		var numCols = parseInt(numColInput);
		*/

		var numRows = 11; //companyNameIDs.length % 2;
		var numCols = 8; //companyNameIDs.length;

		var compIdIndex = 0;

		// make sure if you dont have evenly filled rows itll be okay

		//for (var compIdIndex = 0; compIdIndex < companyNameIDs.length; ++compIdIndex)

		// TODO: make sure if you dont have ENOUGH rows/cols itll be okay too!

		// TODO: need to go in reverse cuz this way reversed order of booths
		for (var i = 0; i < numRows; ++i) {
			//addNewBooth();
			for (var j = 0; j < numCols && compIdIndex < companyNameIDs.length; ++j) {
				createNewBooth(j*xOffset, i*yOffset, companyNameIDs[compIdIndex]);
				++compIdIndex;
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