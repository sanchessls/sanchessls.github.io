function  Who(song)
{    
console.log("Entrou no who");

	const response =  fetch("http://learningenglish2.ddns.net:7777/Who");
	console.log("response?")
	console.log(response)
	
	
	
	const myJson = response.value(); //extract JSON from the http response
	// do something with myJson	
	console.log(myJson);
	console.log("Saiu do Who");
    
	
	console.log("final?")
	console.log(userAction)
	
}

