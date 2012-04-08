var map = {
	"a": "http://www.amazon.com/exec/obidos/search-handle-url/index%3Dblended%26field-keywords%3D@@@",
	"down": "http://downforeveryoneorjustme.com/@@@",
	"e": "http://search.ebay.com/search/search.dll?satitle=@@@",
	"ea": "http://search.ebay.com.au/search/search.dll?satitle=@@@",
	"g": "http://www.google.com/search?q=@@@",
	"gi": "http://google.com/images?q=@@@",
	"gm": "http://maps.google.com/maps?oi=map&q=@@@",
	"imdb": "http://imdb.com/find?s=all&q=@@@",
	"pb": "https://pinboard.in/search/?query=@@@&mine=Search+Mine",
	"so": "http://stackoverflow.com/search?q=@@@",
	"st": "http://memory-alpha.org/wiki/index.php?search=@@@&fulltext=0",
	"sw": "http://starwars.wikia.com/wiki/index.php?search=@@@&fulltext=0",
	"tpb": "http://thepiratebay.org/search/@@@/0/7/0",
	"w": "http://en.wikipedia.org/w/index.php?search=@@@",
	"wa": "http://www.wolframalpha.com/input/?i=@@@",
	"wq": "http://en.wikiquote.org/wiki/Special:Search?search=@@@&go=Go",
	"y": "http://youtube.com/results?search_query=@@@"
}

function parseURL(url) {
	
	/* URL will be null for things like Top Sites. */
	if (url == null) {
		return null;
	}
	
	var queryStart = url.indexOf("client=safari&rls=en&q=") + 23;
	var queryEnd = url.indexOf("&", queryStart);
	var queryString = url.substr(queryStart, queryEnd-queryStart);
	
	var site = map[queryString.split("+")[0]];
	
	if (site != undefined) {
		return site.replace("@@@", queryString.substr(queryString.split("+")[0].length));
	}
	
	return null;
}

safari.application.addEventListener("beforeNavigate", function(event) {
	var url = event.url;
	var newURL = parseURL(url);
	
	if (newURL == null) {
		return;
	}
	safari.application.activeBrowserWindow.activeTab.url = newURL;
}, true);