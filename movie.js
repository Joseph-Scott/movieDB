var movies = [
	{
		title: "Stranger Things",
		rating: 5,
		hasWatched: true
	},
	{
		title: "The Shining",
		rating: 5,
		hasWatched: true
	},
	{
		title: "The Sixth Sense",
		rating: 5,
		hasWatched: true
	},
	{
		title: "The Exorcist",
		rating: 5,
		hasWatched: true
	}
]

function buildString(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

movies.forEach(function(movie){
	console.log(buildString(movie));
});