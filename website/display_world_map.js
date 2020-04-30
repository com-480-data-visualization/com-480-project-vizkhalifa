function main() {

	// set svg's height and with
	const SVG_HEIGHT = 400;
	const SVG_WIDTH  = 800;

	// set margins
	var margin = {top: 50, 
		left: 50,
		right: 50, 
		bottom: 50};

	// set actual height and width (remove margins)
	height = SVG_HEIGHT - margin.top - margin.bottom;
	width  = SVG_WIDTH - margin.left - margin.right;

	// construct world map's svg
	var svg = d3.select("#world-map")
		.append("svg")
		.attr("height", height + margin.top + margin.bottom)
		.attr("width", width + margin.left + margin.right)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("background", "white");

	// construct another world map's svg to compare styles
	var svg2 = d3.select("#world-map2")
		.append("svg")
		.attr("height", height + margin.top + margin.bottom)
		.attr("width", width + margin.left + margin.right)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		.attr("background", "#efefef");

	// create projection
	// here are some that look pretty good to Jon:
	var projection = d3.geoNaturalEarth1().translate([width / 2, height / 2]).scale(150)
	// var projection = d3.geoMercator().translate([width / 2, height / 2])

	// create path generator
	var path = d3.geoPath().projection(projection)

	// import world atlas topojson
	d3.queue()
		.defer(d3.json, "https://unpkg.com/world-atlas@1.1.4/world/110m.json")
		.await(ready);

	// display map
	function ready(error, data) {
		// get countries' topographic data
		var countries = topojson.feature(data, data.objects.countries).features
		console.log(countries);

		// display countries and define hovering/selecting behavior
		svg.selectAll(".country")
			.data(countries)
			.enter()
			.append("path")
			.attr("class", "country")
			.attr("d", path)
			.on("mouseover", function(d) {
				d3.select(this).classed("hovered", true);
			})
			.on("mouseout", function(d) {
				d3.select(this).classed("hovered", false);
			})

		// display countries and define hovering/selecting behavior
		svg2.selectAll(".country")
			.data(countries)
			.enter()
			.append("path")
			.attr("class", "country2")
			.attr("d", path)
			.on("mouseover", function(d) {
				d3.select(this).classed("hovered2", true);
			})
			.on("mouseout", function(d) {
				d3.select(this).classed("hovered2", false);
			})
	}

}

function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		action();
	};
}

whenDocumentLoaded(() => {
	// just call main() function when the document is loaded
	main()
});