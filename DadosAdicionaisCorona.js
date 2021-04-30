  function f_TrataLista(data,CountryName)
  {	 	 	 	  
    
    
	var myList = new Array();
	  
 
	 console.log("era igual?");
	 console.log(CountryName);
	if (CountryName == "Ireland")  {
	 console.log("Sim");
//INICIO AUTOMATICOS IRELAND    
   
   	 myList.push(JSON.parse('{"location":"Ireland","date":"2021-03-29","vaccine":"","source_url":"","total_vaccinations":"819676","people_vaccinated":"590688","people_fully_vaccinated":"228988"}'));
	 
	 myList.push(JSON.parse('{"location":"Ireland","date":"2021-03-30","vaccine":"","source_url":"","total_vaccinations":"840561","people_vaccinated":"603802","people_fully_vaccinated":"236759"}'));
	  
     myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-03","vaccine":"","source_url":"","total_vaccinations":"932324","people_vaccinated":"660800","people_fully_vaccinated":"271524"}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-06","vaccine":"","source_url":"","total_vaccinations":961887,"people_vaccinated":679844,"people_fully_vaccinated":282043}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-07","vaccine":"","source_url":"","total_vaccinations":1018264,"people_vaccinated":716636,"people_fully_vaccinated":301628}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-09","vaccine":"","source_url":"","total_vaccinations":1045919,"people_vaccinated":735997,"people_fully_vaccinated":309922}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-10","vaccine":"","source_url":"","total_vaccinations":1058394,"people_vaccinated":745363,"people_fully_vaccinated":313031}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-11","vaccine":"","source_url":"","total_vaccinations":1063666,"people_vaccinated":749450,"people_fully_vaccinated":314216}'));	 
	  

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-13","vaccine":"","source_url":"","total_vaccinations":1094964,"people_vaccinated":769721,"people_fully_vaccinated":325243}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-14","vaccine":"","source_url":"","total_vaccinations":1121003,"people_vaccinated":789526,"people_fully_vaccinated":331477}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-15","vaccine":"","source_url":"","total_vaccinations":1155599,"people_vaccinated":814470,"people_fully_vaccinated":341129}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-16","vaccine":"","source_url":"","total_vaccinations":1188354,"people_vaccinated":838644,"people_fully_vaccinated":349710}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-17","vaccine":"","source_url":"","total_vaccinations":1204063,"people_vaccinated":852189,"people_fully_vaccinated":351874}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-18","vaccine":"","source_url":"","total_vaccinations":1208459,"people_vaccinated":855512,"people_fully_vaccinated":352947}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-19","vaccine":"","source_url":"","total_vaccinations":1219487,"people_vaccinated":863958,"people_fully_vaccinated":355529}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-23","vaccine":"","source_url":"","total_vaccinations":1359921,"people_vaccinated":966611,"people_fully_vaccinated":393310}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-25","vaccine":"","source_url":"","total_vaccinations":1398061,"people_vaccinated":998134,"people_fully_vaccinated":399927}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-26","vaccine":"","source_url":"","total_vaccinations":1417942,"people_vaccinated":1014640,"people_fully_vaccinated":403302}'));	 

 myList.push(JSON.parse('{"location":"Ireland","date":"2021-04-27","vaccine":"","source_url":"","total_vaccinations":1452434,"people_vaccinated":1041284,"people_fully_vaccinated":411150}'));	 
//FIM AUTOMATICOS	  	 
	 
	}
	else {console.log("Nao");}
	 
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
	 	 
	 var listaFinal = objeto.sort((a, b) => a.date.localeCompare(b.date));
	  
	 return JSON.stringify(listaFinal);
	 
  }
