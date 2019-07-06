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

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
});