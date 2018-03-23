var userInput;
var searchUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
var contentUrl = "https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&titles=";

function setup() {
	noCanvas();
	userInput = select('#userInput');
	userInput.changed(search);

}

function search(){
	let term = userInput.value();
	let url = searchUrl + term;

	loadJSON(url, getSearch, 'jsonp');


}

function getSearch(data){
	let len = data[1].length;

	for (var index = 0; index < len; index++) {
		let title = data[1][index];
		// title = title.replace(/\s+/, '_');
		let url = data[3][index];
		createA(url, title);	
		createP("");	
	}
}
