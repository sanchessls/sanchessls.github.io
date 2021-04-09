  function f_TrataLista(data)
  {	 	 	 	  
    
    
	var myList = new Array();
	  
	 myList.push(JSON.parse('{"location":"Ireland","date":"2021-03-29","vaccine":"","source_url":"","total_vaccinations":"819676","people_vaccinated":"590688","people_fully_vaccinated":"228988"}'));
	 
	 myList.push(JSON.parse('{"location":"Ireland","date":"2021-03-30","vaccine":"","source_url":"","total_vaccinations":"840561","people_vaccinated":"603802","people_fully_vaccinated":"236759"}'));
	  
     myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-03","vaccine":"","source_url":"","total_vaccinations":"932324","people_vaccinated":"660800","people_fully_vaccinated":"271524"}'));	  
	 
	 
	 
//INICIO AUTOMATICOS     
  

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-06","vaccine":"","source_url":"","total_vaccinations":961887,"people_vaccinated":679844,"people_fully_vaccinated":282043}'));	 
//FIM AUTOMATICOS	  	 
	 
	 
	 
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
			 console.log("MANUAL , POREM JA VEIO NO AUTOMATICO " + element.date);
		 }
		 else 
		 {
			 console.log("ADICIONADO MANUALMENTE : " + element.date);
			 objeto.push(element);
		 }
		 
		 
	 });
	 
	 
	 return JSON.stringify(objeto);
	 
  }
