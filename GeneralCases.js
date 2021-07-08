async function GetGenralCases(cidade,maxDias)
{
	
 var dataFixa = new Date();
 
 //allowing 10 days ahead cuz date is always at least 3 days behind today
 dataFixa.setDate(dataFixa.getDate()-(maxDias +10));


let response =  await fetch("https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/full_data.csv");

let data = await response.text();

var arr = String(data).split('\n');

var jsonObj = [];
var headers = arr[0].split(',');


for(var i = (arr.length-1); i > 0; i--) 
{	   
	
	var data2 = arr[i].split(',');	
	
	if (data2[1] == cidade)
	{	
       
		
	   let dataNew =  new Date(data2[0]);
	   
	   
	   
	   if (dataNew >= dataFixa) {
	       
          var obj = {};
          
	      for(var j = 0; j < data2.length; j++) 
	      {
             obj[headers[j].trim()] = data2[j].trim();
          }
          if (obj.location != "") 
	      {  
            jsonObj.push(obj); 
	      }
	   }
	   else 
	   {
		   
		   
		   break;
	   }
    }
   
}




return jsonObj;

}

function GetCasesDay(objData,GeneralObjectList)
{			
    var result = 0;

	let DataToFind = new Date(objData.date);	
	
	GeneralObjectList.forEach((element) => 
	{
		if (result <= 0 ) {
	   let data = new Date(element.date);
	   	   	 
	   if (CheckData(DataToFind,data)) 
	   {		   
		  		  
		  result = element.new_cases;          		  
	   }
	   
		}
	});	
	
	
	return result;

}