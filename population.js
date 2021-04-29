async function populacao(cidade){

let response =  await fetch("https://world-population.p.rapidapi.com/population?country_name="+cidade, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "5ccd43a11fmshd573126375954e7p10a916jsn8df2cb23a1b4",
		"x-rapidapi-host": "world-population.p.rapidapi.com"
	}
});

let data = await response.text();

return data;

}