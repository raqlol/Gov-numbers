var govInfo = [];

var gov = new XMLHttpRequest();
var url = "http://localhost:8000/api/gov";
gov.open("GET", url, true);
gov.send();
gov.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
 		govInfo = JSON.parse(this.responseText);
		displayData(govInfo);
		return govInfo
	}
}

function displayData (object) {
	var results="";
	for (obj of object){
		results += obj.name+ " " + " " + obj.party + " " + obj.title + " call them up and give'em hell " + obj.phone + "<br/>";
	}
	document.getElementById('results').innerHTML = results
}
var newSearch = [];
function filter () {
	newSearch = [];
	var search = document.getElementById("search").value;
	search = search.toLowerCase();
	for (obj of govInfo) {
		for (govDetails in obj) {
			if ((obj[govDetails] !== null) && (isNaN(obj[govDetails]))){
				//obj[govDetails] = obj[govDetails].toLowerCase()
				var check = obj[govDetails].toLowerCase().includes(search);
				if(check) {
					newSearch.push(obj);
					break
				}
			}
		}
	}
	displayData(newSearch);
}

var searchBar = document.getElementById("search");
var submit = document.getElementById("submit");
submit.addEventListener("click", filter);
