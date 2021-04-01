  function f_TrataLista(data)
  {	 	 	 	  
    console.log("andre sanches iniciou tratamento");
    
	var myList = new Array();
	  
	 myList.push(JSON.parse('{"location":"Ireland","date":"2021-03-29","vaccine":"","source_url":"","total_vaccinations":"819676","people_vaccinated":"590688","people_fully_vaccinated":"228988"}'));
	  	 
	 //starting 
	 
	  var objeto =  JSON.parse(data);	 	 	 	 				 			
	 
	  myList.forEach( (element) => {
		 
		 var found = false;
         for(var i = 0; i < objeto.length; i++) {
             if (objeto[i].date == element.date) {
                 found = true;
                 break;
             }
         }
		 
		 if (found)
		 {
			 console.log("FOUND");
		 }
		 else 
		 {
			 console.log("NOT FOUND");
			 objeto.push(element);
		 }
		 
		 
	 });
	 
	 
	 return JSON.stringify(objeto);
	 
  }