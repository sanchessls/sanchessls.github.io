function  Who(song)
{    
console.log("Entrou no who");

  const url = "http://learningenglish2.ddns.net:7777/Who";
    const myHeaders = new Headers();
	myHeaders.append('GET', 'POST', 'OPTIONS');
    
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: myHeaders
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
		console.log("sanches1")
		console.log(data.messages)
        
    })
    .catch(function(error) {
		console.log("sanches2")
        console.log(error);
    });
	
	console.log("final?")
	
	
}

